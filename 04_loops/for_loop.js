// for loops


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);
    
       
// }

for (let i = 1; i <= 10 ; i++) {
    //console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j < 10; j++) {
        // console.log(`innner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*'+ j +'=' + i*j);     
    }
    
}


let myArray = [ "flase","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// key word
// break and continue

for (let index = 1; index <= 20; index++) {
    console.log(`value of is ${index}`);
    if(index == 5){
        console.log(`Detected 5`);
        break;
        
    }

}

for (let i = 1; i <= 20; i++) {
    console.log(`value of is ${i}`);
    if(i == 5){
        console.log(`Detected 5`);
        continue;
        
    }

}