// for of loops

// ["", "", ""]
// [{},{}, {}]

const arr =[1,2,3,4,5]

for(const num of arr){
    // console.log(num);

}
const greeting = "Helllo world!";

for (const greet of greeting){
    // console.log(`each char is ${greet}`);
}


//  MAPS

const map = new Map()
map.set('IN',"India");
map.set('NPL',"Nepal");
map.set('USA',"United States of America");

// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ":-", value);
    
// }
for(const key in map){
    console.log(key);
    
}

const myObject ={
    "game1": "pubg",
    "game2": "spiderman",
    "game3": "freefir"
}
//  for(const [key , value] of myObject){
//     console.log(key,":-",value);
    
//  }
const myObj ={
    "js": "JavaScript",
    "cpp": "C++",
    "rb": "ruby",
    "HTML": "HyperText MarkUp language"
}

    for(const key in myObj){
        // console.log(`${key} -> ${myObj[key]}`);
        
    }

    const programming = ["js","rb","cpp","java","html","css"];
    for( const key in programming){
        // console.log(programming[key]);
        
    }

   