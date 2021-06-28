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
    static resetShortCuts(shortCutsCallBack){

        paper.UI.onKeyDown = shortCutsCallBack

    }

}