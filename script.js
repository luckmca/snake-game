//criando background
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
//criando a cobrinha
let snake = [];     //array da cobrinha, definindo tamanhos para x e y
snake[0] = {   
    x: 8 * box,
    y: 8 * box
}

//fazendo a cobrinha andar
let direction = "right";

//math.floor retira a parte flutuante do math.random, ou seja, retira o "0."
 //math.random retorna um numero aleatorio até 1.
    
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, 
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {      //função que cria o background

    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);

}

//Criando a cobrinha: a cobrinha vai ser um array de coordenadas. Adiciona um elemento e retira o ultimo, fazendo ela andar


function criarCobrinha(){

    for (i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

function drawFood(){
    context.fillStyle = "red";    
    context.fillRect(food.x, food.y, box, box);   // setado x e y da comidinha, altira e largura que é 32 (box)
}

document.addEventListener("keydown", update);     //37, 38, 39, 40  =  codigos do teclado para direnta, baixo, esquerda, cima.  EventListener = escuta o que o usuario apertar

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
} 

// fazendo o loop da cobrinha com o if
function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    
    criarBG(); 
    criarCobrinha();
    drawFood();
    
    //definindo a posiçao inicial da cobrinha
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y; 

    //criando o movimento

    if(direction == "right") snakeX += box; //direita aumenta uma box
    if(direction == "left") snakeX -= box;  //esquerda diminui uma box
    if(direction == "up") snakeY -= box; //pra cima diminui uma box
    if(direction == "down") snakeY += box; //pra baixo aumenda uma box
    
    snake.pop();  //pop retira o elemento do array

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);   //unshift faz adicionar um elemento na frente do arrat

}

let jogo = setInterval(iniciarJogo, 100);



