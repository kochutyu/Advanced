'use strict';

let gs = sel => document.querySelector(sel);

let shop = (function () {
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
        init: init
    }
}())

shop.init()