const cBtn = document.querySelector(".buttons-wrap .button_yellow");
const btns = cBtn.parentNode;
const fr = document.querySelector(".card_size_m:nth-child(8) .card-description");

const list = document.createElement('div');
list.setAttribute('class', 'purchase-list-wrap');
list.innerHTML = '<p class="card-description card-description_big description_critical">Список покупок:</p>' +
    '<ol class="purchase-list"><li class="purchase-list__item">Хлеб</li><li class="purchase-list__item">Молоко</li></ol>';


cBtn.onclick = () => {
    fr.replaceWith(list);
    btns.style.display = "none";
};