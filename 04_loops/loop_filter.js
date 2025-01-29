// const coding =["js","ruby","java","python","cpp"]
// const values = coding.forEach((value) => {
//     // console.log(value);
//     return value;

    
// })
// console.log(values);





// filter Methods basic

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter((num) => {num > 4})
// const newNum = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNum)

// const newNums = []
// myNums.forEach((item)=>{
//     if (item > 4) {
//         newNums.push(item)
//     }

// })
// console.log(newNums);

const books =[
    {
        title:'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title:'Book two', genre: 'Non-Fiction', publish: 1971, edition: 2007
    },
    {
        title:'Book three', genre: 'Science', publish: 1999, edition: 2011
    },
    {
        title:'Book four', genre: 'Fiction', publish: 2005, edition: 2006
    },
    {
        title:'Book five', genre: 'History', publish: 2003, edition: 2010
    },
]

// const userBooks = books.filter((value) => value.genre === 'Fiction')

let userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre ==="History";
})

// console.log(userBooks);




// maps

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNumbers.map((num) => {return num + 10})
const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
// console.log(newNums);



// reduce() methods 

const reduceNums =[1,2,3]
// const myTotal = reduceNums.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);
    
//     return acc + currVal
// },0)



const myTotal = reduceNums.reduce((acc,curr) => acc +curr, 0);

// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"HTML course",
        price:1999
    },
    {
        itemName:"CSS course",
        price:1499
    },
    {
        itemName:"C++ course",
        price:3999
    },
]
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);

