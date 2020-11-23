const allclearB = document.getElementById('allclear')
const clearB = document.getElementById('clear');
const plusminusB = document.getElementById('plusminus');
const percentB = document.getElementById('percent');
const commaB = document.getElementById('comma');
const num1B = document.getElementById('num1');
const num2B = document.getElementById('num2');
const num3B = document.getElementById('num3');
const num4B = document.getElementById('num4');
const num5B = document.getElementById('num5');
const num6B = document.getElementById('num6');
const num7B = document.getElementById('num7');
const num8B = document.getElementById('num8');
const num9B = document.getElementById('num9');
const num0B = document.getElementById('num0');
const plusB = document.getElementById('plus');
const minusB = document.getElementById('minus');
const multiplyB = document.getElementById('multiply');
const divideB = document.getElementById('divide');
const equalsB = document.getElementById('equals');

let screenDisplay = document.getElementById('screendisplay');
let numberButtonClicked = false;
let commaButtonClicked = false;
let isWaitingInput = false;
let current;
let previous = 0;
let previousOperator = 'plus';

function reset() {
    isWaitingInput = false;
    current = null;
    previous = 0;
    previousOperator = 'plus';
    waitingInput();
};
reset();

function waitingInput() {
    numberButtonClicked = false;
    commaButtonClicked = false;
    screenDisplay.innerHTML = "0";
};

function waitingSecondInput() {
    numberButtonClicked = false;
    commaButtonClicked = false;
};

function buttonClicked(num) {
    if (numberButtonClicked == false && commaButtonClicked == false) {
        screenDisplay.innerHTML = num;
        numberButtonClicked = true;
    } else {
        screenDisplay.innerHTML += num;
    }
    current = Number(screenDisplay.innerHTML);
    isWaitingInput = false;
};

num1B.addEventListener('click', function () {
    buttonClicked(1);
});
num2B.addEventListener('click', function () {
    buttonClicked(2);
});
num3B.addEventListener('click', function () {
    buttonClicked(3);
});
num4B.addEventListener('click', function () {
    buttonClicked(4);
});
num5B.addEventListener('click', function () {
    buttonClicked(5);
});
num6B.addEventListener('click', function () {
    buttonClicked(6);
});
num7B.addEventListener('click', function () {
    buttonClicked(7);
});
num8B.addEventListener('click', function () {
    buttonClicked(8);
});
num9B.addEventListener('click', function () {
    buttonClicked(9);
});
num0B.addEventListener('click', function () {
    if (numberButtonClicked == true || commaButtonClicked == true) {
        buttonClicked(0);
    }
    else {
        screenDisplay.innerHTML = 0;
        current = Number(screenDisplay.innerHTML);
        isWaitingInput = false;
    }
});

commaB.addEventListener('click', function () {
    if (numberButtonClicked == false && commaButtonClicked == false) {
        screenDisplay.innerHTML = "0.";
        commaButtonClicked = true;
    } else if (commaButtonClicked == false) {
        screenDisplay.innerHTML += ".";
        commaButtonClicked = true;
    }
});

allclearB.addEventListener('click', function () {
    reset();
});

clearB.addEventListener('click', function () {
    if (numberButtonClicked == true || commaButtonClicked == true) {
        let arraysplit = screenDisplay.innerHTML.split('');
        arraysplit.pop();
        let arrayjoined = arraysplit.join('').toString();
        if (arrayjoined == '' || arrayjoined == '0') {
            waitingInput();
        } else {
            screenDisplay.innerHTML = arrayjoined;
        }
    }
    current = Number(screenDisplay.innerHTML);
});

plusminusB.addEventListener('click', function() {
    let result = Number(screenDisplay.innerHTML) * -1;
    screenDisplay.innerHTML = result.toString();
    if(isWaitingInput == true) {
        previous = result;
    }
    else {
        current = result;
    }
})

percentB.addEventListener('click', function () {
    let result = Number(screenDisplay.innerHTML) / 100;
    screenDisplay.innerHTML = result.toString();
    if(isWaitingInput == true) {
        previous = result;
    }
    else {
        current = result;
    }
});

plusB.addEventListener('click', function() {
    if(isWaitingInput == false) {
        isWaitingInput = true;
        calculatePrevious();
        waitingSecondInput();
    }
    previousOperator = 'plus';
});

minusB.addEventListener('click', function() {
    if(isWaitingInput == false) {
        isWaitingInput = true;
        calculatePrevious();
        waitingSecondInput();
    }
    previousOperator = 'minus';
});

multiplyB.addEventListener('click', function() {
    if(isWaitingInput == false) {
        isWaitingInput = true;
        calculatePrevious();
        waitingSecondInput();
    }
    previousOperator = 'multiply';
});

divideB.addEventListener('click', function() {
    if(isWaitingInput == false) {
        isWaitingInput = true;
        calculatePrevious();
        waitingSecondInput();
    }
    previousOperator = 'divide';
});

equalsB.addEventListener('click', function() {
    if(isWaitingInput == false) {
        isWaitingInput = true;
        calculatePrevious();
        waitingSecondInput();
    }
});

function calculatePrevious() {
    if(previousOperator == 'plus') {
        previous = previous + current;
    }
    else if(previousOperator == 'minus') {
        previous = previous - current;
    }
    else if(previousOperator == 'multiply') {
        if(previous == 0) {
            previous = current;
        }
        else {
            previous = previous * current;
        }
    }
    else if(previousOperator == 'divide') {
        if(previous == 0) {
            previous = current;
        }
        else {
            previous = previous / current;
        }
    };
    screenDisplay.innerHTML = previous.toString();
};