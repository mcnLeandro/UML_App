import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

export class FociController {

    static setObj(umlObj){

        Focus.obj = umlObj;

    }

    static to(umlObj){

        FociController.setObj(umlObj);
        
        // CONSIDER: how, and when focus event fired.
        // FIXME: these code are should be in listener file
        view.onMouseDown = function(){
            if(umlObj.isFocused){
                umlObj.isFocused = false;
                focusG.innerHTML = ""
            }
        }
        umlObj.onMouseUp = function(){
            if(!umlObj.isFocused){
                umlObj.isFocused = true;
                focusG.innerHTML = FociView.focusSvg(umlObj);
            }

        }
    }

}