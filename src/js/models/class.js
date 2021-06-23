import { Column } from './column'
import { Divider } from './divider'


// TODO: edit menu (svg)
// TODO: edit status (svg)


// TODO: resize (just a method or something)
// TODO: resize (with svg)



export class Class extends Group {

    
    constructor(){

        super()
        this.isFocused = false;

        //-----------------------------//
        // paper.js

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
    addDivider(){

        this.contentsGroup.addChild(new Divider()).set()

    }
}



