const promiseOne = new Promise(function(resolve,reject){
    // DO an async taxk
    // db calls criptography, network 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})
promiseOne.then(function(){
    console.log("promins consumed");
    
})

// promise is ex 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 reolved")
})

// pomies eg- 3 
const prominsThree = new Promise(function(reolve,reject){
    setTimeout(function(){
        reolve({username: "kiran", email: "kiran@gamil.com"})
    })
}, 1000)
prominsThree.then(function(user){
    console.log(user);
    
})
// four eg promise

const prominsFour = new Promise(function(reolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            reolve({username: "kiran", email: "kiran@gamil.com"})
        }else{
            reject("ERROR: Somthing went wrong")
        } 
    }, 1000)
})
prominsFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((MyUsername) =>{
    console.log(MyUsername);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promies is complete")
)


const promiesFive = new Promise(function(reolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            reolve({username: "kiran", password: "1234"})
        }else{
            reject("ERROR: js went wrong")
        } 
    }, 1000)
});


async function consumePromiseFive(){
    
    try {
        const respone = await promiesFive
        console.log(respone);
        
    } catch (error) {
        console.log(error);
        
        
    }   
}
consumePromiseFive();


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://api.github.com/users/kiranOad');
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E:",error);
    
//    }
// }



// console.log(getAllUsers());


fetch("https://api.github.com/users/kiranOad")
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})

.catch((error) => console.log(error));
