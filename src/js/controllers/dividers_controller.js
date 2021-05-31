import { DividersListener } from "js/listeners/dividers_listener"
import { DividersView } from "js/views/dividers_view";
import { Divider } from "js/models/divider";

export class DividersController {

    static createInto(_class){

        let divider = new Divider();
        _class.contentsGroup.addChild(divider)
        DividersView.set(divider);
        divider.set();
        DividersListener.setListeners(divider)

    }
}