import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { ColumnsController } from "js/controllers/columns_controller"
import { FociController } from "js/controllers/foci_controller"

export class ColumnsListener extends UMLObjectsListener{

    static set(column){

        ColumnsListener.text.onDoubleClickToEdit(column);
        ColumnsListener.onClickToFocus(column);

    }
    /*     
    static onClickToFocus(){

        super.onClickToFocus()

    }
    */
    static text = {

        onDoubleClickToEdit: function(column){

            column.text.onDoubleClick = function(){

                ColumnsController.text.edit(this)
                
            }
            
        },
    }

}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : columns_listener.js')
 /*******************************/