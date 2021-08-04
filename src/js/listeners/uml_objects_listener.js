import { FociController } from "js/controllers/foci_controller"

/**
 * @implements SettableListener
 * @implements FocusableListener
 */

export class UMLObjectsListener {

    /*********************************
    * @interface SettableListener    *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static set(){

        UMLObjectsListener.onClickToFocus()

    }
    /* End of SettableListener       *
    **********************************/
    
    /*********************************
    * @interface FocusableListener   *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static onClickToFocus(umlObj){

        umlObj.onClick = function(){

            FociController.set(umlObj);

        }

    }
    /* End of FocusableListener      *
    **********************************/
    
}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : uml_objects_listener.js')
 /*******************************/