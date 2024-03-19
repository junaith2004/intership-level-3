function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result;
    try {
        result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Error: ' + error.message);
    }
}
function backspace() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
