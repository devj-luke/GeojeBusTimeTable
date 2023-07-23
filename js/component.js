// 버튼 상태를 토글하는 함수
function toggleButtonText(isState1) {
    var btnGroup = document.querySelector('.toggle-wrapper');
    var buttons = btnGroup.querySelectorAll('.toggle-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    if (isState1) {
        buttons[0].classList.add('active');
    } else {
        buttons[1].classList.add('active');
    }
}