import { ColumnsController } from "js/controllers/columns_controller"

export class ColumnsListener {

    static setListeners(column){

        this.text.onClickToEdit(column);

    }
    static text = {

        onClickToEdit: function(column){

            column.text.onClick = function(){

                ColumnsController.text.edit(this)
                
            }
            
        },
    }
}