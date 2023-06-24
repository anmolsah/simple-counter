// var current = document.querySelector('.current');
// var next = document.querySelector('.next');

// function startCounter(){
//     var interval = setInterval(animate,1000);
// }

// function animate(){
//     next.classList.add('animate');
//     setTimeout(function(){
//         next.classList.remove('animate');
//     },500);
// }

function startCounter(){
    var targetNumberInput = document.getElementById('number');
    var targetNumber = parseInt(targetNumberInput.value);
    var counterElement = document.getElementById('current');

    // validating the input
    if(isNaN(targetNumber) || targetNumber<1 || targetNumber>9){
        alert('Please enter a number between 1 and 9');
       // counterElement.textContent ="Invalid input";
        return;
    }

    // start counter
    counterElement.textContent = "0";
    var interval = setInterval(function(){
        var counterValue = parseInt(counterElement.textContent);
        if(counterValue === targetNumber){
            clearInterval(interval);
        }else{
            counterElement.textContent = (counterValue + 1).toString();
        }
    },1000);
}