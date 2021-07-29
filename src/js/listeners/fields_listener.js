import { FieldsController } from 'js/controllers/fields_controller';
import { Field } from 'js/models/field';


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

        view.onMouseDrag = function(e){//FIXME: e -> event
            if(Key.isDown('space')){
        
                let x = e.point.x - paper.UI._downPoint.x;
                let y = e.point.y - paper.UI._downPoint.y;
        
                FieldsController.translate(x,y)

            }
        }
        
        view.onKeyDown = function(){
            if(Key.isDown('space')){
                FieldsController.changeCursorStyle("grab");
            } 
            if(Key.isDown('space') && paper.UI.isMouseDown){
                FieldsController.changeCursorStyle("grabbing");
            }
            view.onKeyUp = function(){
                FieldsController.changeCursorStyle("default");
            }
        }

    }
    static onResizeToResize(){

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
                FieldsController.scale(1.06, paper.UI.mousePoint);
            }
        
        },{ passive: false});

    }
    static onWheelPinchiInToZoomOut(){

        addEventListener("wheel", function(event){

            event.preventDefault()
        
            if(Math.abs(event.wheelDelta) == 120 && Math.sign(event.wheelDelta) == -1){
                FieldsController.scale((view.zoom > 0.02 ? 0.95 : 1), paper.UI.mousePoint)
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








/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : fields_listener.js')
 /*******************************/