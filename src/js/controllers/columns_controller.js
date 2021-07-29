import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { ColumnsListener } from "js/listeners/columns_listener";
import { ColumnsView } from "js/views/columns_view";
import { Column } from "js/models/column";

export class ColumnsController extends UMLObjectsController {

    static createInto(_class){

        let column = new Column();
        _class.contentsGroup.addChild(column)
        ColumnsView.set(column);
        column.set();
        ColumnsListener.set(column)

    }
    static text = {

        edit: function(pointText){

            let editableTextDiv = document.getElementById('editableTextDiv');
            editableTextDiv.innerHTML += ColumnsView.editInputHTML(pointText);
    
            let input = document.getElementById('input')
            input.value = pointText.content
    
            pointText.visible = false
    
            // let text = pointText;
            input.addEventListener('keydown',function(e){
                if(e.key == "Enter"){
                    pointText.content = input.value;
                    pointText.visible = true;
                    editableTextDiv.innerHTML = ""
                }
            })
    
        }
    }
    
}







/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : columns_controller.js')
 /*******************************/