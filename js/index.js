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
                선택된값    = busInKeys[idx];

        initList(선택된값);
    });

    //목록 생성
    //초기값은 항상 키의 첫번째 항목이다.
    initList(busInKeys[0]);
}

function initList(select_key){

    //기존 값 초기화
    $('.content').html('');

    //List 항목 생성
    $.each((bus_data),function (index,item) {

        //현재 선택된 터미널 , 초기값은 항상 0
        const    버스번호  = item.번호
                ,keyExists = bus_data[index].hasOwnProperty(select_key)
                ,버스시간  = keyExists ? bus_data[index][select_key] : "X"
                ,버스비고  = bus_data[index]["비고"].replace(/\n/g, "<br>")
                ,keys      = Object.keys(bus_data[index])//bus_data[index] 요소의 키를 뽑아냄
                ,버스경로  = keys.slice(1,keys.length-1).join(" → ");

        const 종점    = keys[keys.length-2];

        if(버스시간 !=="X") {
            $('.content').append(`    <div class="d-flex flex-column item">
                                            <div class="item__number    d-flex">
                                                <div class="title content-border-bottom">시간</div>
                                                <div class="value content-border-bottom pl-2">${버스시간}</div>
                                            </div>
                                            <div class="item__number    d-flex">
                                                <div class="title content-border-bottom">번호</div>
                                                <div class="value content-border-bottom pl-2">${버스번호}</div>
                                            </div>
                                            <div class="item__number    d-flex">
                                                <div class="title content-border-bottom">종점</div>
                                                <div class="value content-border-bottom pl-2">${종점}</div>
                                            </div>
                                            <div class="item__info      d-flex">
                                                <div class="title content-border-bottom">경로</div>
                                                <div class="value content-border-bottom pl-2">${버스경로}</div>
                                            </div>
                                            <div class="item__etc       d-flex">
                                                <div class="title">비고</div>
                                                <div class="value pl-2">${버스비고}</div>
                                            </div>
                                        </div>`
            );

        }
    })
}