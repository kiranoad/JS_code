// singleton

// object literals

const mySy =Symbol("key1");

const jsUser ={ 
    name: "kiran", "full name":"kiran oad",
    [mySy]:"key1",
    age: 18,
    location:"nepal",
    email:"kian@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.full name); // it is not used
console.log(jsUser["full name"]);
console.log(jsUser[mySy]);

// Object.freeze(jsUser);


jsUser.email = "sanu@gmail.com"
console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("hello js user");
    
}


jsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






// singleton


