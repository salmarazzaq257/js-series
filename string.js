const name = "salma";
const age =  "24";
console.log(`Hello i m ${name} and ${age} years old`); //string interpolations


//declaring a string
const newRepo = new String("js-series");//string is object with key value pairing

console.log(newRepo[0]);//s
console.log(newRepo.length);//10

//methods of string prototypical inheritance
console.log(newRepo.toUpperCase());//JS-SERIES
console.log(newRepo.charAt(2));//j
console.log(newRepo.indexOf("s"));//0
console.log(newRepo.substring(0,3));//js-
console.log(newRepo.slice(0,3));//js-
console.log(newRepo.replace("js","py"));//py-series
console.log(newRepo.includes("js"));//true