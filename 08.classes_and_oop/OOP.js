// object literal

const user = {
    username:"kiran",
    loginCount: 8,
    signedIn:true,

    getUserDetail: function(){
        // console.log("Got user Details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        
    }
}
const user2 = {
    username:"kiran",
    loginCount: 8,
    signedIn:true,

    getUserDetail: function(){
        // console.log("Got user Details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        
    }
}

// console.log(user.username);
// // console.log(user.getUserDetail());
// console.log(this);



// 

// const promiesOne = new Promise()
// const date = new Date()

function User(uername,loginCount,isLoggedIn){
    this.username = uername;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Wellcomr ${this.username}`);
        
    }
    
    return this;
}

const userOne = User("Kiran",12 ,true)
const userTwo = User("hi bro",11 ,false)

console.log(userOne.constructor);
// console.log(userTwo);

