//Dates


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2023-01-14");
// console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3 = new Date("01-14-2023");
// console.log(myCreatedDate3.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());




//'${newDate.getDay()} and ${newDate.getMonth()}'


newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
    month: "long",
})
console.log(newDate);





