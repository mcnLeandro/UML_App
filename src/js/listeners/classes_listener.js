import { ColumnsController } from "js/controllers/columns_controller";
import { DividersController } from "js/controllers/dividers_controller";
import { FociController } from "js/controllers/foci_controller";

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
    static onKeyDownToAddDivider_Column(_class){

        //FIXME: have to be controllable when focusing
        view.onKeyDown = function(){
            if(Key.isDown('/')) DividersController.createInto(_class);
            else if (Key.isDown('c')) ColumnsController.createInto(_class);
        }

    }
    static onClickToFocus(_class){

        _class.onClick = function(){

            FociController.set(_class);

        }

    }

}