const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = '';
    }

    addDigit(digit){
        if(digit === '.' && this.currentOperationText.innerText.includes('.')){
            return
        }
        this.urrentOperation = digit;
        this.updateOperation();
    }

    processOperation(operator){
        if(this.currentOperationText.innerText === ''){
            if(this.previousOperationText.innerText !== ''){
                this.changeOperation(operator);
            }
            return;
        }
        let operatorValue;
        let current = +this.currentOperationText.innerText;
        let previous = +this.previousOperationText.innerText.split(' ')[0];

        switch(operator){
            case '+':
                operatorValue = current+ previous;
                this.updateOperation(operatorValue, operator, current, previous)
            break;
            case '-':
                operatorValue = current - previous;
                this.updateOperation(operatorValue, operator, current, previous)
            break;
            case '*':
                operatorValue = current * previous;
                this.updateOperation(operatorValue, operator, current, previous)
            break;
            case '/':
                operatorValue = current / previous;
                this.updateOperation(operatorValue, operator, current, previous)
            break;
            default:
                return;
    }
    }


    updateOperation(
        operatorValue = null,
        operator = null,
        current = null,
        previous = null
    ){
        if(operatorValue === null){
            this.currentOperationText.innerText += this.currentOperation
        }else{
            if(previous === null){
                operatorValue = current;
            }
            this.previousOperationText.innerText = `${operatorValue} ${operator}`;
            this.currentOperationText.innerText = ''
        }
    }

    changeOperation(operator){
        const mathOperator = ['+','-','*','/']

        if(!mathOperator.includes(operator)){
            return;
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operator
    }

}


const calc = new Calculator(previousOperationText, currentOperationText)


buttons.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        const valor = evt.target.innerText;
        if(+valor >= 0 || valor === '.'){
            calc.addDigit(valor);
        }else{
            calc.processOperation(valor);
        }
    })
})