
import {
    mouse,
    canvas,
} from './../main.js'

// TODO: create Class class
// TODO: create Section class ( another branch)
// TODO: create Column class (another branch)

// TODO: drag
// TODO: focus (svg should be implemented in another branch)

// TODO: edit menu (svg)
// TODO: edit status (svg)


// TODO: resize (just a method or something)
// TODO: resize (with svg)

class UMLObject{
    constructor(paperObj,style){

        this.paperObj = paperObj;
        this.paperObj.style = style;
        this.group = new Group({
            children:[this.paperObj]
        })

    }

    create(){}
    update(){}
    delete(){
        return this.group.remove()
    }

    draggable(){
        this.group.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
        }
    }

}

class Class extends UMLObject{

    static defaultStyle = {
        fillColor: 'white',
        strokeColor: '#bbc8d3',
    }

    constructor(/* texts, */style = Class.defaultStyle){

        super(new Path.Rectangle([100,100],[200,50]), style)

        this.TYPE = "Class"


        // this.texts = new Group()
        // this.initTexts(texts)
        this.group.addChild(this.texts);
        

    }
    create(){

    }
    update(params){

    }
    delete(){
        return super.delete()
    }
    draggable(){
        super.draggable()
    }

}
export{
    Class
}