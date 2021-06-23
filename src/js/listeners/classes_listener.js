import { ColumnsController } from "js/controllers/columns_controller";
import { DividersController } from "js/controllers/dividers_controller";
import { FociController } from "js/controllers/foci_controller";
import { ClassesController } from "js/controllers/classes_controller";

export class ClassesListener {

    static setListeners(_class){
        
        ClassesListener.onMouseDragToDrag(_class)
        ClassesListener.onKeyDownToAddDivider_Column(_class)//read Fixme
        ClassesListener.onClickToFocus(_class)

    }
    static onMouseDragToDrag(_class){

        _class.onMouseDrag = function(e){

            this.position.x += e.delta.x;
            this.position.y += e.delta.y;
            
        }

    }
    static setShortCuts(_class){

        // FIXME: have to be controllable when focusing
        // FIXME: comment out because view.onKeyDown use When grab field, fix later.
        // TODO: if use addEventListener rathar than paper's listener, you should destroy the function every time because it's only fires from focused obj.
        // TODO: way1 ; cache function into Focus class when setting listenner and , use removeEventListener.
        // TODO: way2 ; create paper rect into Focus, like called focusRect, then focusRect.onKeydown = function(){}. done.
        config.canvas.addEventListener("keydown",this.shortCuts(_class));

    }
    static shortCuts(_class){
        if(Key.isDown('/')) DividersController.createInto(_class);
        if(Key.isDown('c')) ColumnsController.createInto(_class);
    }
    static onClickToFocus(_class){

        _class.onClick = function(){

            FociController.set(_class);
            ClassesController.edit(_class);

        }

    }

}