function multipleBy5(num) {
    return num * 5;
}
multipleBy5.power =2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);



function createUser(username,score){
   this.username = username
   this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}


const chai =new createUser("hi",25)
const tea = createUser("hellow",250)

chai.printMe();

/* Here's what happens behind the scenes what the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the consteuctor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. if on explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value. 

The new object is returned: After thr constructor function hes been called, if it does't return a non-primitve value (object, arrye, function, ect.) the newly created object is returned.
*/

// -------------------this is the prototype section start------------------


// using true length of string using methods.


// let myName = "kiran.   ";
// console.log(myName.length);
let myHero = ["thor","hulk","spiderman"]

let heroPower = {
    thor:"hummer and thunder",
    hulk:"redisction and super stranth",
    spiderman:"sling and super stranth",
    getSpiderPower: function(){
        console.log(`spiderMan power is ${this.spiderman}`);
        
    }
}

Object.prototype.kiran = function (){
    console.log(`kiran is preset in all object`);
    
}
Array.prototype.kiran1 = function(){
    console.log(`hi kiran`);
    
}
//
// heroPower.kiran();
// myHero.kiran();
// myHero.kiran1();
// heroPower.kiran1();




// inheritance

// old UseCase of javaScript 

const user ={
    name: "kiran",
    email: "KI@gmail.com"
    
}

const Teacher ={
    makeVideo: true
}
const teachingSupport ={
    isAvailable: false
}
const TASupport = {
     mankeAssigment: "js assignment",
     fullTime:true,
     __proto__:teachingSupport
}
Teacher.__proto__ = user

// modern Syntex 
Object.setPrototypeOf(teachingSupport, Teacher)



let antherUsername = "Kumar vai"
String.prototype.trueLength = function (){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`treuw length is ${this.trim().length} `);

}

antherUsername.trueLength();
"Kiran".trueLength()
"hero".trueLength()