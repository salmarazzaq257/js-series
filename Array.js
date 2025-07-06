//Array is a collection of elents in which eachelement is  an object 
// and stored in single variable,.....resizeable in js


//gets through index, 0based indexing
//always  is shared in memory,referced typelike heap memory



const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0])

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()//last element is removed
// myArray.unshift(9)//adds element at the beginning
// myArray.shift()//removes element from the beginning
// myArray.includes(9)//checks if element is present
// myArray.indexOf(9)//returns the index of the element
// myArray.join()//joins all elements of the array into a string
// myArray.slice(1,3)//returns a new array with the elements from the index 1 to 3
// myArray.splice(1,3)//removes the elements from the index 1 to 3
// console.log(myArray)

//slice, splice
// console.log("A",myArray)
// const myn1 = myArray.slice(1,3)
// console.log(myn1)
// console.log("B",myArray)
// const myn2 = myArray.splice(1,3)
// console.log(myn2)
// console.log("C",myArray)

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// //spread operator
// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)


// const nested_array = [1,2,3,[4,5,6],7,[6,7,[4]]]
// const real_array = nested_array.flat(Infinity)
// console.log(real_array)
console.log(Array.isArray("salma"))
console.log(Array.from("salma"))
console.log(Array.from({name:"salma"}))
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))








