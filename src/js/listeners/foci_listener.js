import { FociController } from "js/controllers/foci_controller";
import { Focus } from "js/models/focus";



export class FociListener {

    static set(){

        FociListener.onMouseDownToUnfocus();
        FociListener.onMouseUpToFocus();

    }
    static onMouseDownToUnfocus(){
        
        view.onMouseDown = function(){

            FociController.unfocus()

        }
        
    }
    static onMouseUpToFocus(){

        Focus.umlObj.onMouseUp = function(){

            FociController.focus()

        }

    }
    static setShortcuts(shortCutsCallBack){

        paper.UI.onKeyDown = shortCutsCallBack

    }

}



/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : foci_listener.js')
 /*******************************/