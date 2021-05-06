
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

    constructor(){

        this.TYPE = "Class"
        this.isAbstract = false;
        this.isInterface = false;
        this.isTemplate = false;
        this.fillColor = 'white'
        this.strokeColor = color.classStroke


        this.rect = new Path.Rectangle([100,100],[200,50])
        this.rect.fillColor = this.fillColor;
        this.rect.strokeColor = this.strokeColor;

    }
    new(){

    }
    create(){

    }
    edit(){

    }
    moveTo(x,y){
        this.rect.posision.x = x;
        this.rect.posision.y = y;
    }
    update(params){

    }
    delete(){
        this.rect.remove()
    }
    draggable(){
        this.rect.onMouseDrag = function(e){
            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
        }
    }

}
export{
    Class
}