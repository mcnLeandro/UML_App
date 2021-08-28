import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { ColumnsListener } from "js/listeners/columns_listener";
import { ColumnsView } from "js/views/columns_view";
import { Column } from "js/models/column";

export class ColumnsController extends UMLObjectsController {

    /* 
    static create(){

        return super.create()
        
    }
    */
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
    static expandRight(column, x){

        // if(column.outerRect.bounds.width <= 200 && additionalWidth <= 0) additionalWidth = 0;

        ColumnsView.setShape(column, new Rectangle(
            column.outerRect.bounds.topLeft,
            new Point(x, column.outerRect.bounds.height)
        ))

    }
    static expandLeft(column, additionalWidth){

        ColumnsView.setShape(column, new Rectangle(
            [column.bounds.left - additionalWidth, column.bounds.top],
            [column.bounds.width + additionalWidth, column.bounds.height]
        ))

    }

}







/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : columns_controller.js')
 /*******************************/