import { ColumnsListener } from "../listeners/columns_listener";
import { ColumnsView } from "js/views/columns_view";
import { Column } from "js/models/column";

export class ColumnsController {

    static createInto(_class){

        let column = new Column();
        _class.contentsGroup.addChild(column)
        ColumnsView.set(column);
        column.set();
        ColumnsListener.setListeners(column)

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