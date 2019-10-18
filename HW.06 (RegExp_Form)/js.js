let gs = sel => document.querySelector(sel);
let gsAll = sel => document.querySelectorAll(sel);

function verification(checkRegExp, element) {
    if (checkRegExp) {
        element.nextElementSibling.style.display = 'none';
        check++;
        element.setAttribute('disabled', true)
    } else {
        element.nextElementSibling.style.display = 'inline';
        element.nextElementSibling.textContent = 'invalid value';
        element.value = ''
    }
}

const regNumber = /^\d{2}$/;
const pib = /([а-яА-Яa-zA-Z]+)\s+([а-яА-Яa-zA-Z]+)\s+([а-яА-Яa-zA-Z]+)(\s+)?/gm;
const email = /^[a-zA-Z0-9\._]+@([a-z]{2,6}|[a-z]{2,6}\.[a-z]{2,6})\.[a-z]{2,3}$/;
const sizeYour = /^[0-9]{3}$/;
const lastSymbol = /^\+38\s\(0\d{2}\)\s\d{3}-\d{4}$/;
for (let i = 0; i < gsAll('.input').length; i++) {
    gsAll('.input')[i].onkeyup = () => {
        if (gsAll('.input')[i].value.match(regNumber)) {
            gsAll('.null')[i].textContent = 'correctly';
            gsAll('.null')[i].style.width = '70px';
        } else if (gsAll('.input')[i].value == "") {
            gsAll('.null')[i].textContent = 'Null';
            gsAll('.null')[i].style.width = '40px';
        } else {
            gsAll('.null')[i].textContent = 'invalid input';
            gsAll('.null')[i].style.width = '110px';
        }
    }
}

for (let i = 0; i < gsAll('.pib').length; i++) {
    gsAll('.pib')[i].onkeyup = () => {
        if (gsAll('.pib')[i].value.match(pib)) {
            gsAll('.form')[i].textContent = 'correctly';
            gsAll('.form')[i].style.width = '70px';
        } else if (gsAll('.pib')[i].value == "") {
            gsAll('.form')[i].textContent = 'Null';
            gsAll('.form')[i].style.width = '40px';
        } else {
            gsAll('.form')[i].textContent = 'invalid input';
            gsAll('.form')[i].style.width = '110px';
        }
    }
}

gs('.email').onkeyup = () => {
    if (gs('.email').value.match(email)) {
        gs('.formF').textContent = 'correctly';
        gs('.formF').style.width = '70px';
    } else if (gs('.email').value == "") {
        gs('.formF').textContent = 'Null';
        gs('.formF').style.width = '40px';
    } else {
        gs('.formF').textContent = 'invalid input';
        gs('.formF').style.width = '110px';
    }
}

gs('.size').onkeyup = () => {
    if (gs('.size').value.match(sizeYour)) {
        gs('.formS').textContent = 'correctly';
        gs('.formS').style.width = '70px';
    } else if (gs('.size').value == "") {
        gs('.formS').textContent = 'Null';
        gs('.formS').style.width = '40px';
    } else {
        gs('.formS').textContent = 'invalid input';
        gs('.formS').style.width = '110px';
    }
}

gs('.number').onfocus = () => {
    const maskOptions = {
        mask: '+38 (000) 000-0000',
        lazy: false
    }
    const mask = new IMask(number, maskOptions);
}

let count = 0;
gs('.number').onkeyup = () => {
    if (event.code === "Backspace") {
        count -= 1;
        checkPhone();
    } else if (count === 10) {
        checkPhone();
    } else if (count === 0) {
        count += 1;
        checkPhone();
    } else {
        count += 1;
        checkPhone();
    }
    console.log(count);

}

function checkPhone() {
    if (count === 10) {
        gs('.formN').textContent = 'correctly';
        gs('.formN').style.width = '70px';
    } else if (count === 0) {
        gs('.formN').textContent = 'Null';
        gs('.formN').style.width = '40px';
    } else {
        gs('.formN').textContent = 'invalid input';
        gs('.formN').style.width = '110px';
    }
}
let dfsds = 0;

function name2() {
    for (let i = 0; i < gsAll('input').length; i++) {
        gsAll('input')[i].value = '';
        gsAll('.null')[i].textContent = 'Null';
        gsAll('.null')[i].style.width = '40px';
        gsAll('.null')[i].textContent = 'Null';
        gsAll('.null')[i].style.width = '40px';
        
    }
}
name2()