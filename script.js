class Game{
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.dx = 15;
        this.dy = 15;
        this.x = 400//235;
        this.y = 40//5;
        this.WIDTH = 830;
        this.HEIGHT = 555;
        this.img = new Image();
        this.bunnyImg = new Image();
        this.collision = false;

    }
    startMaze() {
    document.getElementById("myDIV").style.display = "block";
    // document.getElementById('mazeWin').style.display = 'none';
    document.getElementById('welcomePage').style.display = 'none';
    // this.img.this.removeBackground();
    }  
    // //Player rectangle
    // rect(x,y,w,h) {
    // this.ctx.beginPath();
    // this.ctx.rect(x,y,w,h);
    // this.ctx.closePath();
    // this.ctx.fill();
    // }
    // Draw maze img
    clear() {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.ctx.drawImage(this.img, -1, -1, this.WIDTH, this.HEIGHT);
    }
    
    //load img
    init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.img.src = ("./images/maze.png");
    const interval = setInterval(() => {
    this.draw()
    this.win()
    }, 1000 / 60);
    }
    
    move() {
    document.addEventListener('keydown', event => {
        // console.log(this);
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW': /* Up arrow was pressed */
            if (this.y - this.dy > 0 && !this.checkCollision(this.x + this.dx, this.y )){
                this.y -= this.dy;
                this.clear();
                // this.checkCollision();
            // if (this.collision == 1){
            //     this.y += this.dy;
            //     this.collision = 0;
            // }
            }
        break;
        case 'ArrowDown':
        case 'KeyS':  /* Down arrow was pressed */
            if (this.y + this.dy < this.HEIGHT && !this.checkCollision(this.x, this.y + this.dy)){
                this.y += this.dy;
                this.clear();
                console.log("arrowDown")
            //     this.checkCollision();
            // if (this.collision == 1){
            //     this.y -= this.dy;
            //     this.collision = 0;
            // }
            }
        break;
        case 'ArrowLeft':
        case 'KeyA':  /* Left arrow was pressed */
            if (this.x - this.dx > 0 && !this.checkCollision(this.x - this.dx, this.y)){
            this.x -= this.dx;
            this.clear();
        //     this.checkCollision();
        //     if (this.collision == 1){
        //     this.x += this.dx;
        //     this.collision = 0;
        // }
        }
    break;
        case 'ArrowRight':
        case 'KeyD':  /* Right arrow was pressed */
            if (this.x + this.dx < this.WIDTH && !this.checkCollision(this.x + this.dx + 6, this.y)) {
            this.x += this.dx;
            this.clear();
        //     this.checkCollision();
        //     if (this.collision == 1){
        //     this.x -= this.dx;
        //     this.collision = 0;
        // }
        }
    break;
    }
    });
    }
    
    checkCollision(x, y) {
        this.clear();
        let imgd = this.ctx.getImageData(x, y, 20, 20);
        console.log(x, y)
        let pix = imgd.data;
        // console.log(pix)
        for (let i = 3; i < pix.length; i += 4) {
            if (pix[i] > 0.7 ) { //&& pix[i+1] === 0 && pix[i+2] === 0) {
            console.log(i);
            return true;
            // console.log("yes black")
            }
        }
        return false;
    }
    
    draw() {
    this.clear();
    let carrotImg = new Image();
    carrotImg.src = ("./images/carrotPrice1.png");
    this.ctx.drawImage(carrotImg, 390, 8, 50, 25);
    this.bunnyImg.src = ("./images/MazeBunny/frontRestBunny.png");
    this.ctx.drawImage(this.bunnyImg, 6.2, 5.5, 90, 40, this.x, this.y, 150, 60);

    }

    win(x, y) {
        // console.log(this.x >= 390 , this.x < 410 , this.y <= 20 , this.y > 0)
        if (this.x > 390 && this.x < 410 && this.y <= 20 && this.y > 0){
        // console.log("now")
        document.getElementById('myDIV').style.display = 'none';
        document.getElementById('mazeWin').style.display = "block";
    }
    
    }
    
}





// init();
// window.addEventListener('keydown',this.doKeyDown,true);
// // // console.log(checkcollision())








const myGame = new Game();
myGame.init();
myGame.move();
myGame.win();
// myGame.win();
// console.log(myGame.move)
// window.addEventListener('keydown',myGame.move,true);

// var button = document.querySelector('button');
// button.onclick = myGame.startMaze()
//do stuff
// // console.log(init())
