

//Função para adicionar a imagem principal de fundo.

/*function backGroundImage() {
let bgImage = new Image();

bgImage.src = "https://flappybird.io/img/background.png";

bgImage.onload = function() {
    drawImage(bgImage, 10, 10);
    }

}

backGroundImage();

*/
    


/* button.addEventListener('keyup', function(e) {
let codigoTecla = e.which || e.keyCode || 0;
let space = codigoTecla == 32;
if (space) alert('O spaces foi pressionado!');
});
*/


/*canvas.style.backgroundColor = 'red';
canvas.style.border = '2px green solid';
canvas.style.fontSize = '20px';
canvas.style.marginTop = '30px';
canvas.style.paddingBottom = '30px';
canvas.style.font = 'center' */


/* let hiTeste = document.getElementById('test');

teste.innerHTML = "Heey";*/






/*
const button = document.querySelector('#buttons');

//const canvas = document.querySelector('#canvas')

const ctx = document.getElementById('canvas').getContext('2d');

*/

/*
const imgBackGround = new Image();
//imgScale = 10/4;
imgBackGround.onload = function() {
ctx.drawImage(imgBackGround, 50, 50);
};
 
imgBackGround.src = '../image/background.png';

*/


//Imagens

/*
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

*/


//console.log(imgPipe)

//canvas.backcGroundColor = '#fff'
//canvas.fillRect(25, 25, 25);

// const ctx = canvas.getContext('2d');




/*
context.fillStyle='#fff';
context.strokeStyle='fff';


context.beginPath();
context.moveTo(50, 50);
context.lineTo(200, 50);
context.fill();
context.closePath();
*/


/*button.onclick = function() {
console.log('Cliques')
};*/

//Criação dos eventos de click/mouse/keywords

/*
button.addEventListener('mouseover', function() {
console.log('cliques');

});

button.addEventListener('click', function() {
console.log('cliques');

});

button.addEventListener('keyup', function() {
console.log('cliques');

});

*/


// canvas.getElementById('canvas');


console.log(document)

const myGameArea = {
canvas: document.createElement('canvas'),
frames: 0,
start: function () {
this.canvas.width = 500;
this.canvas.height = 400;
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
}


update() {
const ctx = myGameArea.context;
ctx.fillStyle = this.color;
ctx.fillRect(this.x, this.y, this.width, this.height);
 } 
}

const player = new Component(30, 30, 'red', 0, 110);




document.addEventListener('keydown', (e) => {
switch (e.keyCode) {
case 38: // up arrow
player.speedY -= 1;
break;
case 40: // down arrow
player.speedY += 1;
break;
case 37: // left arrow
player.speedX -= 1;
break;
case 39: // right arrow
player.speedX += 1;
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
myObstacles.push(new Component(10, height, 'green', x, 0));
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
player.update();
updateObstacles();
checkGameOver();
myGameArea.score();

}


myGameArea.start();

















