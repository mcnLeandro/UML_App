import { Group } from 'paper'
import { Column } from './column'
import { Divider } from './divider'

// TODO: focus (svg should be implemented in another branch)

// TODO: edit menu (svg)
// TODO: edit status (svg)


// TODO: resize (just a method or something)
// TODO: resize (with svg)


// TODO: create controrable method (adding column, and divider)(maybe after focus implemention)
// TODO: reconsider, and rewrite todo.

class Class extends Group {

    static defaultRectStyle = {
        
        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {
        
        fillColor:'#25313c',
        content: 'Class',
        justification: 'center',
        fontWeight: 'bold',
        fontSize: 15,

    }
    constructor(){

        super()
        this.isFocused = false;

        //-----------------------------//
        // paper.js

        this.statusGroup = new Group();
        this.contentsGroup = new Group();

        this.rect = new Path.Rectangle(1,1,1,1);
        this.nameText = new PointText(1,1);

        // CONSIDER: set method decrear in here, or decrear like column and divider.
        // this.set() 
    }
    set(){

        this.initShape();
        this.initStyle();
        this.initNestStracture();
        this.initAdditionalOptionsDemo()

    }
    initShape(){

        this.rect.bounds = new Rectangle([100,100],[240,70]);
        this.nameText.bounds.point = new Point(this.rect.bounds.center.x, this.rect.bounds.center.y + 10);

    }
    initStyle(){

        this.rect.set(Class.defaultRectStyle);
        this.nameText.set(Class.defaultTextStyle);

    }
    initNestStracture(){

        this.statusGroup.addChild(this.rect);
        this.statusGroup.addChild(this.nameText);
        this.addChild(this.statusGroup);
        this.addChild(this.contentsGroup);

    }
    // TODO: this is used for now because not suit;
    initAdditionalOptionsDemo(){

        this.draggable()
        // this.addDivider()
        // this.addColumn()
        // this.addDivider()

    }
    addColumn(){
        //when succeed to add item , addChild method returns the item.
        this.contentsGroup.addChild(new Column()).set()

    }
    addDivider(){

        this.contentsGroup.addChild(new Divider()).set()

    }
    draggable(){

        this.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }

    }

}



export{ Class }