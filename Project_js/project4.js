// genarate the random color

const randomColor = function(){
    const HEX = "0123456789ABCDEF"
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += HEX[Math.floor(Math.random() * 16)];
        
    }
    return color;
    
};
// console.log(randomColor());

let setIntervalId;
const startChangingColor = function(){
    if(!setIntervalId){
        setIntervalId = setInterval(ChangeBGColor,1000)
        // console.log(setIntervalId);
        
    }

    function ChangeBGColor (){
        document.body.style.backgroundColor = randomColor();
    }
    console.log(startChangingColor());
    
    
}
const stopChangingColor = function(){
     clearInterval(setIntervalId);
     setIntervalId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)


