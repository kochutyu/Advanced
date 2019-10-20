'use strict';

let gs = sel => document.querySelector(sel);
let gsAll = sel => document.querySelectorAll(sel);

let People = (function () {
    let user = ['Ivan', 'Petro', 'Yura', 'Uliana', 'Taras'];

    // all function
    function init() {
        addPersonName();
        render();
        delPersonName();
    }

    function addPersonName() {
        gs('.add').onclick = function () {
            if (gs('input').value !== '') {
                user.push(gs('input').value);
                gs('input').value = '';
                init();
            }
        }
    }
    
    function delPersonName() {
        console.log('delete event');
        for (let i = 0; i < gsAll('.remove').length; i++) {
            gsAll('.remove')[i].onclick = function () {
                user.splice(i,1);
                init();
            };
        };

    }

    function render() {
        gs('.userList').innerHTML = '';
        user.forEach(index => {
            let li = document.createElement('li');
            let span = document.createElement('span');
            let btn = document.createElement('button');
            btn.textContent = 'X';
            btn.className = 'remove';
            span.textContent = `${index}`;
            li.appendChild(span);
            li.appendChild(btn);
            gs('.userList').appendChild(li);
        });
    }

    return {
        init: init
    }
}())

People.init();
