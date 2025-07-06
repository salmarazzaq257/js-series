let a = 100//global scope
const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER",a)//local scope
}

console.log(a)
// console.log(b)
// console.log(c)

//*****************Nested scope****************** */
function one(){
    const username = "salma"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)///cant access website here outside the scope of two
    two()
}
// one()

if(true){
    const username = "salma"
    if(username === "salma"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)
// console.log(website)



//*****************concept of closure****************** */
function addTwo(num){
    return num + 2
}
addTwo(5)
console.log(addTwo(5))
//*****************concept of closure****************** */










//*****************interesting****************** */