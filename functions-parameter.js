function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("L");
    console.log("M");
    console.log("A");
}
//sayMyName()

// //function declaration
// function addTwoNumbers(num1,num2){//parameters
//     console.log(num1 + num2)
// }
// addTwoNumbers(3,4)//arguments


function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // console.log(result)
    // return result

    return num1 + num2
}
const result = addTwoNumbers(3,4)
// console.log(result)

function loginUserMessage(username){
    if(!username){
        // console.log("please enter a username")
        return
    }
    return`${username} just logged in`
    // if(username === undefined){
    //     console.log("please enter a username")
    //     return
    // }
    // return`${username} just logged in`
}
// console.log(loginUserMessage("salma"))
// console.log(loginUserMessage("salma"))







function calculateCartPrice(...num1){//rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "salma",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

//handle object
// const myNewArray = [200,400,500]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray))





