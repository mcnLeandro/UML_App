import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

export class FociController {

    static set(umlObj){

        Focus.umlObj = umlObj;
        FociListener.setListeners();

        // console.log("Set focus : " + Focus.umlObj)

        FociController.unfocus()
        FociController.focus()

    }
    static focus(){

        if(!Focus.umlObj.isFocused){//CONSIDER:isFocused is not default variabel.

            Focus.umlObj.isFocused = true;
            Focus.focusG.innerHTML = FociView.focusSvg();

        }

    }
    static unfocus(){

        if(Focus.umlObj.isFocused){

            Focus.umlObj.isFocused = false;
            Focus.focusG.innerHTML = ""

        }

    }
    

}