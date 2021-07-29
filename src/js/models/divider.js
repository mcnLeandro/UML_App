import { UMLObject } from "./uml_object";

export class Divider extends UMLObject {

    
    constructor(){

        super()

        this.outerRect = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.bar = new Path.Line()

    }
    set(){

        this.initNestStracture();
        
    }
    initNestStracture(){
        
        this.addChild(this.outerRect)
        this.addChild(this.bar);
        
    }
    

}

/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : divider.js')
 /*******************************/