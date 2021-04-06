let player;
let obstacles;
let gameover;
let points = 0;
var life = 0;
var numberFrame = 150;
var component;
var components;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // toutes les 16,s 
  //
  console.log('coucou life', life)
  ctx.clearRect(0, 0, 1500, 1600)
  ctx.fillStyle = "#093E3E";
  ctx.fillRect(0, 0, W, H);

  const coeur1 = document.createElement('img');
  coeur1.src = "./images/Coeur.png";
  ctx.drawImage(coeur1, 50, 50, 90, 90);

  const coeur2 = document.createElement('img');
  coeur2.src = "./images/Coeur.png";
  ctx.drawImage(coeur2, 150, 50, 90, 90);

  const coeur3 = document.createElement('img');
  coeur3.src = "./images/Coeur.png";
  ctx.drawImage(coeur3, 250, 50, 90, 90);

  const coeur4 = document.createElement('img');
  coeur4.src = "./images/Coeur.png";
  ctx.drawImage(coeur4, 350, 50, 90, 90);

  if (life === 0) {
    const coeur5 = document.createElement('img');
    coeur5.src = "./images/Coeur.png";
    ctx.drawImage(coeur5, 450, 50, 90, 90);
  }



  player.draw();

  if (frames % numberFrame === 0) {
    let obstacle = new Obstacle();
    obstacles.push(obstacle);
    var component = new Component();
    components.push(component);
  }
  obstacles.forEach(function (element) {
    element.y += 5;
    element.draw();
  })
  components.forEach(function (element) {
    element.y += 10;
    element.draw();
  })
  for (component of components) {
    if (player.hitComponent(component)) {
      console.log(life);
    }
  }
  //attraper les obstacles
  for (obstacle of obstacles) {
    if (player.pickupObstacle(obstacle)) {
      console.log(points)
    }
  }
  ctx.font = "50px Arial"
  ctx.textAlign = "right"
  ctx.fillStyle = "white"
  ctx.fillText(`${points} Kilos de déchets évités`, W - 50, 100)

}

document.onkeydown = function (e) {
  if (!player) return;
  console.log('touche appuyee', e)
  switch (e.key) {
    case 'ArrowLeft':
      console.log('gauche');
      player.x += -100;
      break;
    case 'ArrowRight':
      console.log('droite');
      player.x += 100;
      break;
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {

  if (raf) {
    cancelAnimationFrame(raf);
  }
  gameover = false;
  player = new Player();
  obstacles = [];
  components = [];
  points = 0;
  life = 0;

  animLoop();

}
document.getElementById("start-button").onclick = function () {
  startGame();
};

// auto-start
//startGame();

// else if(obstacle.y > H){
//   console.log("life lost")
//   life++
//   console.log(life)
// }