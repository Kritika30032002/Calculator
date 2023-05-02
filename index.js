let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let actualValue = '';
let isDegree = true;

function evaluate(str){
    if(str.includes("ln")){
            var parts = str.split("ln",2);
            str=parts[0]+Math.log(eval(parts[1]));
}
    else if(str.includes("log")){
            var parts = str.split("log",2);
            str=parts[0]+(Math.log(eval(parts[1]))/Math.log(10));
    }
    else if(str.includes("√")){
        var parts = str.split("√",2);
        str=parts[0]+Math.sqrt(eval(parts[1]));
    }
    str=eval(str);
    return str;
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            screenValue+=buttonText;
            actualValue += "*";
            screen.value = screenValue;
        }
        else if(buttonText == '^') {
            screenValue+=buttonText;
            actualValue += "**";
            screen.value = screenValue;
        }
        else if(buttonText == 'e^x') {
            screenValue+=buttonText;
            actualValue +=Math.exp(parseFloat(screenValue));
            screen.value = screenValue;
        }
        else  if (buttonText == 'N !') {
            actualValue = parseInt(screenValue);
            let factorial = 1;
            for (let i = 1; i <= actualValue; i++) {
              factorial *= i;
            }
            screenValue = factorial;
            screen.value = screenValue;
          }
        else if (buttonText == 'AC') {
            screenValue = "";
            actualValue = "";
            screen.value = screenValue;
        }
        else  if (buttonText == 'Cancel') {
            screenValue = screenValue.slice(0, -1); // Remove last character
            screen.value = screenValue;
          }
        else if (buttonText == 'sin') {
            let result = Math.sin(isDegree ? parseFloat(screenValue) * Math.PI / 180 : parseFloat(screenValue));
            screen.value = result.toFixed(2);
          }
          else if (buttonText == 'cos') {
            let result = Math.cos(isDegree ? parseFloat(screenValue) * Math.PI / 180 : parseFloat(screenValue));
            screen.value = result.toFixed(2);
          } else if (buttonText == 'tan') {
            let result = Math.tan(isDegree ? parseFloat(screenValue) * Math.PI / 180 : parseFloat(screenValue));
            screen.value = result.toFixed(2);
          }
       
        else if (buttonText == '=') { 
            screen.value = evaluate(actualValue);
        }
        else {
            actualValue += buttonText;
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

