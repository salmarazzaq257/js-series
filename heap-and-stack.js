//stack used in primitive types
// Heap used in non-primitive typoes

let myEmail = "salma@gmail.com";


let anotherEmail = myEmail;

anotherEmail = "salma1@gmail.com";

console.log(myEmail);
console.log(anotherEmail);//here it will print the new value because it is in the stack memory

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);//here it will print the new value because it is in the heap memory







//stack memory and heap memory