//***************Numbers****************** */
const score = 400;
console.log (score);

const balance = new Number(100);//new keyword is used to create a new object
console.log(balance);


console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00    to avoide the large decimal point we use toFixed(2)

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(4));//23.89    

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//10,00,000



/***********Math****************** */

// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));//8
console.log(Math.random());//0-1................always the value is between 0 and 1
console.log(Math.random()*10 + 1);//1-10
console.log(Math.floor(Math.random()*10) + 1);//1-10