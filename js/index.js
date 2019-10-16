var DOMReady = function(callback) {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        callback();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback());
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading') {
                callback();
            }
        });
    }
};

DOMReady(function() {
    (function(w, d, n) {
        var s = d.createElement('script');
        s.src = '//zen.yandex.ru/widget-loader';
        d.head.appendChild(s);
        var c = d.createElement('div');
        c.style.display = 'none';
        d.body.appendChild(c);
        w[n] = w[n] || [];
        w[n].push(function() {
            w.YandexZen.renderWidget({
                container: c,
                clid: [123,123],
            });
        })
    })(window, document, 'yandexZenAsyncCallbacks');

    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");

    const list = document.createElement('div');
    list.setAttribute('class', 'purchase-list-wrap');
    list.innerHTML = '<p class="card-description card-description_big description_critical">Список покупок:</p>' +
        '<ol class="purchase-list"><li class="purchase-list__item">Хлеб</li><li class="purchase-list__item">Молоко</li></ol>';


    const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");

    confirmPurchaseButton.onclick = () => {
        fridgeInfoContainer.replaceWith(list);
        buttonsContainer.style.display = "none";
    };


    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
});