let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
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
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '^') {
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'log') {
            buttonText = 'log';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'ln') {
            buttonText = 'ln';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '√') {
            buttonText = '√';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = evaluate(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
