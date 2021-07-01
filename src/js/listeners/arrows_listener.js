import { UMLObjectsListener } from "js/listeners/uml_objects_listener";

import { ArrowsController } from "js/controllers/arrows_controller";

export class ArrowsListener extends UMLObjectsListener {

    static set(arrow){

        ArrowsListener.onMouseDragToMove(arrow);
        ArrowsListener.onMouseDragFirstCircleToUpdateFirstPoint(arrow);
        ArrowsListener.onMouseDragLastCircleToUpdateLastPoint(arrow);

    }
    static onMouseDragToMove(arrow){

        arrow.onMouseDrag = function(event){

            this.position.x += event.delta.x;
            this.position.y += event.delta.y;

            this.firstCircle.bounds.center = this.path.firstSegment.point;
            this.lastCircle.bounds.center = this.path.lastSegment.point;
            
        }

    }
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
}