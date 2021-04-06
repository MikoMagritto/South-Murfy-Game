class Player {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      this.w = 150;
      this.h = this.w / imgRatio;
      this.x = W / 2;
      this.y = H - 250;


    }
    img.src = "./images/badPlayer.png";
  }

  draw() {

    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)


  }

  moveLeft() {
    this.x += -100;
    this.draw();

  }
  moveRight() {
    this.x += 100;
    this.draw();

  }

  top() {
    return this.y - 20;
  }
  bottom() {
    return this.y + this.h;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.w;
  }
  pickupObstacle(obstacle) {
    if (this.top() < obstacle.bottom() && this.left() < obstacle.right() && this.right() > obstacle.left()) {
      let obstacleIndex = obstacles.indexOf(obstacle);
      obstacles.splice(obstacleIndex, 1)
      return (points++, numberFrame -= 1)
    }
    else if (obstacle.bottom() > H) {
      let obstacleIndex = obstacles.indexOf(obstacle);
      obstacles.splice(obstacleIndex, 1);
      life++

      console.log('life lost' + ' ' + life++)
      if (life > 5) {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(`Bravo tu as évité`);
        newDiv.id = "gameOver";
        newDiv.appendChild(newContent);
        gameover = true
        console.log('partie perdu')
        // ctx.font = "100px Arial"
        // ctx.textAlign = "right"
        // ctx.fillStyle = "black"
        // ctx.fillText(`${points} GAMEOVER`,W/2,H/2)
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'gameOver')
        var newContent = document.createTextNode(`Game Over`);
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById('game-board');
        document.body.insertBefore(newDiv, currentDiv);
      }
    }
  }
  hitComponent(component) {
    if (this.top() < component.bottom() && this.left() < component.right() && this.right() > component.left()) {
      let componentIndex = components.indexOf(component);
      components.splice(componentIndex, 1)
      return (life++)
    }
  }
}

//créer une div avec
//À chaque fois que player va toucher obstacle
//lire le poids obstacle
//rajouter ce poids au score.