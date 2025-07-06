// const code = [1,2,3,4,5]
// const values = myNums.forEach((item) => {
//     console.log(item)
//     return item + 1
// })
// console.log(values)


const myNums = [1,2,3,4,5]
const newNums = myNums.filter((num) => num > 4)
console.log(newNums)


const newNums1 = myNums.map((num) => num * 10)
console.log(newNums)


const newNums2 = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(newNums)


//reduce

const myTotal = myNums.reduce((acc,currval) => acc + currval,0)
console.log(myTotal)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
]
const total = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(total)