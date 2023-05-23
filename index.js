const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
let actualValue = '';
let isDegree = true;

function evaluate(str) {
  if (str.includes('ln')) {
    const parts = str.split('ln');
    str = parts[0] + Math.log(eval(parts[1]));
  } else if (str.includes('log')) {
    const parts = str.split('log');
    str = parts[0] + (Math.log(eval(parts[1])) / Math.log(10));
  } else if (str.includes('√')) {
    const parts = str.split('√');
    str = parts[0] + Math.sqrt(eval(parts[1]));
  }
  str = eval(str);
  return str;
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    if (buttonText === 'X') {
      screenValue += buttonText;
      actualValue += '*';
      screen.value = screenValue;
    } else if (buttonText === '^') {
      screenValue += buttonText;
      actualValue += '**';
      screen.value = screenValue;
    } else if (buttonText === 'e^x') {
      screenValue += buttonText;
      actualValue += Math.exp(parseFloat(screenValue));
      screen.value = screenValue;
    } else if (buttonText === 'N !') {
      actualValue = parseInt(screenValue);
      let factorial = 1;
      for (let i = 1; i <= actualValue; i++) {
        factorial *= i;
      }
      screen.value = screenValue;
    } else if (buttonText === 'AC') {
      screenValue = '';
      actualValue = '';
      screen.value = screenValue;
    } else if (buttonText === 'Cancel') {
      screenValue = screenValue.slice(0, -1); // Remove last character
      screen.value = screenValue;
    } else if (buttonText === 'sin') {
      const result = Math.sin(
        isDegree ? parseFloat(screenValue) * Math.PI / 180 : parseFloat(screenValue)
      );
      screen.value = result.toFixed(2);
    } else if (buttonText === 'cos') {
      const result = Math.cos(
        isDegree ? parseFloat(screenValue) * Math.PI / 180 : parseFloat(screenValue)
      );
      screen.value = result.toFixed(2);
    } else if (buttonText === 'tan') {
      const result = Math.tan(
        isDegree ? parseFloat(screenValue) * Math.PI / 180 : parseFloat(screenValue)
      );
      screen.value = result.toFixed(2);
    } else if (buttonText === '=') {
      screen.value = evaluate(actualValue);
    } else {
      actualValue += buttonText;
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
});
