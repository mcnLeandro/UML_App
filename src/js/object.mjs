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

export {
    Circle
}