
const FLAG_BUS_ROUTE_IN    = true;  //{동네명 출발} 일때
const FLAG_BUS_ROUTE_OUT   = false; //고현 출발 일때

let  gFlag      //시간표 출력 상태 { true : 고현출발 , false : {동네명} 출발}
    ,gRoute     //시간표 현재 옵션 { 시간표 키값 }
    ,gPath      //동네명 현재 옵션 { 동네명 키값 }
    ,bus_data   //import된 버스 시간표
    ,busKeys;   //import된 경로 키값  ,동네명키값이다.


$(document).ready(function () {
    init();
})
function init(){
    //로컬스토리지 확인
    checkLocalStorageRoute();
    importTimeTable()
        .then(() => {
            $('.button-label').text(`현재 시간표 조회 기준 시각 : ${convertToTimeString(getCurrentTime())}`);
            //개체별 기본 값 세팅
            initComponent();
            //개체별 이벤트 등록
            initEventListener();

            checkLocalStoragePath();

            //시간표 생성
            createHtml();
            //시간표 포커싱
            focusTimeTable();
        })
        .catch((error) =>{
            console.error("예외가 발생했습니다:", error.message);
            $('.alert').hide();
            $('.alert-file').show();
        })
}
/**
 * 페이지 로딩 시 로컬 스토리지 노선 정보가 있는지 확인한다.
 */
function checkLocalStorageRoute(){
    const    route = localStorage.getItem('gRoute')
            ,flag   = localStorage.getItem('gFlag');
    if(route !== null && flag !== null){
        gFlag   = JSON.parse(flag);
        gRoute  = localStorage.getItem("gRoute");

        $('#select-route-number').val(gRoute);

        let buttonElement;
        if(gFlag)   {   buttonElement = $('#btn-bus-in');   }
        else        {   buttonElement = $('#btn-bus-out');  }
        buttonElement.addClass('active');
        $('.toggle-btn').not(buttonElement).removeClass('active');
    }
    else{
        gRoute = $('#select-route-number option:selected').val();
        localStorage.setItem("gRoute",gRoute);
        localStorage.setItem("gFlag",JSON.stringify(FLAG_BUS_ROUTE_IN));
    }
}
/**
 * 페이지 로딩 시 로컬 스토리지 경로 정보가 있는지 확인한다.
 */
function checkLocalStoragePath(){
    const path   = localStorage.getItem('gPath');

    if( path !== null){
        gPath   = localStorage.getItem("gPath");
        $('#select-start').val(gPath);
    }
    else{
        gPath = $('#select-start option:selected').text().trim();
        localStorage.setItem("gPath",gPath);
    }
}
/**
 * 시간표 변환 시 데이터를 다시 생성하고 포커싱 하는 함수
 * 중복 코드 제거를 위해서 만들었다.
 */
function loadTimeTable(){
    //데이터 로딩
    importTimeTable().then(() => {
        //기준 시간 출력
        $('.button-label').text(`현재 시간표 조회 기준 시각 : ${convertToTimeString(getCurrentTime())}`);
        //html 생성
        createHtml();
        //항목 포커싱
        focusTimeTable();
    });
}

/**
 * 선택 상태에 따라 시간표 데이터를 import
 * @returns {Promise<void>}
 */
async function importTimeTable() {

    let obj;

    switch (gRoute){
        case "50":
        {
            obj = await import('../data/50-data.js');
            break;
        }
        case "70":
        {
            obj = await import('../data/70-data.js');
            break;
        }
        default:
        {
            throw new Error("시간표를 가져오는 중에 오류가 발생했습니다.");
        }
    }
    if (gFlag)    {      bus_data = obj.bus_data_in;     }
    else          {      bus_data = obj.bus_data_out;    }
    busKeys     = obj.busKeys;
}

/**
 * 화면에서 사용되는 요소의 값을 셋팅하는 코드 모음이다.
 * 초기 값 셋팅하는 코드를 모아둠
 */
function initComponent(){
    //select item 초기화
    $.each(busKeys,function (index,item) {
        $('#select-start').append(`<option value="${item}">${item} </option>`);
    });
}
/**
 * 화면에서 사용되는 리스너를 등록하는 코드 모음이다.
 */
function initEventListener(){
    //노선 select 이벤트 등록
    $('#select-route-number').change(function (){
        gRoute  = $('#select-route-number option:selected').val()
        importTimeTable()
            .then(()=>{
                gPath   = busKeys[0];
                localStorage.setItem("gRoute",gRoute);
                localStorage.setItem("gPath",gPath);

                //경로 select 변경
                $('#select-route-number').val(gRoute);
                //select item 초기화
                const select = $('#select-start');
                $(select).html('');
                $.each(busKeys,function (index,item) {
                    $('#select-start').append(`<option value="${item}">${item} </option>`);
                });
                $(select).val(gPath);

                loadTimeTable();
        });
    });
    //select 이벤트 등록
    $('#select-start').change(function (){
        const path = $('#select-start option:selected').text().trim()
        localStorage.setItem("gPath",path);
        gPath=path;
        loadTimeTable();
    });
    //Refresh 버튼 이벤트 등록
    $('#refresh-button').on("click",function () {
        $('.button-label').text(`현재 시간표 조회 기준 시각 : ${convertToTimeString(getCurrentTime())}`);
        focusTimeTable();
    })

    $('.toggle-btn').on('click', function() {
        const btnId = $(this).attr('id');

        switch (btnId){
            case 'btn-bus-in':
            {
                if(!$('.btn-bus-in').hasClass('active')){
                    gFlag = FLAG_BUS_ROUTE_IN;
                    localStorage.setItem("gFlag",JSON.stringify(FLAG_BUS_ROUTE_IN));
                    toggleBtnBus(this);
                }
                break;
            }
            case 'btn-bus-out':
            {
                if(!$('.btn-bus-out').hasClass('active')){
                    gFlag = FLAG_BUS_ROUTE_OUT;
                    localStorage.setItem("gFlag",JSON.stringify(FLAG_BUS_ROUTE_OUT));
                    toggleBtnBus(this);
                }
                break;
            }
        }
    });
    //모바일 active 이슈 해결을 위해 추가
    $(document).on("touchstart", function(){ });
}
/**
 * 버튼 클릭 시 active 상태 toggle 하는 함수.
 * @param buttonElement 클릭된 버튼 this
 */
function toggleBtnBus(buttonElement){
    // 현재 클릭한 버튼의 클래스를 토글 (active 클래스 추가 또는 제거)
    $(buttonElement).toggleClass('active');
    $('.toggle-btn').not(buttonElement).removeClass('active');

    loadTimeTable();
}

/**
 * 불러온 데이터를 기반으로 html을 생성하는 함수다.
 */
function createHtml(){


    //시간 선택 버튼에 선택한 경로 표기
    $('.btn-bus-in').text(`고현 →  ${gPath}`);
    $('.btn-bus-out').text(`${gPath} →  고현`);

    //기존 값 초기화
    $('.content').html('');

    //List 항목 생성
    let data = $(bus_data).filter(function (index,item){
        return item.hasOwnProperty(gPath);
    });

    $.each(data,function (index,item) {
        const    busNumber      = item.번호
                ,keys           = Object.keys(data[index])//bus_data[index] 요소의 키를 뽑아냄
                ,firstKey       = keys[1]
                ,busTime        = gFlag ? item[firstKey] : item[gPath]
                ,busInfo        = data[index]["비고"].replace(/\n/g, "<br>")
                ,finalRoute     = keys[keys.length-2];

        let busRoute ='';

        $.each(keys.slice(1,keys.length-1),function (idx,item){
            let      routeTime      = data[index][item].trim();
            const    toggleBtn      = $('.active').text().split('→')
                    ,start          = toggleBtn[0].trim()
                    ,end            = toggleBtn[1].trim();
            if(routeTime === '시간 미제공'){
                routeTime = 'X';
            }
            if (idx !== 0 && idx !== keys.length - 3) {
                busRoute += `<span class='brown-text'><b> ⇣ </b></span>`
            }

            if(keys[idx+1] === start || keys[idx+1] === end){
                item = `<span class="routeName-select">${item}</span>`
            }
            else{
                item = `<span class="routeName-none">${item}</span>`
            }
            busRoute += `${item}<span class="routeTime">(${routeTime})</span>`
            busRoute +=`<br>`
        });
        let busInfoColorText = createBusInfoColorText(busInfo);

        if(busTime !=="X") {
            $('.content').append(`    <div class="d-flex flex-column item">                                            
                                            <div class="item__number    d-flex content-border-bottom">
                                                <div id="bus-time-value" class="value bg-highlight border-right border-dark">${busTime}</div>
                                                <div class="value bg-white border-right border-dark">${busNumber}</div>
                                                <div class="value bg-white">${finalRoute}</div>
                                                <div class="value-etc bg-white">${busInfoColorText}</div>
                                            </div>                                            
                                            <div class="item__info      d-flex">
                                                <div class="title bg-gray border-right border-dark">경로</div>
                                                <div class="value-path content-border-bottom pl-2">${busRoute}</div>
                                            </div>
                                        </div>`
            );

        }
    });
}
function getCurrentTime(separator) {
    const    date = new Date()
            ,hour = String(date.getHours()).padStart(2, '0')
            ,min  = String(date.getMinutes()).padStart(2, '0');

    return  `${hour}${separator ?? ''}${min}`;
}

/**
 * 생성한 html 요소에서 탑승 가능한 버스 시간으로 이동 시켜주는 함수.
 */
function focusTimeTable(){
    const    busTime            = $('[id="bus-time-value"]')
            ,currentTime        = getCurrentTime()
            ,currentTimeInt     = parseInt(currentTime)
            ,alert              = $('.alert');

    //기존 item 포커스 제거
    $('.item-focus').removeClass('item-focus');

    //모든 alert 비활성화
    $(alert).hide();

    //생성된 HTML 미존재
    if(busTime.length === 0 ){
        $('.alert-path').show();
        return 0;
    }
    //생성된 HTML 존재 시

    //시간 미제공만 있는 경우
    const cntNoTimeValue = busTime.filter(function () {
        return $(this).text().trim() === '시간 미제공';
    });
    if(cntNoTimeValue.length === busTime.length){
        $('.alert-info').show();
        //최상단으로 포커스 이동 시킴
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return 0;
    }

    //시간 값 존재 시
    const cntTimeValue = busTime.filter(function () {
        return $(this).text().trim() !== '시간 미제공';
    });

    let isBusTime = false;

    $.each(cntTimeValue,function (index,item) {
        let value = parseInt($(item).text().replace(':',''));
        if(currentTimeInt <= value){
            const    parentItem = $(item).parent().parent()
                    ,pos        = $(parentItem).offset().top - $('header').height() - 40;
            //해당 항목 active
            $(parentItem).addClass('item-focus');

            //포커스 이동
            $('html,body').animate({
                scrollTop:pos
            },500);

            isBusTime = true;
            return false;//each 종료
        }
    })
    //탑승 가능한 버스가 없을 경우
    if(!isBusTime){
        //가능한 시간 없을 경우
        let lasIdx = -1;
        $.each(busTime,function (index,item) {
            if($(item).text().trim() === $(cntTimeValue[cntTimeValue.length-1]).text().trim()){
                lasIdx = index;
            }
        })
        if(lasIdx === busTime.length-1){
            $('.alert-warning').show();
        }
        else{
            $('.alert-info').show();
        }
        //최상단으로 포커스 이동 시킴
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }

    /**
     * 중복 클릭 방지 로직
     * Focus 이동할 필요가 있을때만 조회버튼 비활성화 시킨다.
     */
    if(isBusTime){
        $('.refresh-icon').addClass('disabled')
        setTimeout(function () {
            $('.refresh-icon').removeClass('disabled');
        },1000)
    }
    else{
        $('.refresh-icon').addClass('disabled')
    }
}

/**
 * 미경유,경유에 대해 색상 하이라이트를 위한 텍스트를 만들어주는 함수
 * @param text          하이라이트할 문자열
 * @returns {string}    하이라이트 처리된 문자열
 */
function createBusInfoColorText(text){
    let  busInfoArray   = text.split('<br>')
        ,tempText       = '';

    $.each(busInfoArray, function(index, item) {
        let textColor = '';
        if (    item.includes('미경유')
            ||  item.includes('운행중지')) {
            textColor = 'red-text';
        } else if (     item.includes('경유')
                    ||  item.includes('운행') ) {
            textColor = 'blue-text';
        }
        tempText += `<span class="${textColor}">${item}</span><br>`;
    });

    return tempText;
}

/**
 *
 * @param input         문자열 시간값 들어옴 , ex : 1301 (1시1분)
 * @returns {string}    생성한 문자열 , ex : AM,PM 01:01
 */
function convertToTimeString(input) {

    // 입력 문자열을 앞의 두 자리와 뒤의 두 자리로 분리
    const timeStr = input;
    const hour = timeStr.slice(0, 2);
    const minute = timeStr.slice(2);

    // 시간과 분을 정수로 변환
    const hourInt = parseInt(hour, 10);
    const minuteInt = parseInt(minute, 10);

    // 올바른 범위의 시간과 분인지 확인
    if (hourInt < 0 || hourInt > 23 || minuteInt < 0 || minuteInt > 59) {
        throw new Error("유효하지 않은 입력입니다. 올바른 시간 형식을 입력해주세요.");
    }

    // 시간이 12 이상이면 PM, 아니면 AM으로 설정
    const meridiem = hourInt >= 12 ? "오후" : "오전";

    // 12시간 형식으로 변환
    const convertedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;

    // 최종 문자열 생성
    return `${meridiem} ${convertedHour.toString().padStart(2, "0")}시 ${minute.padStart(2, "0")}분`;
}
