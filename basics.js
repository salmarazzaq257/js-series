console.log("Hello World");
//variables:1.let,var,const


const accountId = 14453
let accountEmail = "salma@gmail.com";
var accountPassword = "12345";
accountCity = 'lahore';

//accountId = 2; //cannot be changed because its const
accountEmail = "salma@gmail.com"; //can be changed because its var
accountPassword = "12345"; //can be changed because its var
accountCity = 'lahore'; //can be changed because its var
//const can only be decalre with value and cannot be changed and word''const
//var can be changed and declared without value and word''var ''acountId'' is also a var
//let can be changed and declared without value and word''let   
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
//prefer not to use var
//prefer to use let
//prefer to use const
//const is best
//let is better than var
//var is not good


/*if any variable is forgot then to investigate that dont use const it will change that value use 
use let and the console to get its value 

*/




console.table([accountId,accountEmail,accountPassword,accountCity]);
