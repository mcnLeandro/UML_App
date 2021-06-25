import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { ColumnsController } from "js/controllers/columns_controller"
import { FociController } from "js/controllers/foci_controller"

export class ColumnsListener extends UMLObjectsListener{

    static set(column){

        ColumnsListener.text.onClickToEdit(column);
        // ColumnsListener.onClickToFocus(column); // FIXME: this doesn't work yet

    }
    static text = {

        onClickToEdit: function(column){

            column.text.onClick = function(){

                ColumnsController.text.edit(this)
                
            }
            
        },
    }
    // static onClickToFocus(column){

    //     column.onClick = function(){

    //         FociController.set(column);

    //     }

    // }
}