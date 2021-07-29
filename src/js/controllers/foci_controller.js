import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

import { ClassesController } from "js/controllers/classes_controller";



/**
 * @implement Focasable Interface
 */
export class FociController {

    static set(umlObj){

        Focus.umlObj = umlObj;
        FociListener.set();

        FociController.unfocus()
        FociController.focus()


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
            import('js/utils/index.js').then(module => {
                
                const MVCL = module.getMVCLFromUMLObject(Focus.umlObj)
                Focus.umlObj.isFocused = true;
                MVCL.CONSTROLLER.focus()

            });
        }

    }
    /**
     * @argument Void
     * @return   Void
     */
    static unfocus(){

        if(Focus.umlObj.isFocused){
            import('js/utils/index.js').then(module => {

                const MVCL = module.getMVCLFromUmlObject(Focus.umlObj)
                Focus.umlObj.isFocused = false;
                MVCL.CONSTROLLER.unfocus()

            });

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


/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : foci_controller.js')
 /*******************************/