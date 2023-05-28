let result = document.getElementById('inp');
let buttons = document.querySelectorAll('button');
let screenValue = '';

var DEL = document.getElementById("DEL")
var equal = document.getElementById("equal")


buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
        result.value += btn.value;
    })
})

// for equal button 
equal.addEventListener('click',function(){
    screenValue = eval(result.value);
    result.value = screenValue;
})

// for DEL button
DEL.addEventListener('click',function(){
    screenValue = "";
    result.value = "";
})