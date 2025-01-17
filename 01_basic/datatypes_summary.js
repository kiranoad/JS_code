//----------primitive dataType--------

// 7 types :  
// 1. String
const str1 = "kiran is good boy";
   console.log(str1);
   
// 2. Number
const number = 1234;
console.log(number);




// 3. Boolean
// const str = Boolean;
let a = 12;
let b = "12";
let c = a===b;
console.log(c); // output is false



// 4. null
const str2 = null;
console.log(typeof str2);





// 5. undefined
let kiran;
console.log(kiran);



// 6. symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

// 7. BigInt

const bitNumber = 123453465789097876453n;

//--------------Not Primitve(refreence)----------------
// 1. Array
const heros =["superMan","hulk","antMan","spiderMan"];
console.log(typeof heros);

// 2. Objects
let myObj={
   name: "kiran",
   classs: 16,
   age: 25

};
console.log(typeof myObj);

// 3. functions
const myFunction = function(){
   console.log("hello world");
   
   
}
myFunction();




// -----------------memory used ---------------
// Stack (Primitive), Heap (Non-Primitive)

let myKiranName = "kiran is good boy";
let amotherName = myKiranName;
amotherName = "hello";
console.log(amotherName);



let userOne = {
   email : "kiran@gmail.com",
   userId : "user@ybl"
}
let userTwo = userOne;
userTwo.email = "kuamr@gmail.com";

console.log(userOne);
console.log(userTwo);

