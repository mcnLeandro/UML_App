import { mouse, canvas } from 'js/main.js'
import { FieldsController } from 'js/controllers/fields_controller';
import { FieldsView } from 'js/views/fields_view';
import { Field } from 'js/models/field';


export class FieldsListener {

    static setListeners(){

        FieldsListener.grabbable();
        FieldsListener.resizable();

    }
    static grabbable(){

        // FIXME: there's some issues.
        view.onMouseDrag = function(e){
            if(Key.isDown('space')){
        
                let x = e.point.x - mouse._downPoint.x;
                let y = e.point.y - mouse._downPoint.y;
        
                FieldsController.translate(x,y)
            }
        }
        
        view.onKeyDown = function(){
            if(Key.isDown('space')){
                canvas.style.cursor =  "grab";
            } 
            if(Key.isDown('space') && mouse.isMouseDown){
                canvas.style.cursor = 'grabbing'
            }
            mouse.onMouseUp = function(){
                if(Key.isDown('space')){
                    canvas.style.cursor = 'grab'
                }
            }
            view.onKeyUp = function(){
                canvas.style.cursor = 'default'
            }
        }
    }
    static resizable(){
        // FIXME: the resolution of view become worse when resize.
        addEventListener('resize',function(){

           FieldsController.refresh()

        })
    }
}