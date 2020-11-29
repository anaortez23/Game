// class Player{
//     constructor(game, dx, dy, x, y, w, h) {
//         this.game = game;
//         this.dx = dx;
//         this.dy = dy;
//         this.x = x;
//         this.y = y;
//         this.width = w;
//         this.height = h;
//         this.img = new Image();
    
// }
// drawComponent(imageSource) {
//     // console.log('------> ', this.img);
//     this.img.src = imageSource;
//     this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
// }

// move() {
//     document.addEventListener('keydown', event => {
//     switch (event.code) {
//         case 'ArrowUp':
//         case 'KeyW': /* Up arrow was pressed */
//             if (this.y - this.dy > 0){
//             this.y -= this.dy;
//             clear();
//             checkCollision();
//             if (this.game.collision == 1){
//             this.y += this.dy;
//             this.game.collision = 0;
//         }
//     }
//     break;
//         case 'ArrowDown':
//         case 'KeyS':  /* Down arrow was pressed */
//             if (this.y + this.dy < this.height ){
//             this.y += this.dy;
//             clear();
//             checkCollision();
//             if (this.game.collision == 1){
//             this.y -= this.dy;
//             this.game.collision = 0;
//         }
//     }
//     break;
//         case 'ArrowLeft':
//         case 'KeyA':  /* Left arrow was pressed */
//             if (this.x - this.dx > 0){
//             this.x -= this.dx;
//             clear();
//             checkCollision();
//             if (this.game.collision == 1){
//             this.x += this.dx;
//             this.game.collision = 0;
//         }
//         }
//     break;
//         case 'ArrowRight':
//         case 'KeyD':  /* Right arrow was pressed */
//             if (this.x + this.dx < this.width) {
//             this.x += this.dx;
//             clear();
//             checkCollision();
//             if (this.game.collision == 1){
//             this.x -= this.dx;
//             this.game.collision = 0;
//         }
//         }
//     break;
//     }
//     });
// }
// checkCollision() {
//     let imgd = this.game.ctx.getImageData(this.x, this.y, 15, 15);
//     let pix = imgd.data;
//     // console.log(pix)
//     for (let i = 0; i < pix.length; i += 4) {
//     if (pix[i] == 0 ) {
//     this.game.collision = 1;
//     }
//     }
//     }
    
// }