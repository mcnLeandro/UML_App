import { UMLObjectsView } from "js/views/uml_objects_view"
import { UMLObject } from "js/models/uml_object"
/**
 * @implements 
 * @implements EditableController
 * @implements FocussableController
 * @implements ShortcuttableController
 */

export class UMLObjectsController{

    /*********************************
    * @interface CreatableController *
    * ****************************** *
    * @argument Void                 *
    * @returns UMLObject             *
    *                                */
    static create(){
        return new UMLObject()
    }
    /**                              *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static createInto(){}
    /* End of CreatableController    *
    **********************************/

    /**********************************
    * @interface EditableController   *
    * ******************************* *
    * @argument Void                  *
    * @return Void                    *
    *                                 */
    static showEditMenu(){}
    /* End of Editable                *
    ***********************************/


    /***********************************
    * @interface FocasableController   *
    * ******************************** *
    * @argumnt Void                    *
    * @return  Void                    *
    *                                  */
    static focus(){

        UMLObjectsView.focus()

    }
    /**                                *
    * @argument Void                   *
    * @return   Void                   *
    *                                  */
    static unfocus(){

        UMLObjectsView.unfocus()
        
    }
    /* End of Focasable                *
    ************************************/


    /**************************************
    * @interface ShortcuttableController  *
    * *********************************** *
    * @argument UMLObject                 *
    * @return Void                        *
    *                                     */
     static shortcuts(umlObj){
        // examples...
        // if(Key.isDown('/')) DividersController.createInto(umlObj);
        // if(Key.isDown('enter')) ColumnsController.createInto(_class);
    }
    /* End of Shortcuttable               *
    ***************************************/

    

}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : uml_objects_controller.js')
 /*******************************/