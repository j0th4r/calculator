// Functions to execute the operations
const add = function(augend, addend) {
  return augend + addend;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const multiply = function(multiplicand, multiplier) {
  return multiplicand * multiplier;
};

const divide = function(dividend, divisor) {
  if(divisor == 0) {
    return "lmao";
  }
  return dividend / divisor;
};

const operate = function(operator, num1, num2) {
  switch(operator) {
    case "+":
      return add(num1, num2);
    break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
};


// Initialize display value
let displayValue = '';
let num1 = 0;
let num2 = 0;


// Select the display element
const displayElement = document.getElementById('display');

// Function to update the display
function updateDisplay() {
  displayElement.textContent = displayValue;
}

// Add click event listeners to number buttons
for (let i = 0; i <= 9; i++) {
  const button = document.getElementById(i.toString());
  button.addEventListener('click', function() {
    displayValue += i.toString(); // Append the number to the display value
    num2 = Number(displayValue);
    updateDisplay(); // Update the display
  });
}



// Add event listeners for operation buttons
let solution = 0;
const addition = document.getElementById('add');
addition.addEventListener('click', function() {
    if(num1 > 0)
    {
      displayElement.textContent = solution;
      num1 = solution;
      num2 = num1;
    }
    if(num1 == 0) 
      num1 += Number(displayValue);

    displayValue = '';
});

const subtraction = document.getElementById('subtract');
subtraction.addEventListener('click', function() {
    if(num1 != 0)
    {
      displayElement.textContent = solution;
      num1 = solution;
      num2 = num1;
    }
    if(num1 == 0) 
      num1 = Number(displayValue);

    displayValue = '';
});

const multiplication = document.getElementById('multiply');
multiplication.addEventListener('click', function() {
    if(num1 != 0)
    {
      displayElement.textContent = solution;
      num1 = solution;
      num2 = num1;
    }
    if(num1 == 0) 
      num1 = Number(displayValue);

    displayValue = '';
});

const division = document.getElementById('divide');
division.addEventListener('click', function() {
    if(num1 != 0)
    {
      displayElement.textContent = solution;
      num1 = solution;
      num2 = num1;
    }
    if(num1 == 0) 
      num1 = Number(displayValue);

    displayValue = '';
});


// Display the solution
const equal = document.getElementById('equal');
equal.addEventListener('click', function() {
  displayElement.textContent = solution;

});


// Clear button functionality
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
  num1 = 0;
  num2 = 0;
  displayValue = ''; // Reset the display value
  updateDisplay(); // Update the display
});


// Utilize the operator that the user selects
let operation = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.getAttribute('id');

    if(buttonId === 'add') {
      operation = 'add';
    }

    if(operation == 'add') {
      solution = operate("+", num1, num2);
    }

    if(buttonId === 'subtract') {
      operation = 'subtract';
    }

    if(operation == 'subtract') {
      solution = operate("-", num1, num2);
    }

    if(buttonId === 'multiply') {
      operation = 'multiply';
    }

    if(operation == 'multiply') {
      solution = operate("*", num1, num2);
    }
    
    if(buttonId === 'divide') {
      operation = 'divide';
    }

    if(operation == 'divide') {
      solution = operate("/", num1, num2);
    }

  });
});
    
