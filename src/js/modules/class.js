import {
    mouse,
    canvas,
} from './../main.js'


// TODO: focus (svg should be implemented in another branch)

// TODO: edit menu (svg)
// TODO: edit status (svg)


// TODO: resize (just a method or something)
// TODO: resize (with svg)

class UMLObject{

    static defaultStyle = {
        
        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }

    constructor(){
        this.group = new Group();
        // this.group.visible = false;
    }
    // draw(){
    //     this.group.visible = true;
    // }
    draggable(){
        this.group.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }
    }

}




// TODO: styling Deviver{create bar with rectangle or Path plobably}
// TODO: adding default set of Object in Class { default is [Deviver , Column, Deviver] } 
// TODO: positioning inside of Class { text, Deviver, Column}
// TODO: reconsider and rewrite todo.

class Class extends UMLObject {

    static defaultStyle = {
        
        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {
        
        content: "test",
        fillColor: 'black',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 25,

    }
    
    constructor(){

        super()

        this.contentsArr = [];

        //-----------------------------//

        this.statusGroup = new Group();
        this.contentsGroup = new Group();

        this.nameText = new PointText();
        this.rect = new Path.Rectangle([100,100],[200,100]);

        //******************************//
        //adding child. building structure
        this.statusGroup.addChild(this.rect);
        this.statusGroup.addChild(this.nameText);
        this.group.addChild(this.statusGroup);
        this.group.addChild(this.contentsGroup);
        //*****************************//
        // adding style
        this.nameText.style = Class.defaultTextStyle;
        this.rect.style = Class.defaultStyle;
        //*****************************//

    }
    addColumn(){
        
        let bounds = this.rect.bounds;
        let x = bounds.x;
        let y = bounds.y;
        let w = bounds.width;
        let h = bounds.height;
        let col = new Column(x,y,w,h)
        // col.parent = this;
        this.contentsArr.push(col);
        this.contentsGroup.addChild(col.group)

    }

}
class Column extends UMLObject {

    static defaultStyle = {

        fillColor: '#000',
        // strokeColor: '#090',

    }
    static defaultBtnStyle = {

        fillColor: '#333',
        // strokeColor: '#900',

    }
    static defaultTextStyle = {

        content: "test",
        fillColor: 'black',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 25,

    }

    constructor(x,y,w,h){

        super();
        this.parent = null
    
        //-----------------------------//
        let space = 5;
        let fontSize = 25 // CONSIDER: this should be from static variable

        this.outerRect = new Shape.Rectangle(x,y,w,fontSize+space*2);
        this.innerRect = new Shape.Rectangle(x+space, y+space, w-space*2, fontSize);
        
        this.btn  = new Shape.Rectangle(x + space, y + space, fontSize, fontSize);
        this.text  = new PointText(Class.defaultTextStyle);
        // this.text  = new PointText({})// WHY: this doeasn't work?

        //*****************************//
        // adding child. building structure
        this.group.addChild(this.outerRect);
        this.group.addChild(this.innerRect)
        this.group.addChild(this.text);
        this.group.addChild(this.btn); 
        //*****************************//
        // styling
        this.outerRect.strokeColor = '#f0f';
        this.innerRect.strokeColor = '#00f'
        this.text.fillColor = 'black'
        this.text.style = Column.defaultTextStyle;
        this.text.fitBounds(this.innerRect.bounds)
        this.btn.strokeColor = '#f55'

        this.btn.radius = 5;
        //*****************************//

    }

}
class Deviver extends UMLObject {

    constructor(){

        //------------------

        this.bar = new Path.Rectangle(/* [100,100],[100,100] */);

        //*****************************/
        // adding child. building structure
        this.group.addchild(this.bar);
        //*****************************/
    }

}


export{
    Class,
    Column
}