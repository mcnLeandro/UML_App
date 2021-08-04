import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { FociController } from "js/controllers/foci_controller";
// import { ClassesController } from "js/controllers/classes_controller";

/**
 * @implements DraggableListener
 */
export class ClassesListener extends UMLObjectsListener{

    static set(_class){
        
        ClassesListener.onMouseDragToDrag(_class)
        ClassesListener.onClickToFocus(_class)

    }
    /*********************************
    * @interface DraggableListener   *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static onMouseDragToDrag(_class){

        _class.onMouseDrag = function(event){

            this.position.x += event.delta.x;
            this.position.y += event.delta.y;
            
        }

    }
    /* End of DraggableListener      *
    **********************************/

    static onClickToFocus(_class){

        _class.statusGroup.onClick = function(){

            FociController.set(_class);
            // ClassesController.edit(_class);

        }

    }

}







/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : classes_listener.js')
 /*******************************/