const codding = ["js","cpp","html","css","rb"];

// mathod1
// codding.forEach(function (item){
//     console.log(item);
    
// })

// method2
// codding.forEach((value) =>{
//     console.log(value);
    
// })

// mathod3
// function printMe(item){
//     console.log(item);
    
// }
// codding.forEach(printMe);


codding.forEach((val,index, arr)=>{
    console.log(val,index,arr);
    
})

const myCoding = [
    {
        languageName :"javaScript",
        languageFileName :"js"
    },
    {
        languageName :"ruby",
        languageFileName :"rb"
    },
    {
        languageName :"Hypertext markup of language",
        languageFileName :"html"
    },
    {
        languageName :"Python",
        languageFileName :"py"
    }
]

myCoding.forEach((value) =>{
    console.log(` ${value.languageFileName} :- ${value.languageName}`);
   
    
})