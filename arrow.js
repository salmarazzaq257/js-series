const user = {
    username: "salma",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//this keyword
// console.log(this)

// function chai(){
//     let username = "salma"
//     console.log(this.username)//undefined
// }
// chai()

const chai = () => {//arrow function
    console.log("chai is ready")
}
chai()

// const sum = (num1,num2) => {
//     return num1 + num2
// }
// console.log(sum(3,4))


const sum = (num1,num2) => (num1 + num2)
console.log(sum(3,4))


const sumTwo = (num1,num2) => ({username: "salma"})
console.log(sumTwo(3,4))


// const myArray = [2,3,4,5,6]
// myArray.forEach(() => {})
