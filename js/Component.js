function random(from, to) {
  let randomObs = Math.floor(from+Math.random()*(to - from))
  return randomObs;
}

class Component {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.w = 150;
		this.h = this.w/imgRatio;
		this.x = random(0, W - this.w);
		this.y = -this.h;
    }
  img.src = "./images/Sans titre.png"
  }

  draw() {
    if (!this.img) return;
   ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
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
  
  hits(player) {
    return !(
      this.bottom() < player.top() ||
      this.top() > player.bottom() ||
      this.right() < player.left() ||
      this.left() > player.right()
    );

  }
}