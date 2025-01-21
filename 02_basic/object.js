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






singleton





// const tinderUser = new Object().    // singleton objecct 
const tinderUser ={}   // non singletone Object 


tinderUser.id ="123abc"
tinderUser.name = "kiran"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "user@gamil.com",
    fullname:{
        userfullname:{
            firstName:"kiran",
            lastName:"oad"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id:1,
        email:"kiran@gmail.com"
    },
    {
        id:1,
        email:"kiran@gmail.com"
    },
    {
        id:1,
        email:"kiran@gmail.com"
    },
    {
        id:1,
        email:"kiran@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


 
const course ={
    courseName: "js code in hindi",
    price: "999",
    courseInstructor:"himal"
}
// course.courseInstructor

const {courseInstructor: values} = course  // object desturcuring 
// console.log(values);




// Object API


// {
//     name:"kiran",
//     courseName: "js in npl",
// }

[
    {},
    {},
    {}
]

