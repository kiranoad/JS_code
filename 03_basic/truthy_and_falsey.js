const userEmail = [];

if(userEmail){
    console.log("got the email");
    
}else{
    console.log("Don't have user Email");
}

// falsy value 
// false , 0 , -0 , BigInt 0n,  "", null , undefined , NaN 

// truthy values
// "0",'false'," ", [], {},function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }
const emptyObj ={}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
    

}

    if(false == 0){
        console.log("it is false");

    }
        

// Nullish coalescting Operator (??): null and undefined  

let val1;
// val1 = 4 ?? 10;
// val1 = null ?? 10;

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;


console.log(val1);

// Terniary Operator

// condition? true : false

const iceTecPrice = 100;
iceTecPrice >= 80 ? console.log("less than 80"):console.log("more than 80");

