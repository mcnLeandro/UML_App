import {Group} from 'paper'
import {
    mouse,
    canvas,
} from './../main.js'



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
        this.contentsArr = [];

        //-----------------------------//
        // paper.js

        this.statusGroup = new Group();
        this.contentsGroup = new Group();

        this.rect = new Path.Rectangle([100,100],[240,70]);
        this.nameText = new PointText([this.rect.bounds.center.x, this.rect.bounds.center.y + 10]);

        //*****************************//
        // styling

        this.rect.set(Class.defaultRectStyle);
        this.nameText.set(Class.defaultTextStyle);
        
        //******************************//
        //adding child. building structure

        this.statusGroup.addChild(this.rect);
        this.statusGroup.addChild(this.nameText);
        this.addChild(this.statusGroup);
        this.addChild(this.contentsGroup);

        //*****************************//
        // set default contents
        this.draggable()
        // this.addDivider()
        // this.addColumn()
        // this.addDivider()

    }
    
    addColumn(){

        let column = new Column(this)
        this.contentsArr.push(column);
        this.contentsGroup.addChild(column.group)

    }
    addDivider(){

        let divider = new Divider(this)
        this.contentsArr.push(divider);
        this.contentsGroup.addChild(divider.group)

    }
    draggable(){

        this.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }

    }

}
class Column extends Group {

    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {

        content: "Column",
        fillColor: '#25313c',
        // fontFamily: 'Courier New',
        // fontWeight: 'bold',
        fontSize: 15,

    }
    static defaultBtnStayle = {

        strokeColor : '#f55',
        radius : 5,

    }
    constructor(parent){

        super();
        this.parent = parent
        this.space = 7; // CONSIDER: there's any reason that this isn't immutable
        this.btnSize = 25;

        //-----------------------------//
        // paper.js

        let bounds = this.parent.rect.bounds;
        let isEmpty = this.parent.contentsGroup.isEmpty()
        let x = bounds.left;
        let y = isEmpty ? bounds.bottom : this.parent.group.bounds.bottom;
        let w = bounds.width;
        // let h = bounds.height;

        this.outerRect = new Shape.Rectangle([x,y],[w,50]);
        this.innerRect = new Shape.Rectangle(
            new Point(this.outerRect.bounds.left  + this.space, this.outerRect.bounds.top + this.space),
            new Point(this.outerRect.bounds.right - this.space, this.outerRect.bounds.bottom - this.space)
        );

        this.btn  = new Shape.Rectangle({
            center :[this.innerRect.bounds.left + this.btnSize/2, this.innerRect.bounds.center.y], 
            size: [this.btnSize,this.btnSize]
        });
        this.text  = new PointText(
            [this.innerRect.bounds.left + this.btn.bounds.width + this.space, this.innerRect.bounds.center.y + 6 ]
        );

        //*****************************//
        // styling

        // this.outerRect.strokeColor = '#f0f';
        // this.innerRect.strokeColor = '#00f'
        
        this.outerRect.set(Column.defaultRectStyle)
        this.text.set(Column.defaultTextStyle);
        this.btn.set(Column.defaultBtnStayle)

        //*****************************//
        // adding child. building structure

        this.addChild(this.outerRect);
        this.addChild(this.innerRect)
        this.addChild(this.text);
        this.addChild(this.btn); 

        //*****************************//
        this.editableText()

    }
    editableText(){
        // there's ediitableTextDiv in HTML side. decleaed in 14 line in main.js file
        // FIXME: translate gives a place error
        let inputHTML = (left,top, h, w, fontSize, fontFamily)=>{
            return `
            <input 
                id='input' 
                style="
                    top: ${top}px; 
                    left: ${left}px; 
                    height:${h}px;
                    width:${w}px;
                    font-size:${fontSize}px;
                    font-family:${fontFamily};
                    cursor: default; 
                    position: absolute; 
                    outline: none; 
                    white-space: pre-wrap; 
                    overflow-wrap: break-word; 
                "
                role="textbox" 
                contenteditable="true" 
                autocorrect="off" 
                spellcheck="false" 
                aria-multiline="true"
            >
            </input>
            `
        }
    
        this.text.onClick = function(){
            
            let editableTextDiv = document.getElementById('editableTextDiv');
            editableTextDiv.innerHTML += inputHTML(
                this.point.x, 
                this.point.y - this.fontSize, 
                this.bounds.height,
                this.bounds.width,
                this.fontSize,
                this.fontFamily
            );
    
            let input = document.getElementById('input')
            input.value = this.content
    
            this.visible = false
    
            let text = this;
            input.addEventListener('keydown',function(e){
                if(e.key == "Enter"){
                    text.content = input.value;
                    text.visible = true;
                    editableTextDiv.innerHTML = ""
                }
            })
    
    
        }
    
    
    }

}
class Divider extends Group {

    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultBarStyle = {

        strokeWidth : 2,
        strokeColor : '#bbc8d3',

    }
    constructor(parent){

        super()
        this.parent = parent;

        //------------------
        // paper.js
        let bounds = this.parent.rect.bounds;
        let isEmpty = this.parent.contentsGroup.isEmpty()
        let x = bounds.left;
        let y = isEmpty ? bounds.bottom : this.parent.group.bounds.bottom;
        let w = bounds.width;
        // let h = bounds.height;

        this.outerRect = new Path.Rectangle([x,y],[w,Divider.defaultBarStyle.strokeWidth]);
        this.bar = new Path.Line(
            new Point(this.outerRect.bounds.left , this.outerRect.bounds.center.y),
            new Point(this.outerRect.bounds.right, this.outerRect.bounds.center.y)
        );
        
        //*****************************/
        // styling

        this.outerRect.set(Divider.defaultRectStyle)
        this.bar.set(Divider.defaultBarStyle)

        //*****************************/
        // adding child. building structure

        this.addChild(this.outerRect)
        this.addChild(this.bar);

        //*****************************/

    }

}


export{
    Class,
    Column,
    Divider
}