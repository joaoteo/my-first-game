/*

    
    const button = document.querySelector('#buttons');

    //const canvas = document.querySelector('#canvas')

    const ctx = document.getElementById('canvas').getContext('2d');

    
    const imgBackGround = new Image();
    imgBackGround.onload = function() {
    ctx.drawImage(imgBackGround, 0, 0);
    };
     
    imgBackGround.src = '../image/background.png';

    

    //Imagens

    const imgBackGround = new Image();
    imgBackGround.src = '../image/background.png';

    console.log(imgBackGround)

    const imgGround = new Image();
    imgGround.src = '../image/ground.png';


    const imgLogo = new Image();
    imgLogo.src = '../image/logo.png';


    const imgPipe = new Image();
    imgPipe.src = '../image/pipe.png';

    const imgBirdMoove = new Image();
    imgBirdMoove.src = '../image/bird.png'; 

    const imgRestart = new Image();
    imgRestart.src = '../image/restart.png';

    const imgScore = new Image();
    imgScore.src = '../image/score.png';


    console.log(imgScore);

  

   console.log(imgBackGround)

    //canvas.backcGroundColor = '#fff'
    //canvas.fillRect(25, 25, 25);

    // const ctx = canvas.getContext('2d');




    context.fillStyle='#fff';
    context.strokeStyle='fff';


    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.fill();
    context.closePath();



    button.onclick = function() {
    console.log('Cliques')
    };

    //Criação dos eventos de click/mouse/keywords

    
    button.addEventListener('mouseover', function() {
    console.log('cliques');

    });

    button.addEventListener('click', function() {
    console.log('cliques');

    });

    button.addEventListener('keyup', function() {
    console.log('cliques');

    });

    


    canvas.getElementById('canvas');


    console.log(document)

*/

  /*

const myGameArea = {
    canvas: document.getElementById('canvas'),
    frames: 0,
    start: function () {
    //this.canvas.width = 500;
    //this.canvas.height = 400;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);


    this.interval = setInterval(updateGameArea, 20);

    },

    clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop: function () {
    clearInterval(this.interval);
    },

    score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 350, 50);

    },
    };





    class Component {

    constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    

    }


    left() {
    return this.x;
    }
    right() {
    return this.x + this.width;
    }
    top() {
    return this.y;
    }
    bottom() {
    return this.y + this.height;
    }

    crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }


    newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.image = 'https://flappybird.io/img/bird.png';
    }


    update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    } 
    }

    //contexto.context.drawImage(Image, x, y, dWidth, dHeight);

    let player = new Component(30, 30, 'red', 0, 350);


    const birds = new Image()
    let birdX = 0;
    let birdY = 0;

    let bird =  new Image()
    birds.src = 'https://flappybird.io/img/bird.png';



    function loop() {
        
        const theCanvas = document.getElementById('canvas');

        const ctx = theCanvas.getContext('2d');

       // ctx.clearRect(0, 0, 0, 0);

        //ctx.drawImage(bird, birdX, birdY, 50, 50);

        ctx.drawImage(
            
            birds, 
            birdX, birdY,
            90, 80,
            10, 50,
            40, 40
            
            );


            
            requestAnimationFrame(loop)

    }







    document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
    case 38: // up arrow
    player.speedY -= 5;
    break;
    case 40: // down arrow
    player.speedY += 5;
    break;
    case 37: // left arrow
    player.speedX -= 5;
    break;
    case 39: // right arrow
    player.speedX += 5;
    break;
    }
    });


    document.addEventListener('keyup', (e) => {
        player.speedX = 0;
        player.speedY = 0;


    });


    

    const myObstacles = [];

    function updateObstacles() {

        

    for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
    }

    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
    let x = myGameArea.canvas.width;
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, 'red', x, 0));
    myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));


    
    }
    }



    function checkGameOver() {
    const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
    });

    if (crashed) {
    myGameArea.stop();
    }
    }



    function updateGameArea() {
    myGameArea.clear();
    player.update();
    player.newPos();
    player.update()
    updateObstacles();
    checkGameOver();
    myGameArea.score();

    loop()

    }


    myGameArea.start();





*/


console.log(document);




/*


let flappyGame = {



}



const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;






const birdImage = new Image();
birdImage.src = 'https://flappybird.io/img/bird.png';









const dataFlappy = {

    
    spriteX: 0,
    spriteY: 0,
    width: 90,
    height: 80,
    x: 50,
    y: 350,
    widthBird: 60,
    heightBird: 50,
    drawImgs() {
        
        //contexto.context.drawImage(Image, dX, dY, dWidth, dHeight);
        contexto.drawImage(
        
        birdImage,
        dataFlappy.spriteX, dataFlappy.spriteY,
        dataFlappy.width, dataFlappy.height,
        dataFlappy.x, dataFlappy.y,
        dataFlappy.widthBird, dataFlappy.heightBird
        
        );
    }
    
}



const groundImage = new Image();
groundImage.src = 'https://flappybird.io/img/ground.png';


const dataGround = {
   
    spriteX: 0,
    spriteY: 0,
    width: 120,
    height: 170,
    x: 0,
    y:583,
    widthGround: 90,
    heightGround: 160,
    drawImgs() {
        
        //contexto.context.drawImage(Image, dX, dY, dWidth, dHeight);
        contexto.drawImage(
        
        groundImage,
        dataGround.spriteX, dataGround.spriteY,
        dataGround.width, dataGround.height,
        dataGround.x, dataGround.y,
        dataGround.widthGround, dataGround.heightGround
        
        );

    }
    
}

//Função desenhar 

function drawBird() {


    dataFlappy.drawImgs();
    dataGround.drawImgs()

    requestAnimationFrame(drawBird)
  

}

drawBird();


//Eventos de clique

const button = document.querySelector('canvas');

button.addEventListener('mouseover', function() {
    console.log('mouseover')
});
    
    

button.addEventListener('click', function() {
    console.log('cliques')
});
    
    
button.addEventListener('keyup', function() {
    console.log('keyup')
});





    

*/






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


function fazColisao(flappyBird, chao) {
    const flappyBirdY = flappyBird.y + flappyBird.height;
    const chaoY = chao.y;

    if(flappyBirdY >= chaoY) {
        return true;
    }
    return false
};



function criaFlappyBird() {

    const flappyBird = {
        spriteX: 0,
        spriteY: 0,
        width: 33,
        height: 24,
        x: 10,
        y: 50,
        pulo: 4.6,
        pula() {
        console.log('devo pular');
        flappyBird.velocidade = - flappyBird.pulo;
    
        },
        gravidade: 0.20,
        velocidade: 0,
    
        atualiza () {
            if(fazColisao(flappyBird, chao)) {
                console.log('it crashed');
    
                mudaParaTela(Telas.INICIO)
                return;
            }
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
        }
    }

  return flappyBird;
}




const messageGetReady = {
    sX: 134,
    sY: 0,
    w: 174,
    h: 152,
    x: (canvas.width / 2) - 174 / 2,
    y: 50,

    desenha () {
        contexto.drawImage(
            sprites,
            messageGetReady.sX, messageGetReady.sY,
            messageGetReady.w, messageGetReady.h,
            messageGetReady.x, messageGetReady.y, 
            messageGetReady.w, messageGetReady.h
        );
    },
};




//
//
//

let globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
    telaAtiva = novaTela;

    // if(telaAtiva.starts) {
    //     return starts();
    // }
    
};

const Telas = {
    INICIO: {
        // starts() {
        //    globais.flappyBird = criaFlappyBird();
        // },
        desenha() {
            planoDeFundo.desenha();
            chao.desenha();
            flappyBird.desenha();
            messageGetReady.desenha();
        },
        click() {
            mudaParaTela(Telas.JOGO)
        },
        atualiza () {

        }
    }
};

Telas.JOGO = {
    desenha () {
        planoDeFundo.desenha();
        chao.desenha();
        flappyBird.desenha(); 
    },

    click() {
        flappyBird.pula();
        // flappyBird.y = 200;

    },

    atualiza () {
        flappyBird.atualiza()
    }

};



function loop(){
    telaAtiva.desenha();
    telaAtiva.atualiza();
    requestAnimationFrame(loop);

};



window.addEventListener('click', function () {  
    if(telaAtiva.click) {
        telaAtiva.click(); 
    }
});


  

mudaParaTela(Telas.INICIO)
loop();










