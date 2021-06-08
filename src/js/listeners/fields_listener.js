import { mouse, canvas } from 'js/main.js'
import { FieldsController } from 'js/controllers/fields_controller';
import { FieldsView } from 'js/views/fields_view';
import { Field } from 'js/models/field';


export class FieldsListener {

    static setListeners(){

        FieldsListener.onMouseDragToGrab();
        FieldsListener.onResizeToResize();
        FieldsListener.onWheelScrollToMove();
        FieldsListener.onWheelPinchiInToZoomOut();
        FieldsListener.onWheelPinchOutToZoomIn();

    }
    static onMouseDragToGrab(){

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
    static onResizeToResize(){
        // FIXME: the resolution of view become worse when resize.
        addEventListener('resize',function(){

           FieldsController.refresh()

        })
    }
    static onWheelScrollToMove(){

        addEventListener("wheel", function(event){

            event.preventDefault()
        
            if(Math.abs(event.wheelDelta) != 120){
        
                FieldsController.translate(-event.deltaX, -event.deltaY);
                
        
            }
        
        },{ passive: false})
    }
    static onWheelPinchOutToZoomIn(){

        addEventListener("wheel", function(event){

            event.preventDefault()
        
            if(Math.abs(event.wheelDelta) == 120 && Math.sign(event.wheelDelta) == 1){
                    
                view.zoom += 0.01;
                FieldsController.refreshZoomInput();
                FieldsController.refresh();

            }
        
        },{ passive: false});

    }
    static onWheelPinchiInToZoomOut(){

        addEventListener("wheel", function(event){

            event.preventDefault()
        
            if(Math.abs(event.wheelDelta) == 120 && Math.sign(event.wheelDelta) == -1){

                view.zoom = view.zoom > 0.02 ? view.zoom - 0.01 : 0.01 ;
                FieldsController.refreshZoomInput();
                FieldsController.refresh();
        
            }

        
        },{ passive: false});

    }
    static onClickZoomInBtnToZoomIn(){

        Field.zoomInBtn.addEventListener("click", function(){

            view.zoom += 0.1;
            FieldsController.refreshZoomInput(); 
            FieldsController.refresh();
        
        });

    }
    static onClickZoomOutBtnToZoomOut(){

        Field.zoom.addEventListener("click", function(){
    
            view.zoom = view.zoom > 0.2 ? view.zoom - 0.1 : 0.1 ;
            FieldsController.refreshZoomInput();
            FieldsController.refresh();
        
        });

    }
    
}