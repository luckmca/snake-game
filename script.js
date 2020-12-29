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

criarBG(); 
criarCobrinha();
