var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
let data = []

var mouse = {
    x:undefined,
    y:undefined,
    listDownX:undefined,
    lastDownY:undefined,
    clicked:false
}
var wheel = {
    x:Math.floor(innerWidth/2),
    y:Math.floor(innerHeight/2)
}
var click = {
    x:0,
    y:0
}
var colorArray = [
    '#15C2A6',
    '#353535',
    '#FEC828',
    '#EF4F2D',
    '#CB2624'
]

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(`x : ${mouse.x}, Y : ${mouse.y}`)
})
window.addEventListener("mousedown",e=>{
    mouse.clicked = true;
    mouse.lastDownX = e.x;
    mouse.lastDownY = e.y;
    // console.log(`x : ${e.x}, Y : ${e.y}`)
})
window.addEventListener("mouseup",e => {
    mouse.clicked = false;
})
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // init()
})
window.addEventListener('wheel',function(event){
    wheel.x = event.x;
    wheel.y = event.y;

})
window.addEventListener('click',function(event){
    click.x = event.x;
    click.y = event.y;
    // console.log(`x : ${click.x}, Y : ${click.y}`)
})

function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.color = 'black'


    this.draw = function() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue'
        c.fillStyle = this.color;
        c.stroke();
        c.fill();

        // console.log(`x : ${this.x}, Y : ${this.y}`)

    }
    this.update = function(){
        this.draw();
    }
    
}

// ===============================================
// field
// ===============================================

var field = {
    x:0,
    y:0,

    updateAsCanvas : function(x,y){

        c.clearRect(-this.x,-this.y,innerWidth,innerHeight)

        this.x = this.x + x;
        this.y = this.y + y;

        console.log(`x : ${this.x}, Y : ${this.y}`)

        c.translate(x, y)
        drawGrid(100);

        var zero = new Circle(0, 0, 10, 10, 10);
        c.fillText('( x:0 , y:0 )', 15 , -10)
        zero.draw();

        for(let i = 0 ; i < data.length ; i++){
            data[i].draw()
        }
    },
    updateAsView : function(x,y){

        c.clearRect(-this.x, -this.y, innerWidth, innerHeight)
        c.translate(-this.x, -this.y)
        
        this.x = x;
        this.y = y;

        c.translate(x, y)
        
        // console.log(`x : ${this.x}, Y : ${this.y}`)

        drawGrid(100);

        var zero = new Circle(0, 0, 10, 10, 10);
        c.fillText('( x:0 , y:0 )', 15 , -10)
        zero.draw();

        for(let i = 0 ; i < data.length ; i++){
            data[i].draw()
        }
    }

}
// 0を中心としていてそこからwidthとheightを指定してる方右側は切れてしまうのは当たり前。
// 
function drawGrid(gap){


    let w = innerWidth-field.x;
    let h = innerHeight-field.y;

    c.beginPath();


    // +x
    for(let x = 0 ; x < w; x = x+gap ){

        c.moveTo(x,-field.y);
        c.lineTo(x,h);

    }
    //-x
    for(let x = 0 ; x >= -field.x; x = x-gap ){

        c.moveTo(x,-field.y);
        c.lineTo(x,h);

    }
    //+y
    for(let y = 0 ; y < h ; y = y+gap){

        c.moveTo(-field.x, y);
        c.lineTo(w, y);

    }
    //-y
    for(let y = 0 ; y >= -field.y ; y = y-gap){

        c.moveTo(-field.x, y);
        c.lineTo(w, y);

    }
    c.strokeStyle = 'black'
    c.stroke();
    c.closePath();

}



data.push(new Circle(100, 100, 10, 10, 10));
data.push(new Circle(-100, -100, 10, 10, 10));

field.updateAsView(500, 500)
let diffX = 0;
let diffY = 0;
window.addEventListener('mousedown',(e)=>
    {
        diffX = e.x-field.x;
        diffY = e.y-field.y;
    }
)

window.addEventListener('keydown',(e)=>{
    if(e.key == ' ' && mouse.clicked){
        console.log(`x : ${diffX}, y : ${diffY}`)
        field.updateAsView(mouse.x - diffX, mouse.y - diffY);
    }
})


window.addEventListener('keydown',(e)=>{
    if(e.key == ' ')canvas.style.cursor =  "grab"; 
    if(e.key == ' ' && mouse.clicked) canvas.style.cursor = "grabbing";
    window.addEventListener('mouseup',(e)=>{
        canvas.style.cursor = "grab";
    })
    window.addEventListener('keyup', ()=>{
        canvas.style.cursor = 'default'
    })
})
console.log(window)