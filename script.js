function appendValue(value){
    const result = document.getElementById('result');
    result.value +=value;
}

// clear the reslut input
function clearResult(){
    document.getElementById('result').value = '';
}

// calculate the result
function calculateResult(){
    const result = document.getElementById('result');
    try{
        // Evaluate the expression
        result.value = eval(result.value);
    }
    catch(error){
       result.value = 'Error'; 
    }
}