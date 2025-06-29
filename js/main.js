const display = document.getElementById ("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value = "" ;
}
// eval() converts the string and executes it as code.
function calculate(){
    try{
   display.value = eval(display.value)
    }
    catch(erorr){
        display.value = "Error"
    }
}