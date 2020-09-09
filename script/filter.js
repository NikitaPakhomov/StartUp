let workItems = document.querySelectorAll('.latest-work__item');
let filters = document.querySelectorAll('.latest-work__addres');

function filtration(evt, filter) {
    evt.preventDefault();
    for (let key of filters) {
        key.classList.remove('active');
    }

    filter.classList.add("active");
    for (let workItem of workItems) {
        workItem.classList.remove('NotFilter');
        if (!workItem.classList.contains(`${filter.textContent}`)) {
            workItem.classList.add('NotFilter');
        }
    }
}

for (let filter of filters) {
    filter.addEventListener('click', () => filtration(event, filter));
}

