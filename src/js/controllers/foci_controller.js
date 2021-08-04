import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

import { ClassesController } from "js/controllers/classes_controller";



/**
 * @implement FocasableController
 */
export class FociController {

    static set(umlObj){

        Focus.umlObj = umlObj;
        FociListener.set();

        FociController.unfocus()
        FociController.focus()


        FociController.setShortCuts(umlObj);

    }
    /***********************************
    * @interface FocasableController   *
    * ******************************** *
    * @argumnt Void                    *
    * @return  Void                    *
    *                                  */
    static focus(){

        if(!Focus.umlObj.isFocused){
            import('js/utils/index.js').then(module => {
                
                const MVCL = module.getMVCLFromUMLObject(Focus.umlObj)
                
                Focus.umlObj.isFocused = true;
                MVCL.CONSTROLLER.focus()

            });
        }

    }
    /**                                *
    * @argument Void                   *
    * @return   Void                   *
    *                                  */
    static unfocus(){

        if(Focus.umlObj.isFocused){
            import('js/utils/index.js').then(module => {

                const MVCL = module.getMVCLFromUMLObject(Focus.umlObj)

                Focus.umlObj.isFocused = false;
                MVCL.CONSTROLLER.unfocus()
                document.activeElement.blur()
                
            });

        }

    }
    /* End of FocasableController      *
    ************************************/


    static setShortCuts(umlObj){

        let shortcuts = function(){};

        if(umlObj.constructor.name === "Class"){
            shortcuts = ClassesController.shortcuts
        }

        FociListener.resetShortcuts(() => shortcuts(umlObj))

    }

}


/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : foci_controller.js')
 /*******************************/