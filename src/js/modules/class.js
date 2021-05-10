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

    setStyle(style){}
    delete(){}
    draggable(){}

}


// TODO: consider about line 127. the grouping usage is little bit diff in Class...
// TODO: if just above is done. drag method should added in UMLObject
// TODO: styling Column a bit{ btn{need text or mark} , text is yet, rect is should delete if don't need }
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

        this.array = [];

        //-----------------------------//
        this.wholeGroup = new Group();//this should be group
        this.selfGroup = new Group();// this should be in avobe, so do nothing except considering naming.
        this.contentsGroup = new Group();

        this.nameText = new PointText();
        this.rect = new Path.Rectangle([100,100],[100,100]);

        //******************************//
        
        //adding child. building structure
        this.selfGroup.addChild(this.nameText);
        this.selfGroup.addChild(this.rect);
        this.wholeGroup.addChild(this.selfGroup);
        this.wholeGroup.addChild(this.contentsGroup);
        //*****************************//
        // adding style
        this.nameText.style = Class.defaultTextStyle;
        this.rect.style = Class.defaultStyle;
        //*****************************//

    }
    // 
    addChild(umlObject){
        this.array.push(umlObject);
        this.contentsGroup.addChild(umlObject.group)
    }

    draggable(){

        this.wholeGroup.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }

    }

}
class Column extends UMLObject {

    static defaultStyle = {

        fillColor: '#000',
        strokeColor: '#090',

    }
    static defaultBtnStyle = {

        fillColor: '#333',
        strokeColor: '#900',

    }
    static defaultTextStyle = {

        content: "test",
        fillColor: 'black',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 25,

    }

    constructor(){

        super();

        //-----------------------------//
        this.group = new Group();//CONSIDER: should this be in UMLObject?

        this.text  = new PointText();
        this.btn  = new Path.Rectangle([100,100],[20,50]);
        this.rect = new Path.Rectangle([120,100],[80,50])

        //*****************************//
        // adding child. building structure
        this.group.addChild(this.text);
        this.group.addChild(this.btn);
        this.group.addChild(this.rect);
        //*****************************//
        // adding style
        this.text.style = Column.defaultTextStyle;
        this.btn.style  = Column.defaultBtnStyle;
        this.rect.style = Column.defaultStyle;
        //*****************************//

    }

}
class Deviver extends UMLObject {

    constructor(){

        //------------------
        this.group = new Group();

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