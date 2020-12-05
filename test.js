// // constructor
var canvas;
var ctx;
var dx = 18;
var dy = 18;
var x = 240;
var y = 0;
var WIDTH = 830;
var HEIGHT = 555;
var img = new Image();
var collision = 0;


function startMaze() {
    let x = document.getElementById("myDIV");
    x.style.display = "block";
}

//Player rectangle
function rect(x,y,w,h) {
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
}


// Draw maze img
function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
ctx.drawImage(img, -50, -50);
// removeBackground(img);
}
// //load img
function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
img.src= ("images/maze (1).gif");

}

// //movement
function doKeyDown(evt){
switch (evt.keyCode) {
    case 38:  /* Up arrow was pressed */
    if (y - dy > 0){
        y -= dy;
        clear();
        checkcollision();
        if (collision == 1){
            y += dy;
            collision = 0;
            }
            }
            
    break;
    case 40:  /* Down arrow was pressed */
    if (y + dy < HEIGHT ){
        y += dy;
        clear();
        checkcollision();
        if (collision == 1){
            y -= dy;
            collision = 0;
            }
            }
            
    break;
    case 37:  /* Left arrow was pressed */
    if (x - dx > 0){
        x -= dx;
        clear();
        checkcollision();
        if (collision == 1){
            x += dx;
            collision = 0;
            }
            }
    break;
    case 39:  /* Right arrow was pressed */
    if ((x + dx < WIDTH)){
        x += dx;
        clear();
        checkcollision();
        if (collision == 1){
            x -= dx;
            collision = 0;
    }
    }
    break;
    }
    }

function checkcollision() {
var imgd = ctx.getImageData(x, y, 15, 15);
var pix = imgd.data;
// console.log(pix)
for (let i = 0; i < pix.length; i += 4) {
    if (pix[i] == 0 ) {
        collision = 1;
        }
        }
        }
        
function draw() {
    clear();
    ctx.fillStyle = "blue";
    rect(x, y, 15, 15);
    }
    
    
    // init();
    // window.addEventListener('keydown',doKeyDown,true);
    // console.log(checkcollision())
    
    
    
    
    
    

// const myGame = new Game();
// myGame.startMaze()
// myGame.init();
// // console.log(init())



// move() {
//     document.addEventListener('keydown', event => {
//     switch (event.code) {
//         case 'ArrowUp':
//         case 'KeyW': /* Up arrow was pressed */
//             if (this.y - this.dy > 0){
//             this.y -= this.dy;
//             this.clear();
//             this.checkCollision();
//             if (this.collision == 1){
//             this.y += this.dy;
//             this.collision = 0;
//         }
//     }
//     break;
//         case 'ArrowDown':
//         case 'KeyS':  /* Down arrow was pressed */
//             if (this.y + this.dy < this.height ){
//             this.y += this.dy;
//             this.clear();
//             this.checkCollision();
//             if (this.collision == 1){
//             this.y -= this.dy;
//             this.collision = 0;
//         }
//     }
//     break;
//         case 'ArrowLeft':
//         case 'KeyA':  /* Left arrow was pressed */
//             if (this.x - this.dx > 0){
//             this.x -= this.dx;
//             this.clear();
//             this.checkCollision();
//             if (this.collision == 1){
//             this.x += this.dx;
//             this.collision = 0;
//         }
//         }
//     break;
//         case 'ArrowRight':
//         case 'KeyD':  /* Right arrow was pressed */
//             if (this.x + this.dx < this.width) {
//             this.x += this.dx;
//             this.clear();
//             this.checkCollision();
//             if (this.collision == 1){
//             this.x -= this.dx;
//             this.collision = 0;
//         }
//         }
//     break;
//     }
//     });
//     }
// function white2transparent(img)
// {
//     init();
//     // var c = document.createElement('canvas');

//     // var w = img.width, h = img.height;

//     // c.width = w;
//     // c.height = h;

//     // var ctx = c.getContext('2d');

//     ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
//     var imageData = ctx.getImageData(0,0, WIDTH, HEIGHT);
//     var pixel = imageData.data;

//     var r=0, g=1, b=2,a=3;
//     for (var p = 0; p<pixel.length; p+=4)
//     {
//       if (
//           pixel[p+r] == 255 &&
//           pixel[p+g] == 255 &&
//           pixel[p+b] == 255) // if white then change alpha to 0
//       {pixel[p+a] = 100;}
//     }

//     ctx.putImageData(imageData,0,0);

//     return canvas.toDataURL('image/png');
// }
// var someimage = document.getElementById('imageid');
// someimage.src = white2transparent(someimage);