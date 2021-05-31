import { Group } from 'paper'

export class Divider extends Group {

    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultBarStyle = {

        strokeWidth : 2,
        strokeColor : '#bbc8d3',

    }
    constructor(){

        super()

        this.outerRect = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.bar = new Path.Line()

    }
    set(){

        this.initShape();
        this.initStyle();
        this.initNestStracture();
        
    }
    initShape(){
        let pp = this.parent.parent;
        let bounds = pp.bounds;
        let l = bounds.left;
        let r = bounds.right;
        let b = bounds.bottom;
        let w = bounds.width;
        this.outerRect.bounds = new Rectangle([l,b],[w,Divider.defaultBarStyle.strokeWidth]);

        this.bar.removeSegments()
        this.bar.addSegments([
            new Point(l , this.outerRect.bounds.center.y),
            new Point(r, this.outerRect.bounds.center.y)
        ]);

    }
    initStyle(){
        
        this.outerRect.set(Divider.defaultRectStyle)
        this.bar.set(Divider.defaultBarStyle)
        
    }
    initNestStracture(){
        
        this.addChild(this.outerRect)
        this.addChild(this.bar);
        
    }
    

}

