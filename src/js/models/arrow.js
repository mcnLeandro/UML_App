import { UMLObject } from "js/models/uml_object";



export class Arrow extends UMLObject {

    constructor(){
        super()
        this.path = new Path()
        this.path.strokeColor = 'black'
        this.path.add(new Point(20, 20));
        this.path.add(new Point(80, 80));
        this.path.add(new Point(100, 100));
        this.path.add(new Point(8, 200));
    }

}