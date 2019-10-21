'use strict';

let gs = sel => document.querySelector(sel);
let gsAll = sel => document.querySelectorAll(sel);

let shopResources = (function () {
    let balance = 3000;
    let products = {
        beer: {
            price: 40,
            countProduct: 100
        },
        vine: {
            price: 40,
            countProduct: 65
        },
        pepsi: {
            price: 40,
            countProduct: 23
        },
    }

    function init() {
        render()
    }

    function render() {
        gs('.balance_input').value = balance;
        gs('.beer_input').value = products.beer.countProduct;
        gs('.vine_input').value = products.vine.countProduct;
        gs('.pepsi_input').value = products.pepsi.countProduct;
    }

    return {
        init: init,
        products: products
    }
}());
shopResources.init()

let shop = (function () {

    let amountBeer = 0;
    let amountVine = 0;
    let amountPepsi = 0;

    function radio() {
        let radios = document.querySelectorAll('.selChange');
        for (let i = 0; i < radios.length; i++) {

            if (radios[i].checked) {
                let selectProduct = gsAll('label')[i].textContent;
                return selectProduct;
            }

        }
    }

    function count() {
        if (gs('.enter_count_product').value != '' && gs('.enter_count_product').value > 0) return gs('.enter_count_product').value;
    }

    gs('.add').onclick = function () {
        let selected = radio();
        let countProduct = count();
        if (gs('.enter_count_product').value != '' && gs('.enter_count_product').value > 0) {
            // console.log(amount);
            if (selected == 'beer') {
                amountBeer += +countProduct;
                gs('.textarea_for_buy').innerHTML += `<span class="forBeerID">${selected}: ${amountBeer} шт.</span></br>`;
            } else if (selected == 'vine') {
                amountVine += +countProduct;
                gs('.textarea_for_buy').innerHTML += `<span class="forBeerID">${selected}: ${amountVine} шт.</span></br>`;
            } else if (selected == 'pepsi') {
                amountPepsi += +countProduct;
                gs('.textarea_for_buy').innerHTML += `<span class="forBeerID">${selected}: ${amountPepsi} шт.</span></br>`;
            }
            gs('.buy').disabled = false;
            console.log('amountBeer',amountBeer, ' amountVine', amountVine, ' amountPepsi', amountPepsi);
            
        }
    }
}());
