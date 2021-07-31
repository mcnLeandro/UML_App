import { UMLObjectsView } from "js/views/uml_objects_view"
/**
 * @implements Editable
 * @implements Focussable
 * @implements Shortcuttable
 */

export class UMLObjectsController{

    static create(){}
    static createInto(){}
    static shortCuts(){}
    static edit(){}



    /************************
    * @interface Editable   *
    * ********************* *
    * @argument Void        *
    * @return Void          *
    *                       */
    static showEditMenu(){

    }
    /* End of Editable      *
    *************************/


    /*************************
    * @interface Focasable   *
    * ********************** *
    * @argumnt Void          *
    * @return  Void          *
    *                        */
    static focus(){

        UMLObjectsView.focus()

    }
    /**                      *
    * @argument Void         *
    * @return   Void         *
    *                        */
    static unfocus(){

        UMLObjectsView.unfocus()
        
    }
    /* End of Focasable      *
    **************************/


    /****************************
    * @interface Shortcuttable  *
    * ************************  *
    * @argument UMLObject       *
    * @return Void              *
    *                           */
    static shortcuts(umlObj){
        // examples...
        // if(Key.isDown('/')) DividersController.createInto(umlObj);
        // if(Key.isDown('enter')) ColumnsController.createInto(_class);
    }
    /* End of Shortcuttable     *
    *****************************/

}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : uml_objects_controller.js')
 /*******************************/