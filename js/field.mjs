let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
let data = []
let colorArray = [
    '#15C2A6',
    '#353535',
    '#FEC828',
    '#EF4F2D',
    '#CB2624'
]

// ===============================================
// field
// ===============================================

let field = {
    x:0,
    y:0,

    updateAsCanvas : function(x,y){

        c.clearRect(-this.x,-this.y,innerWidth,innerHeight)

        this.x = this.x + x;
        this.y = this.y + y;

        console.log(`x : ${this.x}, Y : ${this.y}`)

        c.translate(x, y)
        this.drawGrid(100);
        
        //reinit
        data.forEach(e => e.update());
    },
    updateAsView : function(x,y){

        c.clearRect(-this.x, -this.y, innerWidth, innerHeight)
        c.translate(-this.x, -this.y)
        
        this.x = x;
        this.y = y;

        c.translate(x, y)
        this.drawGrid(100);

        ///reinit
        data.forEach(e => e.update());
    },
    drawGrid: (gap)=>{


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

}


// user Interface status

let mouse = {
    x:undefined,
    y:undefined,
    lastDown:{
        x:undefined,
        y:undefined,
        // Is it really suit to here, inside of mouse? yes or no, and why?
        diffFromField:{
            x: undefined,
            y: undefined
        }
    },
    // is this really need ? but I thought lastDown and click is different. click is propablly same as mouseup, or little bit different
    click:{
        x:undefined,
        y:undefined,
    },
    isClicked:false
}

// feature implemention of scroll and move field
// let wheel = {
//     x:Math.floor(innerWidth/2),
//     y:Math.floor(innerHeight/2)
// }

window.addEventListener('resize', ()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // init()

})
window.addEventListener('mousemove', e => {

    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(`x : ${mouse.x}, Y : ${mouse.y}`)

})
window.addEventListener("mousedown",e => {

    mouse.isClicked = true;
    mouse.lastDown.x = e.x;
    mouse.lastDown.y = e.y;
    mouse.lastDown.diffFromField.x = e.x-field.x;
    mouse.lastDown.diffFromField.y = e.y-field.y;

})
window.addEventListener("mouseup",e => {

    mouse.isClicked = false;

})
window.addEventListener('wheel',e => {

    wheel.x = e.x;
    wheel.y = e.y;

})
window.addEventListener('click',e => {

    mouse.click.x = e.x;
    mouse.click.y = e.y;

})


/// grab field event

window.addEventListener('keydown',e => {

    if(e.key == ' ' && mouse.isClicked){

        field.updateAsView(mouse.x - mouse.lastDown.diffFromField.x, mouse.y - mouse.lastDown.diffFromField.y);
        
    } 

})
window.addEventListener('keydown',e => {

    if(e.key == ' ')canvas.style.cursor =  "grab"; 
    if(e.key == ' ' && mouse.isClicked) canvas.style.cursor = "grabbing";
    // ERROR: keydown space and mousedown, then keyup space before mouseup. cursur swaps default to hand.
    window.addEventListener('mouseup',()=> canvas.style.cursor = "grab")
    window.addEventListener('keyup' , ()=> canvas.style.cursor = 'default')

})




class Circle {
    constructor(x, y, dx, dy, radius) {

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.color = 'black';

    }
    draw(){

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.fillStyle = this.color;
        c.stroke();
        c.fill();

    }
    update(){

        this.draw();

    }
}

function init(){

    data.push(new Circle(0, 0, 10, 10, 10));
    data.push(new Circle(100, 100, 10, 10, 10));
    data.push(new Circle(-100, -100, 10, 10, 10));
    
    field.updateAsView(500, 500)

}

init()

