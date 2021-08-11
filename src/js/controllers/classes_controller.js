import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { ClassesListener } from "js/listeners/classes_listener.js";
import { ClassesView } from "js/views/classes_view";
import { Class } from "js/models/class";

import { ColumnsController } from "js/controllers/columns_controller";
import { DividersController } from "js/controllers/dividers_controller";


export class ClassesController extends UMLObjectsController{

    static create(){

        let _class = new Class();
        ClassesView.set(_class);
        ClassesListener.set(_class);
        _class.set();//CONSIDER: this is intNestStructure acutually

        return _class;

    }
    /*
    static createInto(umlObj){

        super.createInto(umlObj)

    }
    */
    static edit(_class){

        ClassesView.edit(_class);

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
    static shortcuts(_class){

        if(Key.isDown('/')) DividersController.createInto(_class);
        if(Key.isDown('enter')) ColumnsController.createInto(_class);

    }
    static expandRight(_class, additionalWidth){

        ClassesView.setShape(_class, new Rectangle(
            _class.bounds.topLeft,
            [_class.bounds.width + additionalWidth, _class.rect.bounds.height]
        ))
    
        import('js/utils/index.js').then(module =>{
    
            _class.contentsGroup.children.forEach(child => {
                
                module.getMVCLFromUMLObject(child)
                    .CONTROLLER
                    .expandRight(child,additionalWidth)
                    
            })
        })

    }
    static expandLeft(_class, additionalWidth){

        ClassesView.setShape(_class, new Rectangle(
            [_class.bounds.left - additionalWidth, _class.bounds.top],
            [_class.bounds.width + additionalWidth, _class.rect.bounds.height]
        ))
    
        import('js/utils/index').then(module =>{
    
            _class.contentsGroup.children.forEach(child => {
                
                module.getMVCLFromUMLObject(child)
                    .CONTROLLER
                    .expandLeft(child,additionalWidth)

            })
        })

    }

}







/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : classes_controller.js')
 /*******************************/