import { UMLObjectsController } from "js/controllers/uml_objects_controller";

import { DividersListener } from "js/listeners/dividers_listener"
import { DividersView } from "js/views/dividers_view";
import { Divider } from "js/models/divider";

export class DividersController extends UMLObjectsController{

    static createInto(_class){

        let divider = new Divider();
        _class.contentsGroup.addChild(divider);
        DividersView.set(divider);
        divider.set();
        DividersListener.set(divider);

    }
}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : dividers_controller.js')
 /*******************************/