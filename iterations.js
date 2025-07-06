//for loop
for(let i = 0; i < 10; i++){
    const element = array[i]
    console.log(element)
}


//while loop
let i = 0
while(i < 10){
    console.log(i)
    i++
}


//do while loop
let j = 0
do{
    console.log(j)
    j++
}while(j < 10)  


//break and continue
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log("detected 5")
        break
    }
    console.log(`value of i is ${i}`)
}           
