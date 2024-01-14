let currentInput = '';
let currentOperation = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput !== '') {
    currentOperation = operation;
    currentInput += operation;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperation = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    currentOperation = '';
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function resetCalculator() {
    currentInput = '';
    currentOperation = '';
    updateDisplay();
  }
