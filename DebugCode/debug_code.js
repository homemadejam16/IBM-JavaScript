
function performMultiplyOperation(){
    // Get user input
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    //validation input
    if (!isNaN(num1) && !isNaN(num2)){
        let result = multiply(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b){
    // Introduce a debugger statement to pause execution
    debugger;
    return a*b;
}


function performAddOperation(){
    // Get user input
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    //validation input
    if (!isNaN(num1) && !isNaN(num2)){
        let result = add(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b){
    // Introduce a debugger statement to pause execution
    debugger;
    return a+b;
}

function performMinusOperation(){
    // Get user input
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    //validation input
    if (!isNaN(num1) && !isNaN(num2)){
        let result = minus(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function minus(a, b){
    // Introduce a debugger statement to pause execution
    debugger;
    return a-b;
}

function performDividOperation(){
    // Get user input
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    //validation input
    if (!isNaN(num1) && !isNaN(num2 && num2!=0)){
        let result = divid(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function divid(a, b){
    // Introduce a debugger statement to pause execution
    debugger;
    return a/b;
}



function displayResult(result){
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;

}