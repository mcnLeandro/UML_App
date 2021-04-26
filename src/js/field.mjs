import {
    canvas,
    svg,
    g,
    c,
    UMLClassStrokerColor,
    lineWidthDafault,
    colorArray,
    distance,
    mouse
} from "./global.mjs"

import {
    Circle
} from "./object.mjs"


// ===============================================
// field
// ===============================================

let field = {

    objects:[],

    x:0,
    y:0,

    color:'rgba(238,242,246)',

    draw: function(){

        //reset field setting
        c.fillStyle = this.color;
        c.lineWidth = lineWidthDafault;

        //set field style
        c.fillRect(-field.x, -field.y, innerWidth, innerHeight)
        this.drawGrid(100);

        // console.log(this.x + " " + field.x)
        //reinit
        this.objects.forEach(e => e.update());

    },
    updateAsCanvas : function(x,y){

        c.clearRect(-this.x,-this.y,innerWidth,innerHeight)

        this.x = this.x + x;
        this.y = this.y + y;

        // console.log(`x : ${this.x}, Y : ${this.y}`)

        c.translate(x, y)
        g.style.transform = `translate(${this.x+10}px,${this.y+10}px)`
        
        this.draw() 
       
    },
    updateAsView : function(x,y){

        c.clearRect(-this.x, -this.y, innerWidth, innerHeight)
        c.translate(-this.x, -this.y)

        
        this.x = x;
        this.y = y;
        
        c.translate(x, y)
        // g.style.transform = `translate(${x+10}px,${y+10}px)` 
        g.style.transform = `translate(${x+10}px,${y+10}px)` 
        
        this.draw()
    },
    drawGrid: (gap)=>{

        // if(gap == 100)return;

        let w = innerWidth-field.x;
        let h = innerHeight-field.y;
    
        c.beginPath();
        c.globalAlpha = 0.5
    
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
        c.globalAlpha = 1
    
    },
    init:function(){

        this.objects.push(new Circle(0, 0, 10, 10, 10));
        this.objects.push(new Circle(100, 100, 10, 10, 10));
        this.objects.push(new Circle(-100, -100, 10, 10, 10));
        
        field.updateAsView(500, 500)
    
    }

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
    mouse.field.x = e.x - field.x;
    mouse.field.y = e.y - field.y;
    // console.log(`x : ${mouse.x}, Y : ${mouse.y}`)

})
window.addEventListener("mousedown",e => {

    mouse.isClicked = true;
    mouse.lastDown.x = e.x;
    mouse.lastDown.y = e.y;
    mouse.field.lastDown.x = e.x-field.x;
    mouse.field.lastDown.y = e.y-field.y;

})
window.addEventListener("mouseup",e => {

    mouse.isClicked = false;

})
// window.addEventListener('wheel',e => {

//     wheel.x = e.x;
//     wheel.y = e.y;

// })
window.addEventListener('click',e => {

    mouse.click.x = e.x;
    mouse.click.y = e.y;
    console.log(`x: ${e.x},y: ${e.y}`)

})


// ===============================================
// grab listenner
// ===============================================

window.addEventListener('keydown',e => {

    if(e.key == ' ' && mouse.isClicked){

        field.updateAsView(mouse.x - mouse.field.lastDown.x, mouse.y - mouse.field.lastDown.y);
        
    } 

})
window.addEventListener('keydown',e => {

    if(e.key == ' '){
        canvas.style.cursor =  "grab";
        svg.style.cursor =  "grab";
    } 

    if(e.key == ' ' && mouse.isClicked){
        canvas.style.cursor = "grabbing";
        svg.style.cursor = "grabbing";
    } 

    window.addEventListener('mouseup',()=>{
        if(mouse.isClicked){
            canvas.style.cursor = "grab"
            svg.style.cursor = "grab"
        }
    })
    window.addEventListener('keyup' , ()=> {
        canvas.style.cursor = 'default'
        svg.style.cursor = 'default'
    })

})





export{
    field
}
