// // array
// const myArr = [0,1,2,3,4,5];
// const myHero = ["spiderman","vanom","antman","hulk"]


// const myArr2 = new Array(1,2,3,4,5,6);
// console.log(myArr[3]);



// Array Methods


// myArr.push(9);
// myArr.pop();
// myArr.unshift(9);
// myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(newArr);


// slice and splice

// console.log("A",myArr);

// const myn1 =myArr.slice(1, 3);
// console.log(myn1);
// console.log("B", myArr);


// const myn2 =myArr.splice(1, 3);
// console.log("C", myArr);
// console.log(myn2);


const marvalheros = ["thor","ironman","spiderman"];
const dc_heros = ["superman", "flaseh", "batman"];

// marvalheros.push(dc_heros);
// console.log(marvalheros);
// console.log(marvalheros[3][1]);

//  to multiple array add with element and dersign and return new element of array


// const allheros = marvalheros.concat(dc_heros);
// console.log(allheros);

// other opestion spertaded operater(...)eg
const all_new_heros = [...marvalheros,...dc_heros];
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("kiran"));
console.log(Array.from("kiran"));
console.log(Array.from({name: "kiran"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));




