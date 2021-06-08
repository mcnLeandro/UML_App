import { Path, Group, Layer } from 'paper'
import { paper,canvas } from 'js/main'

// CONSIDER: this works, but extra paper project is created.
// CONSIDER: about order of compile. because this file is compiled before main.js, paper.js object is disable.
paper.install(window);
paper.setup(canvas);


export class Field{

    

    static color;
    static gridGap;
    static gridStrokerColor;

    static viewRect = new Path.Rectangle(1,1,1,1);
    static gridGroup = new Group();
    static layer = new Layer();

    static zoomInBtn = document.getElementById("zoom-in-btn");
    static zoomOutBtn = document.getElementById("zoom-out-btn");
    static zoomInput = document.getElementById("zoom-input");

}

// TODO: zoom (svg)
// TODO: resize(svg)