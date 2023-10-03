const calculator = () => {
    const acButton = document.querySelector('#acButton')
    const delButton = document.querySelector('#delButton')
    const plussButton = document.querySelector('#plussButton')
    const oneButton = document.querySelector('#oneButton')
    const twoButton = document.querySelector('#twoButton')
    const threeButton = document.querySelector('#threeButton')
    const multiplyButton = document.querySelector('#multiplyButton')
    const fourButton = document.querySelector('#fourButton')
    const fiveButton = document.querySelector('#fiveButton')
    const sixButton = document.querySelector('#sixButton')
    const divideButton = document.querySelector('#divideButton')
    const sevenButton = document.querySelector('#sevenButton')
    const eightButton = document.querySelector('#eightButton')
    const nineButton = document.querySelector('#nineButto')
    const minusButton = document.querySelector('#minusButton')
    const dotButton = document.querySelector('#dotButton')
    const ceroButton = document.querySelector('#ceroButton')
    const equalsButton = document.querySelector('#equalsButton')
    const inputScreen = document.querySelector('#inputScreen')

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
        inputScreen.value = '';
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
                if (number2 !== 0) {
                    result = divide(numer1, number2);
                } else {
                    dividedByCero = true;
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
            number = number.toFixed(4)
        }
        return number;
    }


    const run = (input) => {
        inputTurn = !isNaN(input) ? 0 : 1
        let firstValueInputed = false

        if (inputTurn == 0 && firstValueInputed == false) {
            if (number1 == 0) {
                number1 = +input + number1*10;
                currentOperation = limitDecimals(number1);
                inputTurn = 1;
                inputScreen.value = currentOperation
            } else {
                if (firstValueInputed == true) {
                    number2 = +input + number2*10;
                    number1 = operate(number1, number2, operand);
                    if (dividedByCero) {
                        inputScreen.value = 'You Shall Not pass!'
                        reset()
                    } else {
                        totalOperationMessage = 'Total: ';
                        currentOperation = limitDecimals(number1);
                        inputTurn = 1;
                        inputScreen.value = currentOperation
                    }
                }
            }
        }
        else {
            operand = input.trim();
            if (operand == '=') {
                inputScreen.value = `${currentOperation}`
                reset()
            }
            else {
                inputTurn = 0;
                firstValueInputed = true
            }
        }
    }

    acButton.addEventListener('click', () => {
        reset()
    })

    delButton.addEventListener('click', () => {
        run('-')
    })

    plussButton.addEventListener('click', () => {
        run('+')
    })

    oneButton.addEventListener('click', () => {
        run('1')
    })

    twoButton.addEventListener('click', () => {
        run('2')
    })

    threeButton.addEventListener('click', () => {
        run('3')
    })

    multiplyButton.addEventListener('click', () => {
        run('*')
    })

    fourButton.addEventListener('click', () => {
        run('4')
    })

    fiveButton.addEventListener('click', () => {
        run('5')
    })

    sixButton.addEventListener('click', () => {
        run('6')
    })

    divideButton.addEventListener('click', () => {
        run('/')
    })

    sevenButton.addEventListener('click', () => {
        run('7')
    })

    eightButton.addEventListener('click', () => {
        run('8')
    })

    nineButton.addEventListener('click', () => {
        run('9')
    })

    minusButton.addEventListener('click', () => {
        run('-')
    })

    dotButton.addEventListener('click', () => {
        run('.')
    })

    ceroButton.addEventListener('click', () => {
        run('0')
    })

    equalsButton.addEventListener('click', () => {
        run('=')
    })

}