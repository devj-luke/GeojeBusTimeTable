import {busInKeys,bus_data} from '../data/50-in-data.js'

$(document).ready(function () {
    init();
})

function init(){

    //select item 초기화
    $.each(busInKeys,function (index,item) {
        $('#select-start').append(`<option value="${index}">${item} </option>`);
    });

    //select 이벤트 등록
    $('#select-start').change(function (){
        const   idx         = $('#select-start').val(),
                value       = busInKeys[idx];//선택된 값 , ex) 고현
        $('.alert').addClass('d-none');
        initList(value);
        changeFocusBusTime();
    });
    //Refresh 버튼 이벤트 등록
    $('#refreshBtn').on("click",function () {
        const   idx         = $('#select-start').val(),
                value       = busInKeys[idx];//선택된 값 , ex) 고현
        initList(value);
        changeFocusBusTime();
    })

    //목록 생성
    //초기값은 항상 키의 첫번째 항목이다.
    initList(busInKeys[0]);

    //시간 포커싱 하기
    changeFocusBusTime();

    //모바일 active 이슈 해결을 위해 추가
    $(document).on("touchstart", function(){ });
}

function initList(select_key){

    //기존 값 초기화
    $('.content').html('');

    //List 항목 생성
    $.each((bus_data),function (index,item) {

        //현재 선택된 터미널 , 초기값은 항상 0
        const    busNumber  = item.번호
                ,keyExists  = bus_data[index].hasOwnProperty(select_key)
                ,busTime    = keyExists ? bus_data[index][select_key] : "X"
                ,busInfo    = bus_data[index]["비고"].replace(/\n/g, "<br>")
                ,keys       = Object.keys(bus_data[index])//bus_data[index] 요소의 키를 뽑아냄
                ,busRoute    = keys.slice(1,keys.length-1).join("<span class='brown-text'><b> → </b></span>")
                ,fianlRoute  = keys[keys.length-2];

        // let busInfo = bus_data[index]["비고"].replace(/\n/g, "<br>");
        let busInfoColorText = createBusInfoColorText(busInfo);

        if(busTime !=="X") {
            $('.content').append(`    <div class="d-flex flex-column item">
                                            <div class="item__number    d-flex">
                                                <div class="title content-border-bottom">시간</div>
                                                <div class="value content-border-bottom pl-2">${busTime}</div>
                                            </div>
                                            <div class="item__number    d-flex">
                                                <div class="title content-border-bottom">번호</div>
                                                <div class="value content-border-bottom pl-2">${busNumber}</div>
                                            </div>
                                            <div class="item__number    d-flex">
                                                <div class="title content-border-bottom">종점</div>
                                                <div class="value content-border-bottom pl-2">${fianlRoute}</div>
                                            </div>
                                            <div class="item__info      d-flex">
                                                <div class="title content-border-bottom">경로</div>
                                                <div class="value content-border-bottom pl-2">${busRoute}</div>
                                            </div>
                                            <div class="item__etc       d-flex">
                                                <div class="title">비고</div>
                                                <div class="value pl-2">${busInfoColorText}</div>
                                            </div>
                                        </div>`
            );

        }
    })
}
function getCurrentTime(separator) {
    const    date = new Date()
            ,hour = String(date.getHours()).padStart(2, '0')
            ,min  = String(date.getMinutes()).padStart(2, '0');

    return  `${hour}${separator ?? ''}${min}`;
}
function changeFocusBusTime(){
    const    busTime     = $('.item__number:nth-child(1) > div:nth-child(2)')
            ,currentTime = parseInt(getCurrentTime());
    //탈수있는 버스 존재 확인용 변수
    let     isBusTime   = false;

    //현재 출력된 모든 시간표의 시간을 가지고 반복문을 실행함
    busTime.each(function (index,element) {
        //시간표 시간 정수형으로 변환
        let time = parseInt($(element).text().replace(":",""));

        /*
        * 이 로직의 핵심은 현재시간의 06:00를 600와 같이 정수로 변경하여 그 값을 비교하는 것이다.
        * 현재 값 보다 시간표의 값이 작으면 해당되지 않을 것이고 크다면 현재 탈 수 있는 시간인 점을 생각했다.
        * 해당 if문을 비교하여 시간표의 값이 크면 루프는 종료되고 해당 시간표로 포커싱 된다.
        */
        if(currentTime <= time){
            const    item   = $(element).parent().parent()
                    ,pos    = $(item).offset().top - $('header').height() - 10;         //.item 시작 위치
                                                                                        // div 위치 - 상단 header - 뛰우고싶은값

            //색상 변경
            $(item).addClass('item-focus');

            //포커스 이동 시킴
            $('html, body').animate({
                scrollTop: pos
            }, 500);

            isBusTime = true;
            return false;
        }

    });

    /**
     *  탈수있는지 없는 여부별로 alert 뛰움
     *  @param isBusTime true : 탈 버스 존재 , false : 탈버스 미존재
     */
    if(isBusTime){
        $('.alert').addClass('d-none');
    }
    else{
        $('.alert').removeClass('d-none');
        //맨 상단으로 포커스 이동
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }
    /**
     * 중복 클릭 방지 로직
     * Focus 이동할 필요가 있을때만 조회버튼 비활성화 시킨다.
     */
    if(isBusTime){
        $('.btn').addClass('disabled')
        setTimeout(function () {
            $('.btn').removeClass('disabled');
        },1000)
    }
    else{
        $('.btn').addClass('disabled')
    }
    return true;
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
        if (item.includes('미경유')) {
            textColor = 'red-text';
        } else if (item.includes('경유')) {
            textColor = 'blue-text';
        }
        tempText += `<span class="${textColor}">${item}</span><br>`;
    });

    return tempText;
}