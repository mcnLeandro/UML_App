import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { ArrowsListener } from "js/listeners/arrows_listener";
import { ArrowsView } from "js/views/arrows_view";
import { Arrow } from "js/models/arrow"

export class ArrowsController extends UMLObjectsController {

    static create(){

        let arrow = new Arrow();

        ArrowsView.set(arrow);
        ArrowsListener.set(arrow);
        arrow.set()

        return arrow;
        
    }
    static updateFirstPoint(arrow){

        arrow.path.firstSegment.point = paper.UI.mousePoint;
        arrow.firstCircle.bounds.center = paper.UI.mousePoint;

    }
    static updateLastPoint(arrow){

        arrow.path.lastSegment.point = paper.UI.mousePoint;
        arrow.lastCircle.bounds.center = paper.UI.mousePoint;

    }
}








/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : arrows_controller.js')
 /*******************************/