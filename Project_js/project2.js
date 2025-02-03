const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');


// let time = new TimeRanges()

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleDateString());
    // clock.style.padding = '200px'
    clock.innerHTML = date.toLocaleTimeString();

}, 1000)

// setInterval(function(){
//     // console.log(date.toLocaleDateString());
//     clock.innerHTML = time.toLocaleTimeString();

// }, 1000)
