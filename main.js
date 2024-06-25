// Get the display element
const display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to append a character to the display
function appendToDisplay(char) {
  display.value += char;
}

// Function to calculate the expression in the display
function calculate() {
  try {
    // Replace percentage signs with their decimal equivalent
    let expression = display.value.replace(/(\d+)%/g, '($1*0.01)');
    // Evaluate the expression using the Function constructor for safety
    const result = Function('return ' + expression)();
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}