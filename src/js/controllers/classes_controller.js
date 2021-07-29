import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { ClassesListener } from "js/listeners/classes_listener.js";
import { ClassesView } from "js/views/classes_view";
import { Class } from "js/models/class";

import { ColumnsController } from "js/controllers/columns_controller";
import { DividersController } from "js/controllers/dividers_controller";


/**
 * @implements Focussable Interface
 */
export class ClassesController extends UMLObjectsController{

    static create(){

        let _class = new Class();
        ClassesView.set(_class);
        ClassesListener.set(_class);
        _class.set();//CONSIDER: this is intNestStructure acutually

        return _class;

    }
    static edit(_class){

        ClassesView.edit(_class);

    }
    static shortCuts(_class){

        if(Key.isDown('/')) DividersController.createInto(_class);
        if(Key.isDown('enter')) ColumnsController.createInto(_class);

    }

    /*************************
     * @interface Focasable
     * ***********************
     * @argumnt Void
     * @return  Void
     */
     static focus(){

        ClassesView.focus()

     }
     /**
      * @argument Void
      * @return   Void
      */
     static unfocus(){

        ClassesView.unfocus()
        
     }
     /*************************
      */

}







/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : classes_controller.js')
 /*******************************/