// forEach
let arr = [5, 6, 7, 8, 9];
let res = 0;
let count = 0;
arr.forEach(index => {
    count = res;
    res+=index;
    console.log( `${count} + ${index} =` ,res);
})

// map
/* let arr = [5, 6, 7, 8, 9];
let res = 0;
arr.map(index => {
    res=Math.pow(index, 2);
    console.log( `${index} * ${index} =`,res);
})  */

// every
/* let arr = [{
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Miguel',
        country: 'Cuba'
    }
];
console.log(arr.every(index => index.country == 'Ukraine'));
 */

// some
/* let arr = [{
        name: 'Ivan',
        country: 'Ukraine'
    },
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Miguel',
        country: 'Cuba'
    }
];
console.log(arr.some(index => index.country == "Cuba"));
 */

// filter
/* let arr = [1, 'string', [3, 4], 5, [6, 7]];
let res = [];
arr.filter(index => typeof index === 'object' ? res.push(index): null);
console.log(res); */


// reduce task 1
/* let arr = [1, 2, 5, 0, 4, 5, 6];
const reducer = (accumulator, currentValue) => {
    if (currentValue == 0) console.log(accumulator);
    else return accumulator + currentValue;
};
arr.reduce(reducer); */


// reduce task 2
/* let arr = [1, 2, 3, 0, 4, 5, 6];
const reducer = (accumulator, currentValue, index) => {
    if (accumulator>=10) console.log('Number of values:',index);
    else return accumulator + currentValue;
};
arr.reduce(reducer); */

// the arbitrary method
/* let arr = [1, -2, 3, 0, 4, -5, 6, -11];
let newArr = [];
arr.filter( index => {
    if (index>0) newArr.push( Math.sqrt(index).toFixed(2) );
});
console.log(newArr); */