//singleton........


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "salma",
    "full name": "salma razzaq",
    [mySym]: "mykey1",
    age: 24,
}
// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(JsUser[typeof(mySym)])
// console.log(JsUser)





// JsUser.greeting = function(){
//     console.log("Hello JS user")
// }
// JsUser.greeting2 = function(){
//     console.log(`Hello JS user, ${this.name}`)
// }
// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())



/*singleton */


const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "salma",
            lastname: "razzaq"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname)


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const obj4 = {...obj1, ...obj2, ...obj3}//combine all objects
// console.log(obj4)

// const obj5 = {obj1, obj2, obj3}//combine all objects
// console.log(obj5)

// const course = {
//     coursename: "js in hindi",
//     price: 999,
//     courseInstructor: "hitesh"
// }
// console.log(course.courseInstructor)
// console.log(course["courseInstructor"])
// console.log(course)
// course.courseInstructor = "hitesh"
// console.log(course)
// console.log(Object.keys(course))
// console.log(Object.values(course))
// console.log(Object.entries(course))
// console.log(course.hasOwnProperty("price"))



/************objects destruction and json api**&&&& */

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor)





