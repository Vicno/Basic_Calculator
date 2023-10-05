const calculator = () => {
    const acButton = document.querySelector('#acButton');
    const delButton = document.querySelector('#delButton');
    const plussButton = document.querySelector('#plussButton');
    const oneButton = document.querySelector('#oneButton');
    const twoButton = document.querySelector('#twoButton');
    const threeButton = document.querySelector('#threeButton');
    const multiplyButton = document.querySelector('#multiplyButton');
    const fourButton = document.querySelector('#fourButton');
    const fiveButton = document.querySelector('#fiveButton');
    const sixButton = document.querySelector('#sixButton');
    const divideButton = document.querySelector('#divideButton');
    const sevenButton = document.querySelector('#sevenButton');
    const eightButton = document.querySelector('#eightButton');
    const nineButton = document.querySelector('#nineButton');
    const minusButton = document.querySelector('#minusButton');
    const dotButton = document.querySelector('#dotButton');
    const ceroButton = document.querySelector('#ceroButton');
    const equalsButton = document.querySelector('#equalsButton');
    const inputScreen = document.querySelector('#inputScreen');

    inputScreen.value = '0';

    let inputTurn = 0;
    let number1 = 0;
    let number2 = 0;
    let operand = '';
    let input = '';
    let currentOperation = 0;
    let totalOperationMessage = '';
    let dividedByCero = false;
    

    const reset = () => {
        inputTurn = 0;
        number1 = 0;
        number2 = 0;
        operand = '';
        input = '';
        currentOperation = 0;
        totalOperationMessage = '';
        dividedByCero = false;
        inputScreen.value = '0';
        firstValueInputed = false;
    }
    const add = (number1, number2) => {
        return number1 + number2;
    }

    const multiply = (number1, number2) => {
        return number1 * number2;
    }

    const divide = (number1, number2) => {
        return number1 / number2;
    }

    const subtract = (number1, number2) => {
        return number1 - number2;
    }

    const operate = (numer1, number2, operand) => {
        let result = '';
        switch (operand) {
            case '+':
                result = add(numer1, number2);
                break;
            case '*':
                result = multiply(numer1, number2);
                break;
            case '/':
                if (number2 === 0) {
                    result = 'ERROR';
                    dividedByCero = true;
                } else {
                    result = divide(number1, number2);
                }
                break;
            case '-':
                result = subtract(numer1, number2);
                break;
        }
        return result;
    }

    const limitDecimals = (number) => {
        if (number % 1 !== 0) {
            number = parseFloat(number.toFixed(4)).toString();
        }
        return number;
    }
    
    const run = (input) => {

        const currentInputSize = inputScreen.value.length;
        const maxInputSize = calculateMaxInputSize();

        if (currentInputSize >= maxInputSize) {
            return; 
        }

        if (dividedByCero) {
            if (!isNaN(input) || input === '.') {
                reset();
                inputScreen.value = input;
                dividedByCero = false;
                number1 = parseFloat(inputScreen.value);
                return;
            }
            return;
        } 
    
        if (input === '=') {
            if (operand && inputTurn === 1) {
                number2 = parseFloat(inputScreen.value);
                result = operate(number1, number2, operand);
    
                if (operand === '/' && number2 === 0) {
                    inputScreen.value = 'ERROR';
                    dividedByCero = true;
                } else {
                    inputScreen.value = limitDecimals(result);
                    number1 = result;
                    operand = '';
                    inputTurn = 0;
                }
            } else {
                if ((operand === '' && input !== '-')) {
                    operand = input;
                    inputScreen.value = 'ERROR'; 
                    number1 = parseFloat(inputScreen.value);
                    inputTurn = 0;
                } else {
                    inputScreen.value = 'ERROR';
                    dividedByCero = true;
                }
            }
        } else if ('+-*/'.includes(input)) {
            if (operand && inputTurn === 1) {
                number2 = parseFloat(inputScreen.value);

                if (operand === '/' && number2 === 0) {
                    inputScreen.value = 'ERROR';
                    dividedByCero = true;
                } else {
                    result = operate(number1, number2, operand);
                    inputScreen.value = limitDecimals(result);
                    number1 = result;
                    operand = input;
                    inputTurn = 0;
                }
            } else {
                operand = input;
                number1 = parseFloat(inputScreen.value);
                inputTurn = 0;

            }
        } else if (!isNaN(input) || (input === '.' && !inputScreen.value.includes('.'))) {
            if (inputTurn === 0) {
                if (input !== '.') {
                    inputScreen.value = input;
                } else {
                    inputScreen.value = '0.';
                }
                inputTurn = 1;
            } else if (inputTurn === 1 && inputScreen.value === '0' && input !== '.') {
                inputScreen.value = input;
            } else {
                inputScreen.value += input;
            }
        }

        console.log(`${inputScreen.value}`);
        console.log(`${number1} N1`);
        console.log(`${number2} N2`);
        console.log(`${operand} operand`);
    };

    
    acButton.addEventListener('click', () => {
        reset();
    })

    delButton.addEventListener('click', () => {
        if (inputTurn === 1) {
            inputScreen.value = '0';
            operand = '';
            inputTurn = 0;
        } else if (inputTurn === 0 && inputScreen.value.length > 1) {
            inputScreen.value = inputScreen.value.slice(0, -1);
            if (number2 === 0) {
                number1 = inputScreen.value;
            } else {
                number2 = inputScreen.value;
            }
        } else if (inputTurn === 0) {
            inputScreen.value = '0';
        }
    })

    plussButton.addEventListener('click', () => {
        run('+');
    })

    oneButton.addEventListener('click', () => {
        run('1');
    })

    twoButton.addEventListener('click', () => {
        run('2');
    })

    threeButton.addEventListener('click', () => {
        run('3');
    })

    multiplyButton.addEventListener('click', () => {
        run('*');
    })

    fourButton.addEventListener('click', () => {
        run('4');
    })

    fiveButton.addEventListener('click', () => {
        run('5');
    })

    sixButton.addEventListener('click', () => {
        run('6');
    })

    divideButton.addEventListener('click', () => {
        run('/');
    })

    sevenButton.addEventListener('click', () => {
        run('7');
    })

    eightButton.addEventListener('click', () => {
        run('8');
    })

    nineButton.addEventListener('click', () => {
        run('9');
    })

    minusButton.addEventListener('click', () => {
        run('-');
    })

    dotButton.addEventListener('click', () => {
        run('.');
    })

    ceroButton.addEventListener('click', () => {
        run('0');
    })

    equalsButton.addEventListener('click', () => {
        run('=');
    });

    let keyPressInProgress = false;

    // Add a keydown event listener to the document
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        // Check if a key press is already in progress
        if (keyPressInProgress) {
            return;
        }

        // Define a mapping of keys to calculator actions
        const keyActions = {
            '0': 'ceroButton',
            '1': 'oneButton',
            '2': 'twoButton',
            '3': 'threeButton',
            '4': 'fourButton',
            '5': 'fiveButton',
            '6': 'sixButton',
            '7': 'sevenButton',
            '8': 'eightButton',
            '9': 'nineButton',
            '+': 'plussButton',
            '-': 'minusButton',
            '*': 'multiplyButton',
            '/': 'divideButton',
            '.': 'dotButton',
            'Enter': 'equalsButton',
            'Escape': 'acButton',
            'Delete': 'delButton'
        };

        if (keyActions.hasOwnProperty(key)) {
            const buttonId = keyActions[key];
            const buttonElement = document.querySelector(`#${buttonId}`);
            if (buttonElement) {
                keyPressInProgress = true;
                buttonElement.click();
                keyPressInProgress = false;
                console.log(buttonId)
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', calculator);

function calculateMaxInputSize() {
    const screenWidth = window.innerWidth; 
    let maxInputSize;

    if (screenWidth < 425) {
        maxInputSize = 9; 
    } else {
        maxInputSize = 17; 
    }

    return maxInputSize;
}

function formatNumber(number, maxInputSize) {
    if (number === null || number === undefined) {
        return '';
    }
    
    if (number.toString().replace(/[^0-9]/g, '').length > maxInputSize) {
        return number.toExponential(maxInputSize - 5); 
    }
    
    return number.toString();
}

window.addEventListener('resize', () => {
    maxInputSize = calculateMaxInputSize();
    const currentValue = parseFloat(inputScreen.value);
    
    inputScreen.value = formatNumber(currentValue, maxInputSize);
});

let maxInputSize = calculateMaxInputSize();
originalInputValue = inputScreen.value;
