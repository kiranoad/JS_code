Project related to DOM

Solution code
project 1

```javascript 
    const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body')


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id;
        }
    })
});
       `

#project 2
  ```javascrpit

  const form = document.querySelector('#form').addEventListener("submit" , function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        if(bmi <= 18.6){
            results.innerHTML = `Your have less weight <span>${bmi}</span>`;
        } else if(bmi <= 24.9 && bmi >=18.6 ) {
            results.innerHTML = `Your have normal weight <span>${bmi}</span>`;
        }else if(24.9 <= bmi){
            results.innerHTML = `Your have overweight weight <span>${bmi}</span>`;
        }
    
    }   

})
  
```