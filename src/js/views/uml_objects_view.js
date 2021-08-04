import { FociView } from 'js/views/foci_view'

/**
 * @implements SettableView
 * @implements EditableView
 * @implements FocusableView
 */

export class UMLObjectsView extends FociView{

    /*****************************
    * @interface SettableView    *
    * ************************** *
    *                            *
    * @argument UMLObject        *
    * @returns Void              *
    *                            */
    static set(umlObj){}
    /**                          *
    * @argument UMLObject        *
    * @returns Void              *
    *                            */
    static setShape(umlObj){}
    /**                          *
    * @argument UMLObject        *
    * @returns Void              *
    *                            */
    static setStyle(umlObj){}
    /* End of SettableView       *
    ******************************/
    
    /****************************
    * @interface EditableView   *
    * ************************* *
    *                           *
    * @argument UMLObject       *
    * @return Void              *
    *                           */
    static showEditMenu(){}
    /* End of EditableView      *
    *****************************/


    /*****************************
    * @interface FocusableView   *
    * ************************** *
    *                            *
    * @argumnt Void              *
    * @return  Void              *
    *                            */
    static focus(){

        super.boundFocus()

    }
    /**                          *
    * @argument Void             *
    * @return   Void             *
    *                            */
    /*
    static unfocus(){

        super.unfocus()
        
    }
    */
    /* End of FocusableView      *
    ******************************/

}










/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : uml_objects_view.js')
 /*******************************/