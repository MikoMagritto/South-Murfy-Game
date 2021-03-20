let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.clearRect(0,0, 1000,1600)
  ctx.fillStyle = "#3d8305";
	ctx.fillRect(0, 0, W, H);
	ctx.fillStyle = "#808080";
	ctx.fillRect(70, 0, W - 2 * 70, H);
	ctx.fillStyle = "white";
	ctx.fillRect(100, 0, 25, H);
	ctx.fillStyle = "white";
	ctx.fillRect(W - 100 - 25, 0, 25, H);
	ctx.beginPath();
	ctx.lineWidth = 13;
	ctx.strokeStyle = "white";
	ctx.setLineDash([50, 40]);
	ctx.moveTo(500, 0);
	ctx.lineTo(500, H);
	ctx.stroke();

  car.draw();
 

  if(frames % 150 === 0){
    let obstacle = new Obstacle ();
    obstacles.push(obstacle)
  }
  obstacles.forEach(function (element){
    element.y +=5;
    element.draw();
  })
  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;
  console.log('touche appuyee', e)
  switch(e.key) {
    case'ArrowLeft':
    console.log('gauche');
    car.x += -100;
    break;
    case'ArrowRight':
    console.log('droite');
    car.x += 100;
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
  car = new Car();
  obstacles = [];
  //requestAnimationFrame(animLoop);


  // TODO

  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
