window.addEventListener('load', ()=> { 

    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    
    const keypadButtonsArray = Array.from (keypadButtons);

    keypadButtonsArray.forEach((button) => {
        
        button.addEventListener('click',() => {
            calculator(button, display);
        })    
    })  
});

function calculator(button, display) {
    switch (button.innerHTML) {
        case 'C':
            erase (display);
            break;

        case '=':
            calculate(display);
            break;

        default:
            actualize(display, button);
            break;
        
    }
}

function calculate(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualize (display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function erase (display) {
    display.innerHTML = 0
}