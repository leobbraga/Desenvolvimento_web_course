var currentNumberWrapper = document.getElementById ("currentNumber")
var currentNumber = 0;

function increment() {
currentNumber = currentNumber + 2;
currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 2;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    
    function validaNumero(num){
        if (!num) return "Envie um número válido!";
      
        return num;
    }
    
    console.log(validaNumero());