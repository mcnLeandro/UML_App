
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

class Class {

    constructor(texts){

        this.TYPE = "Class"
        this.isAbstract = false;
        this.isInterface = false;
        this.isTemplate = false;
        this.fillColor = 'white'
        this.strokeColor = color.classStroke


        this.rect = new Path.Rectangle([100,100],[200,50])
        this.rect.fillColor = this.fillColor;
        this.rect.strokeColor = this.strokeColor;


        this.texts = new Group()
        this.initTexts(texts)
        this.class = new Group({
            children:[this.rect, this.texts]
        })
        

    }
    new(){

    }
    create(){

    }
    edit(){

    }
    update(params){

    }
    delete(){
        this.rect.remove()
    }
    draggable(){
        this.class.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
        }
    }

    initTexts(texts){

        for (let i = 0; i < texts.length; i++) {

            const text = texts[i];

            let x = this.rect.position.x;

            let textChildren = this.texts.children
            let y;
            if(textChildren.length == 0){
                y = this.rect.position.y
            }
            else{
                let lastText = textChildren[textChildren.length -1];
                y = lastText.point.y + lastText.fontSize
                console.log(lastText)
            }

            console.log(`x: ${x}, y: ${y}`)

            this.texts.addChild(new PointText({
                point: [x , y],
                content: text,
                fillColor: 'black',
                fontFamily: 'Times New Roman',
            }))

        }

    }

}
export{
    Class
}