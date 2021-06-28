import { Column } from 'js/models/column'
import { Divider } from 'js/models/divider'
import { UMLObject } from 'js/models/uml_object';
// TODO: edit menu (svg)
// TODO: edit status (svg)


// TODO: resize (just a method or something)
// TODO: resize (with svg)


export class Class extends UMLObject {

    
    constructor(){

        super()

        this.statusGroup = new Group();
        this.contentsGroup = new Group();

        this.rect = new Path.Rectangle(1,1,1,1);
        this.nameText = new PointText(1,1);

    }
    set(){

        this.initNestStracture();

    }
    
    initNestStracture(){

        this.statusGroup.addChild(this.rect);
        this.statusGroup.addChild(this.nameText);
        this.addChild(this.statusGroup);
        this.addChild(this.contentsGroup);

    }
}



