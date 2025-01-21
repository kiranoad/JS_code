// function myName(){

// console.log("k");
// console.log("i");
// console.log("r");
// console.log("a");
// console.log("n");


// }
// myName();

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
    
// }
function addTwoNumber(number1, number2){

//   const result = number1+number2;
//   console.log("kiran");
//     return result;

return number1+number2; 
       
}
const result = addTwoNumber(2, 5);
// console.log("Result:", result);


function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("Please enter a Username");
    //     return
        
    // }
    // or 

    if(!username){
        console.log("Please enter a Username");
        return;
        
    }

    return `${username} just logged in`
}
// console.log(loginUserMessage("Kiran"));
// console.log(loginUserMessage());

// or 

function loginUserMessage(username = "syam"){
    if(!username){
        console.log("Please enter a Username");
        return;       
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("kiran"));

function calculateCartPrice(val1,val2, ...num1){
    return num1;

}

// console.log(calculateCartPrice(200,300,400,500));

const user ={
    username: "kiran",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
} 
// handleObject(user);
handleObject({
    username: "silaa",
    price:300
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));
