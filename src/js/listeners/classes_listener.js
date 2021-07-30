import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { FociController } from "js/controllers/foci_controller";
// import { ClassesController } from "js/controllers/classes_controller";

export class ClassesListener extends UMLObjectsListener{

    static set(_class){
        
        ClassesListener.onMouseDragToDrag(_class)
        ClassesListener.onClickToFocus(_class)

    }
    static onMouseDragToDrag(_class){

        _class.onMouseDrag = function(e){//FIXME: e -> event

            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }

    }
    /**
     * CONSIDER: this marked as issue at #13
     */
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