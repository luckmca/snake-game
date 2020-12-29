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

function iniciarJogo(){
    
    criarBG(); 
    criarCobrinha();
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



