let btns = document.querySelectorAll('.brands__button__a');
let quotes = document.querySelectorAll('.brands__quote');
let cont = document.querySelector('.brands__quotes__container');
let widt = quotes[0].offsetWidth;

function work(event, btn) {
    event.preventDefault();
    btns.forEach(
        function (btn) {
            btn.classList.remove('brands__button_red')
        }
    );
    btn.classList.add('brands__button_red');
    let pos = btn.dataset.pos;
    next(pos);
}

btns.forEach(function (btn) {
    btn.addEventListener('click', () => work(event, btn));
});

function next(number) {
    cont.style.transform = `translateX(${number * (-widt)}px)`;
}