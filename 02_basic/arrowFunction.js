const user ={
    username: "kiran",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} wellcome to my Website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sita";
// user.welcomeMessage();

// console.log(this); //browser all globel object are window object 


// const users = function (){
//     let username = "kiran";
//     console.log(this.username);
//     return username;
    
// }

const users = () => {
    let username = "kiran";
    console.log(this);
    // return username;
    
}
// users();

// implictily return keyword
// const addTwo = (num, num1) =>{
//     return num+num1;

// }
// const addTwo = (num, num1) => num+num1;
// const addTwo = (num, num1) => (num+num1); // no need for writen this return key word

const addTwo = (num, num1) => ({username:"kiran"}); 


console.log(addTwo(3,4));



