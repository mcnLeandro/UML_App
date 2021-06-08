import { Path, Group, Layer, PaperScope } from 'paper'
import { paper,canvas } from 'js/main'

// CONSIDER: this works, but extra paper project is created.
paper.install(window);
paper.setup(canvas);


export class Field{

    static color;
    static gridGap;
    static gridStrokerColor;

    static viewRect = new Path.Rectangle(1,1,1,1);
    static gridGroup = new Group();
    static layer = new Layer();

}

// TODO: zoom (svg)
// TODO: resize(svg)
