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
    field
} from "./field.mjs"


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
    draggable(){}
}
class UMLClass{
    
    constructor(x, y, w, h,color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.realTimeX = x;
        this.realTimeY = y;
        this.realTimeW = w;
        this.realTimeH = h;

        this.color = color;
        this.memberVariableColums = [];
        this.methodColumns = [];

    }
    draw(){
        
        c.fillStyle = this.color;
        c.strokeStyle = UMLClassStrokerColor
        c.lineWidth = 5

        c.beginPath();
        c.fillRect(this.realTimeX, this.realTimeY, this.realTimeW, this.realTimeH);
        c.strokeRect(this.realTimeX, this.realTimeY, this.realTimeW, this.realTimeH)
        c.stroke()

        c.lineWidth=lineWidthDafault;

    }
    update(){

        this.draw()
    }
    draggable(){

        
        window.addEventListener('mousemove',()=>{
            if(this.isClicked() && mouse.isClicked){
                
                let x = mouse.field.x - (mouse.field.lastDown.x - this.x);
                let y = mouse.field.y - (mouse.field.lastDown.y - this.y);

                this.realTimeX = x;
                this.realTimeY = y;
        
                field.updateAsCanvas(0,0)
                // focus(this)
            }
        })
        window.addEventListener('mouseup',()=>{
            this.x = this.realTimeX
            this.y = this.realTimeY
        })

    }
    isClicked(){

        const mouseX = mouse.field.lastDown.x;
        const mouseY = mouse.field.lastDown.y;
        const minX = this.x;
        const minY = this.y;
        const maxX = this.x + this.w;
        const maxY = this.y + this.h;
    
        const isInnerWidth  =  minX <= mouseX && mouseX <= maxX; 
        const isInnerHeight =  minY <= mouseY && mouseY <= maxY;
        
        return isInnerWidth && isInnerHeight;
    
    }

}

export {
    Circle,
    UMLClass
}