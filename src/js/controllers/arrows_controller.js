import { UMLObjectsController } from "js/controllers/uml_objects_controller"
import { Arrow } from "js/models/arrow"

export class ArrowsController extends UMLObjectsController {

    static create(){
        return new Arrow()
    }
    static update(arrow){

    }
}