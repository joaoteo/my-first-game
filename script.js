console.log(document);

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const sprites = new Image();
sprites.src = '../image/sprites.png';



//

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  width: 275,
  height: 204,
  x: 0,
  y: canvas.height - 204,

  desenha () {

    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0, 0, canvas.width, canvas.height)


    contexto.drawImage(
      sprites, 
      planoDeFundo.spriteX, planoDeFundo.spriteY, 
      planoDeFundo.width, planoDeFundo.height,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.width, planoDeFundo.height,
    );

    contexto.drawImage(
      sprites, 
      planoDeFundo.spriteX, planoDeFundo.spriteY, 
      planoDeFundo.width, planoDeFundo.height,
      planoDeFundo.x + planoDeFundo.width, planoDeFundo.y,
      planoDeFundo.width, planoDeFundo.height,
    );

  },
};



const chao = {
  spriteX: 0,
  spriteY: 610,
  width: 224,
  height: 112,
  x: 0,
  y: canvas.height - 112,
   
  desenha () {
    contexto.drawImage(
      sprites, 
      chao.spriteX, chao.spriteY, 
      chao.width, chao.height,
      chao.x, chao.y,
      chao.width, chao.height,
    );
    
    contexto.drawImage(
      sprites, 
      chao.spriteX, chao.spriteY, 
      chao.width, chao.height,
      (chao.x + chao.width), chao.y,
      chao.width, chao.height,
     );
  },
};


const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  width: 33,
  height: 24,
  x: 10,
  y: 50,
  gravidade: 0.25,
  velocidade: 0,

  atualiza () {
    flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
    flappyBird.y = flappyBird.y + flappyBird.velocidade;
  },

  desenha () {
    contexto.drawImage(
      sprites, 
      flappyBird.spriteX, flappyBird.spriteY, 
      flappyBird.width, flappyBird.height,
      flappyBird.x, flappyBird.y,
      flappyBird.width, flappyBird.height,
    );
  },
};



function loop(){
//   flappyBird.atualiza()

  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();
  

  requestAnimationFrame(loop);

};
  
loop();





