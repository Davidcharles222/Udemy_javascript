// let if = 'Teste';
// let function = 'teste';
// let functionTest = 'teste';
// let function1 = 'teste2';

// console.log(functionTest);
// console.log(function1);

function tipo(num){
    if(typeof num === 'number'){
        console.log('Tipo Number '+ num)
    }else if(typeof num === 'string'){
        console.log('Tipo string '+ num)
    }else if(typeof num === 'boolean'){
        console.log('Tipo boolan ' + num)
    }
}
tipo(5)
tipo('David')
tipo(true)

