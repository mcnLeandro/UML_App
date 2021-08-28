import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { DividersListener } from "js/listeners/dividers_listener"
import { DividersView } from "js/views/dividers_view";
import { Divider } from "js/models/divider";
import { FociController } from "js/controllers/foci_controller";

export class DividersController extends UMLObjectsController{

    /* 
    static create(){

        return super.create()

    }
    */
    static createInto(_class){

        let divider = new Divider();
        _class.contentsGroup.addChild(divider);
        DividersView.set(divider);
        divider.set();
        DividersListener.set(divider);

    }
    /* 
    static showEditMenu(){

        super.showEditMenu()

    } 
    */
    /* 
    static focus(){

        super.focus()

    } 
    */
    /* 
    static unfocus(){

        super.unfocus()

    }
    */
    /*
    static shortcuts(umlObj){
        
        super.shortcuts(umlObj)
        
    }
    */
    static expandRight(divider, additionalWidth){

        DividersView.setShape(divider, new Rectangle(

            divider.bounds.topLeft,
            [additionalWidth, divider.bounds.height]
            // divider.bounds.topLeft,
            // [divider.bounds.width + additionalWidth, divider.bounds.height]
    
        ))

    }
    static expandLeft(divider, additionalWidth){

        DividersView.setShape(divider, new Rectangle(

            [divider.bounds.left - additionalWidth, divider.bounds.top],
            [divider.bounds.width + additionalWidth, divider.bounds.height]
    
        ))

    }
}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : dividers_controller.js')
 /*******************************/