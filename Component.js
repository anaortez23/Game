class Component {
    constructor(game, spritesheet, x, y, width, height, timePerFrame, numberOfFrames){
        this.game = game;
        this.spritesheet = spritesheet;             //the spritesheet image
        this.x = this.game.x
        this.y = this.game.y
        this.width = width;                         //width of spritesheet
        this.height = height;                       //height of spritesheet
        this.timePerFrame = timePerFrame;           //time in(ms) given to each frame
        this.numberOfFrames = numberOfFrames || 1;
        this.frameIndex = 0;
        this.lastUpdate = Date.now();
    }
    update() {
        if(Date.now() - this.lastUpdate >= this.timePerFrame) {
            this.frameIndex++;
            if(this.frameIndex >= this.numberOfFrames) {
                this.frameIndex = 0;
            }
            this.lastUpdate = Date.now();
        }
    }
    draw() {
        this.game.ctx.drawImage(this.spritesheet, this.frameIndex*this.width/this.numberOfFrames, 0, this.width/this.numberOfFrames, this.height, this.x, this.y, this.width/this.numberOfFrames, this.height);
    }
    loop() {
        this.update();
        this.draw();
        // requestAnimationFrame();
    }
    
}
