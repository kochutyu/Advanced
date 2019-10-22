'use strict';

let gs = sel => document.querySelector(sel);
let gsAll = sel => document.querySelectorAll(sel);

let shopResources = (function () {
    let balance = {
        money: 3000
    };
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
        console.log(balance);
    }

    function render() {
        gs('.balance_input').value = balance.money;
        gs('.beer_input').value = products.beer.countProduct;
        gs('.vine_input').value = products.vine.countProduct;
        gs('.pepsi_input').value = products.pepsi.countProduct;
    }

    return {
        init: init,
        products: products,
        balance: balance
    }
}());
shopResources.init()

let shop = (function () {

    let amountBeer = 0;
    let amountVine = 0;
    let amountPepsi = 0;
    let saveBeer = 0;
    let saveVine = 0;
    let savePepsi = 0;
    let sum = 0;
    let res = 0;

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

    function addToBasket() {
        shopResources.balance.money -= shopResources.products.beer.price * amountBeer;
        shopResources.balance.money -= shopResources.products.vine.price * amountVine;
        shopResources.balance.money -= shopResources.products.pepsi.price * amountPepsi;

        shopResources.products.beer.countProduct -= amountBeer;
        shopResources.products.vine.countProduct -= amountVine;
        shopResources.products.pepsi.countProduct -= amountPepsi;

        saveBeer += amountBeer;
        saveVine += amountVine;
        savePepsi += amountPepsi;

        gs('.basket').innerHTML = `<span>beer: ${saveBeer} шт.</span></br><span>vine: ${saveVine} шт.</span></br><span>pepsi: ${savePepsi} шт.</span></br><span>Всього: ${res} гривень</span></br>`;
    }

    function result() {
        sum += shopResources.products.beer.price * amountBeer + shopResources.products.vine.price * amountVine + shopResources.products.pepsi.price * amountPepsi;
        res += sum;
        
        if (shopResources.balance.money > 0 && shopResources.balance.money >= sum) {
            if (shopResources.products.beer.countProduct >= amountBeer && shopResources.products.vine.countProduct >= amountVine && shopResources.products.pepsi.countProduct >= amountPepsi) {
                addToBasket();
            } else alert('Не хватає товару на складі, будь ласка перевірте ваші покупки!');
        } else alert(`У Вас не хватає грошей на покупку: на балансі - ${shopResources.balance.money}, ціна покупки - ${sum}`);
        
        sum = 0;        
        amountBeer = 0;
        amountVine = 0;
        amountPepsi = 0;

        shopResources.init();
    }

    gs('.add').onclick = function () {
        let selected = radio();
        let countProduct = count();
        if (gs('.enter_count_product').value != '' && gs('.enter_count_product').value > 0) {
            
                    if (selected == 'beer') amountBeer += +countProduct;
                    else if (selected == 'vine') amountVine += +countProduct;
                    else if (selected == 'pepsi') amountPepsi += +countProduct;
                    
                    gs('.textarea_for_buy').innerHTML = '';
                    gs('.textarea_for_buy').innerHTML += `<span class="forBeerID">beer: ${amountBeer} шт.</span></br>`;
                    gs('.textarea_for_buy').innerHTML += `<span class="forBeerID">vine: ${amountVine} шт.</span></br>`;
                    gs('.textarea_for_buy').innerHTML += `<span class="forBeerID">pepsi: ${amountPepsi} шт.</span></br>`;

                gs('.buy').disabled = false;
                gs('.enter_count_product').value = '';

            console.log('amountBeer:', amountBeer, ' amountVine:', amountVine, ' amountPepsi:', amountPepsi);

        }
    }
    gs('.buy').onclick = function () {
        result()
        gs('.textarea_for_buy').innerHTML = '';
        gs('.buy').disabled = true;
    }
}());