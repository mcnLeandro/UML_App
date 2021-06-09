import { FieldsController } from 'js/controllers/fields_controller';
import { Field } from 'js/models/field';
import { canvas } from "js/paper"


export class FieldsListener {

    static setListeners(){

        FieldsListener.onMouseDragToGrab();
        FieldsListener.onResizeToResize();
        FieldsListener.onWheelScrollToMove();
        FieldsListener.onWheelPinchiInToZoomOut();
        FieldsListener.onWheelPinchOutToZoomIn();
        FieldsListener.onClickZoomInBtnToZoomIn();
        FieldsListener.onClickZoomOutBtnToZoomOut();

    }
    static onMouseDragToGrab(){

        // FIXME: there's some issues.
        view.onMouseDrag = function(e){
            if(Key.isDown('space')){
        
                let x = e.point.x - paper.mouse._downPoint.x;
                let y = e.point.y - paper.mouse._downPoint.y;
        
                FieldsController.translate(x,y)
            }
        }
        
        view.onKeyDown = function(){
            if(Key.isDown('space')){
                canvas.style.cursor =  "grab";
            } 
            if(Key.isDown('space') && paper.mouse.isMouseDown){
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
                FieldsController.translate(-event.deltaX/view.zoom, -event.deltaY/view.zoom);
            }
        
        },{ passive: false})
    }
    static onWheelPinchOutToZoomIn(){

        addEventListener("wheel", function(event){

            event.preventDefault()
        
            if(Math.abs(event.wheelDelta) == 120 && Math.sign(event.wheelDelta) == 1){
                FieldsController.scale(1.06, paper.mouse.point);
            }
        
        },{ passive: false});

    }
    static onWheelPinchiInToZoomOut(){

        addEventListener("wheel", function(event){

            event.preventDefault()
        
            if(Math.abs(event.wheelDelta) == 120 && Math.sign(event.wheelDelta) == -1){
                FieldsController.scale((view.zoom > 0.02 ? 0.95 : 1), paper.mouse.point)
            }

        
        },{ passive: false});

    }
    static onClickZoomInBtnToZoomIn(){

        Field.zoomInBtn.addEventListener("click", function(){

            FieldsController.zoom(view.zoom + 0.1)
        
        });

    }
    static onClickZoomOutBtnToZoomOut(){

        Field.zoomOutBtn.addEventListener("click", function(){
    
            FieldsController.zoom(view.zoom > 0.2 ? view.zoom - 0.1 : 0.1)
        
        });

    }
    
}