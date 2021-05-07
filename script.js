
class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.dx = 15;
        this.dy = 15;
        this.x = 235;
        // 235 400
        this.y = 5;
        //5 25 
        this.WIDTH = 830;
        this.HEIGHT = 555;
        this.img = new Image();
        this.bunnyImg = new Image();
        this.bunnyImg.src = ("./images/MazeBunny/frontRestBunny.png");
        this.collision = false;
        this.carrotImg = new Image();
        this.carrotImg.src = ("./images/carrotPrice.png");
    }
    draw() {
        this.clear();
        this.ctx.drawImage(this.carrotImg, 390, 8, 50, 25);
        this.ctx.drawImage(this.bunnyImg, 6.2, 5.5, 90, 40, this.x, this.y, 150, 60);
    }
    startMaze() {
        document.getElementById("myDIV").style.display = "block";
        document.getElementById('welcomePage').style.display = 'none';
        document.getElementById('mazeWin').style.display = "none";
        // document.getElementById('mazeWin').style.display = "none";
    }
    toggleInstructions() {
        var x = document.getElementById("arrows");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }

    }
    playAgain() {
        document.getElementById('mazeWin').style.display = "none";
        document.getElementById('myDIV').style.display = 'block';

    }
    clear() {
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.drawImage(this.img, -1, -1, this.WIDTH + 2, this.HEIGHT + 2);
    }
    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.img.src = ("./images/Maze/maze.png");
        const interval = setInterval(() => {
            this.draw()
            this.win()
        }, 1000 / 100);
    }
    move() {
        document.addEventListener('keydown', event => {
            // console.log(this);
            switch (event.code) {

                case 'ArrowUp':
                case 'KeyW': /* Up arrow was pressed */
                    if (this.y - this.dy > 0 && !this.checkCollision(this.x, this.y - this.dy - 5)) {
                        this.y -= this.dy;
                        this.clear();
                    }
                    break;
                case 'ArrowDown':
                case 'KeyS':  /* Down arrow was pressed */
                    if (this.y + this.dy < this.HEIGHT && !this.checkCollision(this.x, this.y + this.dy + 10)) {
                        this.y += this.dy;
                        this.clear();
                        console.log("arrowDown")
                    }
                    break;
                case 'ArrowLeft':
                case 'KeyA':  /* Left arrow was pressed */
                    if (this.x - this.dx > 0 && !this.checkCollision(this.x - this.dx - 6, this.y)) {
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
        let img = this.ctx.getImageData(x, y, 20, 20);
        let pix = img.data;
        for (let i = 3; i < pix.length; i += 4) {
            if (pix[i] > 0.7) {
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
        if (this.x > 390 && this.x < 410 && this.y <= 20 && this.y > 0) {
            document.getElementById('myDIV').style.display = 'none';
            document.getElementById('mazeWin').style.display = "block";
        }

    }


}

const myGame = new Game();
myGame.init();
myGame.move();
myGame.win();
