// Immediately invoked function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})
(); // this semicolon was needed without semicoln they can't runn

( (name) => {
    // without IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('kiran')

let val1 = 1;
let val2 = 2;

function addNum(num1,num2){
let total = num1 + num2;
return total;

}
let result1 = console.log(addNum(val1,val2)) ;
let result2 = console.log(addNum(10 , 30));
