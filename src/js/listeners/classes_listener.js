import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { FociController } from "js/controllers/foci_controller";
import { ClassesController } from "js/controllers/classes_controller";

export class ClassesListener extends UMLObjectsListener{

    static set(_class){
        
        ClassesListener.onMouseDragToDrag(_class)
        ClassesListener.onClickToFocus(_class)

    }
    static onMouseDragToDrag(_class){

        _class.onMouseDrag = function(e){

            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }

    }
    static onClickToFocus(_class){

        _class.onClick = function(){

            FociController.set(_class);
            ClassesController.edit(_class);

        }

    }

}