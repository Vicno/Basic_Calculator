const caltulator = () => {
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
        if(number % 1 !== 0){
            number = number.toFixed( 4 )
        }
        return number;
    }
   

    const run = () => {

        while (true) {
            switch (inputTurn) {
                case 0:
                    input = prompt(`${totalOperationMessage}${currentOperation}${operand} enter a number`);

                    break;
                case 1:
                    input = prompt(`${currentOperation} enter an operand (+,-,*,/) or equal (=)`);

                    break;
                case 2:

                    break;
            }


            if (inputTurn == 0) {
                if (number1 == 0) {
                    number1 = +input;
                    
                    currentOperation = limitDecimals(number1);
                    inputTurn = 1;
                } else {
                    number2 = +input;
                    number1 = operate(number1, number2, operand);
                    if (dividedByCero) {
                        alert('You Shall Not pass!')
                        reset()
                    } else {
                        totalOperationMessage = 'Total: ';
                        currentOperation = limitDecimals(number1);
                        inputTurn = 1;
                    }
                }
            }
            else {
                operand = input.trim();
                if (operand == '=') {
                    alert(`total result: ${currentOperation}`)
                    reset()
                }
                else {
                    inputTurn = 0;
                }
            }


        }
    }

    run()
}

caltulator()