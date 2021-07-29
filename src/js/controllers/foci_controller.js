import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

import { ClassesController } from "js/controllers/classes_controller";

import { getMVCLFromUMLObject } from "../utils";

/**
 * @implement Focasable
 */
export class FociController {

    static set(umlObj){

        Focus.umlObj = umlObj;
        FociListener.set();

        // FociController.unfocus()
        // FociController.focus()


        FociController.setShortCuts(umlObj);

    }
    /*************************
     * @interface Focasable
     * ***********************
     * @argumnt Void
     * @return  Void
     */
    static focus(){

        if(!Focus.umlObj.isFocused){
            const MVCL = getMVCLFromUMLObject(Focus.umlObj)
            console.log(MVCL)
            Focus.umlObj.isFocused = true;
            MVCL.CONSTROLLER.focus()
            document.activeElement.blur()

        }

    }
    /**
     * @argument Void
     * @return   Void
     */
    static unfocus(){

        if(Focus.umlObj.isFocused){
            const MVCL = getMVCLFromUMLObject(Focus.umlObj)

            Focus.umlObj.isFocused = false;
            MVCL.CONSTROLLER.unfocus()

        }

    }
    /*************************
     */


    static setShortCuts(umlObj){

        let shortCuts = function(){};

        if(umlObj.constructor.name === "Class"){
            shortCuts = ClassesController.shortCuts
        }

        FociListener.resetShortCuts(() => shortCuts(umlObj))

    }

}