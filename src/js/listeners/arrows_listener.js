import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { ArrowsController } from "js/controllers/arrows_controller";

export class ArrowsListener extends UMLObjectsListener {

    static set(arrow){

        ArrowsListener.onMouseDragToDrag(arrow);
        ArrowsListener.onMouseDragFirstCircleToUpdateFirstPoint(arrow);
        ArrowsListener.onMouseDragLastCircleToUpdateLastPoint(arrow);

    }

    /*********************************
    * @interface DraggableListener   *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static onMouseDragToDrag(arrow){

        
        arrow.onMouseDrag = function(event){

            this.position.x += event.delta.x;
            this.position.y += event.delta.y;

            this.firstCircle.bounds.center = this.path.firstSegment.point;
            this.lastCircle.bounds.center = this.path.lastSegment.point;
            
        }

    }
    /* End of DraggableListener      *
    **********************************/
   
    static onMouseDragFirstCircleToUpdateFirstPoint(arrow){

        arrow.firstCircle.onMouseDrag = function(){

            ArrowsController.updateFirstPoint(arrow);

        }

    }
    static onMouseDragLastCircleToUpdateLastPoint(arrow){

        arrow.lastCircle.onMouseDrag = function(){

            ArrowsController.updateLastPoint(arrow);
            
        }

    }
    /*     
    static onClickToFocus(umlObj){

        super.onClickToFocus(umlObj)

    }
    */
}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : arrows_listener.js')
 /*******************************/