//IIFE- Immediately Invoked Function Expression....to avoid pollution of global scope
(function chai(){
    console.log("DB CONNECTED")
})();

(function chai(){
    console.log("DB CONNECTED TWO")
})();


( () => {
    console.log("DB CONNECTED THREE")
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`)
})("salma")




/** javascript execution context */

//{}.....Global execution context....browser,node is different
//function(){},(){}.....Function execution context
//eval(code).....Eval execution context....property of window object


//Memory creation phase.....only allocate the memory for the variables and functions
let val1 = 10
let val2 = 5

//Execution phase.....code execution
function addTwoNumbers(num1,num2){
    let result = num1 + num2
    return result
}
console.log(addTwoNumbers(val1,val2))


//Global execution context...this,window,this.val1,this.val2

//New execution context is created for the function
//Memory creation phase variables
//exeution phase
num1 = 10
num2 = 5
result = undefined
//memory phase
//Execution phase   
//call stack
//result = 15
//return result
//call stack is empty
//Global execution context is deleted
//val1 = 10
//val2 = 5
//function is deleted
function one(){
    console.log("ONE")
    two()
   
}
function two(){
    console.log("TWO")
    three()
}
function three(){
 console.log("THREE")
 
}
one()
two()
three()




