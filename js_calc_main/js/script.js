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
            return;
        }

        this.currentOperation = digit;
        this.updateOperation();
    }

    processOperator(operator){
        if(this.currentOperationText.innerText === '' && operator !== 'C'){
            if(this.previousOperationText.innerText !== ''){
                this.chouseOperation(operator);
            }
            return;
        }
        let operatorValue;
        let current = +this.currentOperationText.innerText;
        let previous = +this.previousOperationText.innerText.split(' ')[0];

        switch(operator){
            case '+':
                operatorValue = previous + current;
                this.updateOperation(operatorValue, operator, current, previous)
                break;
            case '-':
                operatorValue = previous - current;
                this.updateOperation(operatorValue, operator, current, previous)
                break;
            case '*':
                operatorValue = previous * current;
                this.updateOperation(operatorValue, operator, current, previous)
                break;
            case '/':
                operatorValue = previous / current;
                this.updateOperation(operatorValue, operator, current, previous)
                break;
            case 'DEL':
                this.processDelOperator();
                break;
            case 'C':
                this.processCOperator();
                break;
            case 'CE':
                this.processCEOperator();
                break;
            case '=':
                this.processEqualOperator();
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
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            if(previous === 0){
                operatorValue = current;
            }
            this.previousOperationText.innerText = `${operatorValue} ${operator}`
            this.currentOperationText.innerText = '';
        }
    }

    chouseOperation(operator){
        const mathOperator = ['+','-','*','/']

        if(!mathOperator.includes(operator)){
            return;
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operator
    }

    processDelOperator(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    processCOperator(){
        this.previousOperationText.innerText = '';
        this.currentOperationText.innerText = '';
    }

    processCEOperator(){
        this.currentOperationText.innerText = '';
    }

    processEqualOperator(){
        const operator = previousOperationText.innerText.split(' ')[1];
        this.processOperator(operator)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener('click',(evt) => {
        const valor = evt.target.innerText;
        
        if(+valor >= 0 || valor === '.'){
            calc.addDigit(valor);
        }else{
            calc.processOperator(valor);
        }
    })
})