import { UMLObject } from "./uml_object";

export class Column extends UMLObject {

    
    constructor(){

        super();
        this.space = 7;
        this.btnSize = 25;
        this.outerRect = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.innerRect = new Path.Rectangle(new Rectangle(1,1,1,1));

        // this.btn  = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.btn  = new Shape.Rectangle(new Rectangle(1,1,1,1));
        this.btnText = new PointText(1,1)
        this.text  = new PointText(1,1);

    }
    set(){

        this.setNestStracture();

    }
    setNestStracture(){
        
        this.addChild(this.outerRect);
        this.addChild(this.innerRect)
        this.addChild(this.text);
        this.addChild(this.btn); 

    }

}
