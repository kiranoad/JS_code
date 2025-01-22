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