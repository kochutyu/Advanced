// task 1
console.log('HTML-color:', /^\#\d{6}$/.test('#000000'));  // true

// task 2
const promptFL = prompt('Write your first and last name')
const replace = /( |^)[A-Za-z]/ig;
console.log('replace Z:', promptFL.replace(replace, ' Z')); 

// task 3
const promptPas = prompt('Write your passport data')
const checkPassport = /[А-Я]{2}\d{6}/gi;
console.log('pasport:', checkPassport.test(promptPas) );

// task 4
const promptNum = prompt('Write your passport data')
const checkNum = /([0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2})|(\+[0-9]{5}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2})/gi;
console.log('number:', checkNum.test(promptNum) );
