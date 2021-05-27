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
class Column extends Group {

    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {

        content: "Column",
        fillColor: '#25313c',
        fontSize: 15,

    }
    static defaultBtnStayle = {

        strokeColor : '#f55',
        radius : 5,

    }
    constructor(){

        super();
        this.space = 7;
        this.btnSize = 25;
        this.outerRect = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.innerRect = new Path.Rectangle(new Rectangle(1,1,1,1));

        this.btn  = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.text  = new PointText(1,1);

    }
    set(){

        this.initShape();
        this.initStyle();
        this.initNestStracture();
        this.editableText();

    }
    initShape(){

        let pp = this.parent.parent;
        let bounds = pp.bounds;
        let l = bounds.left;
        let r = bounds.right;
        let b = bounds.bottom;
        let w = bounds.width;


        this.outerRect.bounds = new Rectangle([l,b],[w,50]);

        this.innerRect.bounds = new Rectangle(
            new Point(l  + this.space, this.outerRect.bounds.top + this.space),
            new Point(r - this.space, this.outerRect.bounds.bottom - this.space)
        );

        this.btn.bounds  = new Rectangle({
            center :[this.innerRect.bounds.left + this.btnSize/2, this.innerRect.bounds.center.y], 
            size: [this.btnSize,this.btnSize]
        });
        this.text.bounds.point  = new Point(
            [this.innerRect.bounds.left + this.btn.bounds.width + this.space, this.innerRect.bounds.center.y + 6 ]
        );

    }
    initStyle(){

        this.outerRect.strokeColor = '#f0f';
        this.innerRect.strokeColor = '#00f'

        this.outerRect.set(Column.defaultRectStyle)
        this.text.set(Column.defaultTextStyle);
        this.btn.set(Column.defaultBtnStayle)

    }
    initNestStracture(){
        
        this.addChild(this.outerRect);
        this.addChild(this.innerRect)
        this.addChild(this.text);
        this.addChild(this.btn); 

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
    constructor(){

        super()

        this.outerRect = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.bar = new Path.Line()

    }
    set(){

        this.initShape();
        this.initStyle();
        this.initNestStracture();
    }
    initShape(){
        let pp = this.parent.parent;
        let bounds = pp.bounds;
        let l = bounds.left;
        let r = bounds.right;
        let b = bounds.bottom;
        let w = bounds.width;
        this.outerRect.bounds = new Rectangle([l,b],[w,Divider.defaultBarStyle.strokeWidth]);

        this.bar.removeSegments()
        this.bar.addSegments([
            new Point(l , this.outerRect.bounds.center.y),
            new Point(r, this.outerRect.bounds.center.y)
        ]);

    }
    initStyle(){
        this.outerRect.set(Divider.defaultRectStyle)
        this.bar.set(Divider.defaultBarStyle)
    }
    initNestStracture(){
        this.addChild(this.outerRect)
        this.addChild(this.bar);
    }
    

}


export{
    Class,
    Column,
    Divider
}