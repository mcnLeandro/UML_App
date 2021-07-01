import { UMLObject } from "js/models/uml_object";




export class Arrow extends UMLObject {

    constructor(){

        super()
        this.path = new Path();
        this.firstCircle = new Path.Circle([1,1],1);
        this.lastCircle  = new Path.Circle([1,1],1);
        

    }
    set(){

        this.initNestStracture();
        
    }
    initNestStracture(){
        
        this.addChild(this.path);
        
    }

}