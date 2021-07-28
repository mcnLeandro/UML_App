import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

import { ClassesController } from "js/controllers/classes_controller";

export class FociController {

    static set(umlObj){

        Focus.umlObj = umlObj;
        FociListener.set();

        FociController.unfocus()
        FociController.focus()


        FociController.setShortCuts(umlObj);

    }
    static focus(){

        if(!Focus.umlObj.isFocused){

            Focus.umlObj.isFocused = true;
            Focus.focusG.innerHTML = FociView.boundFocus();
            document.activeElement.blur()

        }

    }
    static unfocus(){

        if(Focus.umlObj.isFocused){

            Focus.umlObj.isFocused = false;
            Focus.focusG.innerHTML = ""

        }

    }
    static setShortCuts(umlObj){

        let shortCuts = function(){};

        if(umlObj.constructor.name === "Class"){
            shortCuts = ClassesController.shortCuts
        }

        FociListener.resetShortCuts(() => shortCuts(umlObj))

    }

}