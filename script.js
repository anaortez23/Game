class Game{
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.dx = 18;
        this.dy = 18;
        this.x = 240;
        this.y = 0;
        this.WIDTH = 830;
        this.HEIGHT = 555;
        this.img = new Image();
        this.collision = 0;

    }
    startMaze() {
    let x = document.getElementById("myDIV");
    x.style.display = "block";
    // let button = document.getElementById("startMaze")
    // console.log(button)
    
        // if (x.style.display === "none") {
        // x.style.display = "block";
        // } else {
        // x.style.display = "none";
        // }
    }  
    //Player rectangle
    rect(x,y,w,h) {
    this.ctx.beginPath();
    this.ctx.rect(x,y,w,h);
    this.ctx.closePath();
    this.ctx.fill();
    }
    // Draw maze img
    clear() {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.ctx.drawImage(this.img, -50, -50);
    }
    
    //load img
    init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.img.src = "images/maze (1).gif";
    const interval = setInterval(() => {
    this.draw()
    }, 1000 / 60);
    }
    
    move() {
    document.addEventListener('keydown', event => {
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW': /* Up arrow was pressed */
            if (this.y - this.dy > 0){
            this.y -= this.dy;
            this.clear();
            this.checkCollision();
            if (this.collision == 1){
            this.y += this.dy;
            this.collision = 0;
        }
    }
    break;
        case 'ArrowDown':
        case 'KeyS':  /* Down arrow was pressed */
            if (this.y + this.dy < this.HEIGHT ){
            this.y += this.dy;
            this.clear();
            this.checkCollision();
            if (this.collision == 1){
            this.y -= this.dy;
            this.collision = 0;
        }
    }
    break;
        case 'ArrowLeft':
        case 'KeyA':  /* Left arrow was pressed */
            if (this.x - this.dx > 0){
            this.x -= this.dx;
            this.clear();
            this.checkCollision();
            if (this.collision == 1){
            this.x += this.dx;
            this.collision = 0;
        }
        }
    break;
        case 'ArrowRight':
        case 'KeyD':  /* Right arrow was pressed */
            if (this.x + this.dx < this.w) {
            this.x += this.dx;
            this.clear();
            this.checkCollision();
            if (this.collision == 1){
            this.x -= this.dx;
            this.collision = 0;
        }
        }
    break;
    }
    });
    }
    
    checkCollision() {
    let imgd = this.ctx.getImageData(this.x, this.y, 15, 15);
    let pix = imgd.data;
    // console.log(pix)
    for (let i = 0; i < pix.length; i += 4) {
    if (pix[i] == 0 ) {
    this.collision = 1;
    }
    }
    }
    
    draw() {
    this.clear();
    this.ctx.fillStyle = "blue";
    this.rect(this.x, this.y, 15, 15);
    }
}





// init();
// window.addEventListener('keydown',this.doKeyDown,true);
// // // console.log(checkcollision())








const myGame = new Game();
myGame.init();
// console.log(myGame.move)
// window.addEventListener('keydown',myGame.move,true);

// var button = document.querySelector('button');
// button.onclick = myGame.startMaze()
//do stuff
// // console.log(init())
