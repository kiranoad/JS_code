const name = "kiran";
const prop = 20;
// console.log(name + prop );
console.log(`hello my name ${name} and this my prop ${prop}`);



const firstName = new String('kiranKumar');
console.log(firstName.toUpperCase());
console.log(firstName.indexOf("i"));

const newString = firstName.substring(0,4);
console.log(newString);

// slice

const anotherString = firstName.slice(-10,5) 
console.log(anotherString);
// trim
const newString1 = "   Hello.    ";
console.log(newString1);
console.log(newString1.trim());

// replace

const url = "https://kiran.com/kirsn%20chsiodfh";
console.log(url.replace("%20","-"));


const date = "2025/02/02";
console.log(date.replaceAll("/","-"));

// includes
console.log(date.includes("123"));

    // split


    console.log(date.split("/"));


    







