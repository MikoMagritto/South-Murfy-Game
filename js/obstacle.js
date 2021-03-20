function random(from, to) {
  let randomObs = Math.floor(from+Math.random()*(to - from))
  return randomObs;
}

class Obstacle {
  constructor() {
this.w = random(W / 4, (1 / 2) * W);
		this.h = 100;
		this.x = random(0, W - this.w);
		this.y = -this.h;
  
  }

  draw() {
    ctx.fillStyle = 'red';
ctx.fillRect(this.x,this.y,this.w,this.h)
  }

  top(){
    return this.y;
  }
  bottom (){
    return this.y + this.h;
  }
  left(){
    return this.x;
  }
  right(){
    return this.x + this.w;
  }
  
  hits(car) {
    return !(
      this.bottom() < car.top() ||
      this.top() > car.bottom() ||
      this.right() < car.left() ||
      this.left() > car.right()
    );
    // TODO
  }
}