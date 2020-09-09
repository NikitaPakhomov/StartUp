let btns = document.querySelectorAll('.brands__button__a');
let quotes = document.querySelectorAll('.brands__quote');


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
    console.log(number);
    // quotes[0].style.transform = 'translateX(-1000px)';
    // quotes[1].style.transform = 'translateX(-790px)';
    quotes[0].offsetLeft = -790;
    console.log(quotes[0].offsetLeft);

}