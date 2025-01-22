

if (true) {
    let a = 10;
    const b = 20;
    var c = 30; 
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kiran";
    function two (){
        const website = "facebook";
        console.log(username);
        
    }
    // console.log(website);
    // two();

    
}
// one();


if(true){
    const username = "sita";
    if(username=== "sita"){
        const website = "youtube";
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username); not accble


// ****************** interesting hosting ********************

console.log(addone(5)); // this is run

function addone(num){
    return num +1;
}

addTwo(5); // this is not run because it is Hosting problem

const addTwo = function(num){
    return num + 2
}

