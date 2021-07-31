import { FociController } from "js/controllers/foci_controller"

export class UMLObjectsListener {

    static set(){
        UMLObjectsListener.onClickToFocus()
    }
    static setShortCuts(){}
    static shortCuts(){}

    /**
     * CONSIDER: this marked as issue at #13
     */
    static onClickToFocus(umlObj){

        umlObj.onClick = function(){

            FociController.set(umlObj);

        }

    }
    
}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : uml_objects_listener.js')
 /*******************************/