let order = [];
let clickedOrder = [];
let score = 0;

//0-verde
//1-vermelho
//2-amarelo
//3-azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//inicia a ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) +1 );
    }
}

//acende uma cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 400);
    setTimeout(() =>{
        element.classList.remove('selected');
    }, number - 100);
}

//confirma se as cores clicadas sao as mesmas geradas
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: ${score} \n Voce acertou! Iniciando proximo nivel!');
        nextLevel();
    }
}

//função para o click do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//função proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função game-over
let gameOver = () => {
    alert('Pontuação: $score \n Game Over! Clique em OK para continuar...');
    order = [];
    clickedOrder = [];

    playGame();
}

//funções de inicio do jogo
let playGame = () =>{
    alert('Bem vindo ao Game Genius');
    score = 0;

    nextLevel();
}

//eventos de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio
playGame();