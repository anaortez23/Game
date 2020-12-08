class Game{
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.dx = 15;
        this.dy = 15;
        this.x = 235;
        this.y = 5;
        this.WIDTH = 830;
        this.HEIGHT = 555;
        this.img = new Image();
        // this.down = new Image();
        // this.down.src = ("./images/MazeBunny/downArrowBunny.png")
        // this.bunnyDown = new Component(this, this.down, this.x, this.y, 277, 36, 150, 8);
        // this.isMovingDown = false;
        this.bunnyImg = new Image();
        this.bunnyImg.src = ("./images/MazeBunny/frontRestBunny.png");
        this.collision = false;
        this.carrotImg = new Image();
        this.carrotImg.src = ("./images/carrotPrice.png");
        // this.carrotImg.style.position = 'relative';
        // this.bunnyImg.style.position = 'absolute';
        // this.spreadBunny = new Image();
        // this.spreadBunny.src = ("images/MazeBunny/bunnysheet5.png");
        // this.width = 25;
        // this.height = 39;
        // this.scale = 1.7;
        // this.scaledWidth = this.scale * this.width;
        // this.scaledHeight = this.scale * this.height;
        // this.spriteSheet = spriteSheet;             //the spriteSheet image
        // this.bx = x;                                 //the x coordinate of the object
        // this.by = y;                                 //the y coordinate of the object
        // this.bWidth = width;                         //width of spritesheet
        // this.bHeight = height;                       //height of spritesheet
        // this.timePerFrame = timePerFrame;           //time in(ms) given to each frame
        // this.numberOfFrames = numberOfFrames || 1;
        // this.frameIndex = 0;
        // //time the frame index was last updated
        // this.lastUpdate = Date.now();
    }
    // update() {
    //     if(Date.now() - this.lastUpdate >= this.timePerFrame) {
    //         this.frameIndex++;
    //         if(this.frameIndex >= this.numberOfFrames) {
    //             this.frameIndex = 0;
    //         }
    //         this.lastUpdate = Date.now();
    //     }
    // }
    draw() {
        this.clear();
        // if(this.isMovingDown === true){
            // this.bunnyDown.loop()
        // }
        this.ctx.drawImage(this.carrotImg, 390, 8, 50, 25);
        this.ctx.drawImage(this.bunnyImg, 6.2, 5.5, 90, 40, this.x, this.y, 150, 60);

        // this.cxt.drawImage(this.spriteSheet,
        //     this.frameIndex*this.bWidth/this.numberOfFrames,
        //     0,
        //     this.bWidth/this.numberOfFrames,
        //     this.bHeight,
        //     bx,
        //     by,
        //     this.bWidth/this.numberOfFrames,
        //     this.bHeight);
    }
    // loop() {
    //     update();
    //     draw();
    //     requestAnimationFrame(loop);
    // }
    // startAnimation(spritesheet, x, y, width, height, timePerFrame, numberOfFrames) {

    // }


    startMaze() {
    document.getElementById("myDIV").style.display = "block";
    document.getElementById('welcomePage').style.display = 'none';
    }  
    clear() {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    this.ctx.drawImage(this.img, -1, -1, this.WIDTH + 2, this.HEIGHT + 2);
    // this.ctx.drawImage(this.carrotImg, 390, 8, 50, 25);
    }
    
    //load img
    init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.img.src = ("./images/Maze/maze.png");
    const interval = setInterval(() => {
        this.draw()
        this.win()
    }, 1000 / 100);
    }
    // isMovingDown() {
    //     this.bunnyDown.loop();
    // }
    
    move() {
    document.addEventListener('keydown', event => {
        // console.log(this);
    switch (event.code) {
        case 'ArrowUp':
        case 'KeyW': /* Up arrow was pressed */
            if (this.y - this.dy > 0 && !this.checkCollision(this.x, this.y - this.dy - 5)){
                this.y -= this.dy;
                this.clear();
            }
        break;
        case 'ArrowDown':
        case 'KeyS':  /* Down arrow was pressed */
            if (this.y + this.dy < this.HEIGHT && !this.checkCollision(this.x, this.y + this.dy + 10)){
                this.y += this.dy;
                // this.isMovingDown = true;
                this.clear();
                console.log("arrowDown")
            }
        break;
        case 'ArrowLeft':
        case 'KeyA':  /* Left arrow was pressed */
            if (this.x - this.dx > 0 && !this.checkCollision(this.x - this.dx - 6, this.y)){
            this.x -= this.dx;
            this.clear();
        }
    break;
        case 'ArrowRight':
        case 'KeyD':  /* Right arrow was pressed */
            if (this.x + this.dx < this.WIDTH && !this.checkCollision(this.x + this.dx + 6, this.y)) {
            this.x += this.dx;
            this.clear();
        }
    break;
    }
    });
    }
    
    checkCollision(x, y) {
        this.clear();
        let imgd = this.ctx.getImageData(x, y, 20, 20);
        let pix = imgd.data;
        for (let i = 3; i < pix.length; i += 4) {
            if (pix[i] > 0.7 ) {
            return true;
            }
        }
        return false;
    }
//     drawFrame(frameX, frameY, canvasX, canvasY) {
//         this.ctx.drawImage(this.spreadBunny, this.width * frameX, this.height * frameY, this.width, this.height, canvasX -10, canvasY -15, scaledWidth, scaledHeight);

// }
    // draw() {
    // this.clear();
    // drawFrame(25, 39, this.x, this.y);
    // drawFrame(25 * 2.3, 39, this, 0);
    // drawFrame(0, 0, scaledWidth * 2, 0);
    // drawFrame(2, 0, scaledWidth * 3, 0);
    // this.ctx.drawImage(this.carrotImg, 390, 8, 50, 25);
    // this.ctx.drawImage(this.bunnyImg, 6.2, 5.5, 90, 40, this.x, this.y, 150, 60);
    // const width = 25;
    // const height = 39;
    // const scale = 1.7;
    // const scaledWidth = scale * width;
    // const scaledHeight = scale * height;

    // this.ctx.drawImage(this.spreadBunny,  width, height, width, height, this.x -10, this.y -15, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 2.3, height, width, height, this.x -10, this.y + 40, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 3.9, height, width, height, this.x -10, this.y + 100, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 5.35, height * 1.2, width, height, this.x -10, this.y + 165, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 6.93, height * 1.2, width, height, this.x -10, this.y + 210, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 8.23, height * 1.2, width, height, this.x -10, this.y + 260, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 8.23, height * 1.2, width, height, this.x -10, this.y + 310, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 9.6, height * 1.2, width, height, this.x -10, this.y + 360, scaledWidth, scaledHeight);
    // this.ctx.drawImage(this.spreadBunny, width * 10.9, height * 1.2, width, height, this.x -10, this.y + 410, scaledWidth, scaledHeight);










    // }

    win() {
        if (this.x > 390 && this.x < 410 && this.y <= 20 && this.y > 0){
        document.getElementById('myDIV').style.display = 'none';
        document.getElementById('mazeWin').style.display = "block";
    }
    
    }
    
}

const myGame = new Game();
myGame.init();
myGame.move();
myGame.win();
