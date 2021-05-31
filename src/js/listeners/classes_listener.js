import { ColumnsController } from "js/controllers/columns_controller";

export class ClassesListener {

    static setListeners(_class){
        
        ClassesListener.onMouseDragToDrag(_class)
        ClassesListener.onKeyDownToAddDivider_Column(_class)////21

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
            if(Key.isDown('/'))_class.addDivider();
            else if (Key.isDown('c'))ColumnsController.createInto(_class);
        }

    }

}