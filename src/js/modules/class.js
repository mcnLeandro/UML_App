
import {mouse,
    canvas,
    color,
    strokeWidth
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
    constructor(paperObj){

        this.paperObj = paperObj;
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

    constructor(/* texts */){

        super(new Path.Rectangle([100,100],[200,50]))

        this.TYPE = "Class"
        this.isAbstract = false;
        this.isInterface = false;
        this.isTemplate = false;
        this.fillColor = 'white';
        this.strokeColor = color.classStroke;


        this.paperObj.fillColor = this.fillColor;
        this.paperObj.strokeColor = this.strokeColor;


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

    // initTexts(texts){

    //     for (let i = 0; i < texts.length; i++) {

    //         const text = texts[i];

    //         let x = this.paperObj.position.x;

    //         let textChildren = this.texts.children
    //         let y;
    //         if(textChildren.length == 0){
    //             y = this.paperObj.position.y
    //         }
    //         else{
    //             let lastText = textChildren[textChildren.length -1];
    //             y = lastText.point.y + lastText.fontSize
    //         }

    //         this.texts.addChild(new PointText({
    //             point: [x , y],
    //             content: text,
    //             fillColor: 'black',
    //             fontFamily: 'Times New Roman',
    //         }))

    //     }

    // }

}
export{
    Class
}