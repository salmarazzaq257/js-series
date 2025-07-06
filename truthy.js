const userEmail = "salma@gmail.com"
if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}


//falsey values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

if(userEmail.length === 0){
    console.log("array is empty")
}

//nullish coalescing operator(??): null undefined

//ternary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


//switch

const month = 3