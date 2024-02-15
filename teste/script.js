let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

player1 = 0;
player2 = 0;


function identificador(player1,player2){

    if(player1 == player2){
        el = x;
    }else{
        el = o;
    }

    return el
}


for(let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener('click',function(){
        
        let el = identificador(player1,player2)

        if(this.childNodes.length == 0){

            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)
            if(player1 == player2){
                player1++

                if(secondPlayer == 'ai-player'){
                    computerPlay();
                    player2++;
                }
            
        }else{
            player2++
        }
            verificador()
        }
    })
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
            secondPlayer = this.getAttribute('id');

            for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
            }

            setTimeout(function(){
                let container = document.getElementById('container')
                container.classList.remove('hide')
            },500)
    })
}

//-----------------------------------------------

function verificador(){

    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')
    
    //horizontal 1
    if(b1.childNodes.length != 0 && b2.childNodes.length != 0 && b3.childNodes.length != 0){
        
        let b1child = b1.childNodes[0].className
        let b2child = b2.childNodes[0].className
        let b3child = b3.childNodes[0].className

        if(b1child == 'x' && b2child == 'x' && b3child == 'x'){
            vencedor('x')
        }else if(b1child == 'o' && b2child == 'o' && b3child == 'o'){
            vencedor('o')
        }
    }

    //horizontal 2
    if(b4.childNodes.length != 0 && b5.childNodes.length != 0 && b6.childNodes.length != 0){
        
        let b4child = b4.childNodes[0].className
        let b5child = b5.childNodes[0].className
        let b6child = b6.childNodes[0].className

        if(b4child == 'x' && b5child == 'x' && b6child == 'x'){
            vencedor('x')
        }else if(b4child == 'o' && b5child == 'o' && b6child == 'o'){
            vencedor('o')
        }
    }

    //horizontal 3
    if(b7.childNodes.length != 0 && b8.childNodes.length != 0 && b9.childNodes.length != 0){
        
        let b7child = b7.childNodes[0].className
        let b8child = b8.childNodes[0].className
        let b9child = b9.childNodes[0].className

        if(b7child == 'x' && b8child == 'x' && b9child == 'x'){
            vencedor('x')
        }else if(b7child == 'o' && b8child == 'o' && b9child == 'o'){
            vencedor('o')
        }
    }

    //vertical 1
    if(b1.childNodes.length != 0 && b4.childNodes.length != 0 && b7.childNodes.length != 0){
        
        let b1child = b1.childNodes[0].className
        let b4child = b4.childNodes[0].className
        let b7child = b7.childNodes[0].className

        if(b1child == 'x' && b4child == 'x' && b7child == 'x'){
            vencedor('x')
        }else if(b1child == 'o' && b4child == 'o' && b7child == 'o'){
            vencedor('o')
        }
    }

    //vertical 2
    if(b2.childNodes.length != 0 && b5.childNodes.length != 0 && b8.childNodes.length != 0){
        
        let b2child = b2.childNodes[0].className
        let b5child = b5.childNodes[0].className
        let b8child = b8.childNodes[0].className

        if(b2child == 'x' && b5child == 'x' && b8child == 'x'){
            vencedor('x')
        }else if(b2child == 'o' && b5child == 'o' && b8child == 'o'){
            vencedor('o')
        }
    }

    //vertical 3
    if(b3.childNodes.length != 0 && b6.childNodes.length != 0 && b9.childNodes.length != 0){
        
        let b3child = b3.childNodes[0].className
        let b6child = b6.childNodes[0].className
        let b9child = b9.childNodes[0].className

        if(b3child == 'x' && b6child == 'x' && b9child == 'x'){
            vencedor('x')
        }else if(b3child == 'o' && b6child == 'o' && b9child == 'o'){
            vencedor('o')
        }
    }

    //diagonal 1
    if(b1.childNodes.length != 0 && b5.childNodes.length != 0 && b9.childNodes.length != 0){
        
        let b1child = b1.childNodes[0].className
        let b5child = b5.childNodes[0].className
        let b9child = b9.childNodes[0].className

        if(b1child == 'x' && b5child == 'x' && b9child == 'x'){
            vencedor('x')
        }else if(b1child == 'o' && b5child == 'o' && b9child == 'o'){
            vencedor('o')
        }
    }

    //diagonal 2
    if(b3.childNodes.length != 0 && b5.childNodes.length != 0 && b7.childNodes.length != 0){
        
        let b3child = b3.childNodes[0].className
        let b5child = b5.childNodes[0].className
        let b7child = b7.childNodes[0].className

        if(b3child == 'x' && b5child == 'x' && b7child == 'x'){
            vencedor('x')
        }else if(b3child == 'o' && b5child == 'o' && b7child == 'o'){
            vencedor('o')
        }
    }

    //velha
    let count = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes.length > 0){
            count++
        }
    }

    if(count == 9){
        vencedor('Deu velha!')
    }

}

//função da vitoria
function vencedor(winner){
    let scoreboard1 = document.getElementById('scoreboard-1')
    let scoreboard2 = document.getElementById('scoreboard-2')
    let msg = '';

    let ms = document.querySelector('#message')
    ms.classList.remove('hide')

    setTimeout(function(){
        ms.classList.add('hide')
    },2000)

    if(winner == 'x'){
        msg = 'Jogador 1 venceu!'
        messageText.innerHTML = msg
        scoreboard1.innerHTML = parseInt(scoreboard1.innerHTML) + 1
    }else if(winner == 'o'){
        msg = 'Jogador 2 venceu!'
        messageText.innerHTML = msg
        scoreboard2.innerHTML = parseInt(scoreboard2.innerHTML) + 1
    }else{
        msg = 'Deu velha!'
        messageText.innerHTML = msg
    }

    let boxesToRemove = document.querySelectorAll('.box div')
    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

function computerPlay(){

    let cloneO = o.cloneNode(true)
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5)

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        }else{
                filled++ ;
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay();
    }
}