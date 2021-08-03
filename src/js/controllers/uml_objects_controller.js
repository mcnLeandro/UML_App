import { UMLObjectsView } from "js/views/uml_objects_view"

/**
 * @implements EditableController
 * @implements FocussableController
 * @implements ShortcuttableController
 */

export class UMLObjectsController{

    static create(){}
    static createInto(){}

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