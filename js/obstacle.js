function random(from, to) {
  let randomObs = Math.floor(from+Math.random()*(to - from))
  return randomObs;
}
let images = ["./images/LaveLinge.png","./images/Four.png","./images/Lave-vaisselle.png","./images/frigo.png"]

let arr = [];
function randomImg(arr){ 
  let randomImg = arr[random(0,3)];
  return randomImg;
}

class Obstacle {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
    this.img = img;
    const imgRatio = img.naturalWidth/img.naturalHeight;
    this.w = 200;
		this.h = this.w/imgRatio;
		this.x = random(0, W - this.w);
		this.y = -this.h;
    }
  img.src = randomImg(images);
  this.weight = random(55,70);
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
  

  
}