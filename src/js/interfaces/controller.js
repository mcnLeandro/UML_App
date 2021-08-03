

/**
 * 
 * Interaface tamplates(For controller's)
 * 
 * These classes that is made for interface tamplate are never extended by other classes.
 * Insted, I will copy and paste the methods, and write down about interface at top of class.
 * I choose this because this is the simplest way to manage as interface, and this not will be complecated.
 * 
 * I hope I can use interface in JavaScript someday.
 * 
*/ 

/****************************
 * Details
 ****************************/

class EditableController {
    /**
     * @name showEditMenu
     * @argument Void
     * @return Void
     * shows edit menu in window as html or SVG
     * */
    static showEditMenu(){}
}


class ShortcuttableController {
    /**
     * @name shortcuts
     * @argument UMLObject
     * @return Void
     *  Provides list of shortcuts actions.
     *  Aligned as "if" statment with key, and calls Controller's action
     */
    static shortcuts(umlObj){
        // examples...
        // if(Key.isDown('/')) DividersController.createInto(umlObj);
        // if(Key.isDown('enter')) ColumnsController.createInto(_class);
    }
}

class FocusableController {
    /**
     * @name focus
     * @argumnt Void
     * @return  Void
     * Call View's method that provides View to focus it's self. 
     * Or used by FociController to call umlObject's focus method.
     */
    static focus(){}
    /**
     * @name unfocus
     * @argument Void
     * @return   Void
     * Call View's method that provides View to unfocus it's self. 
     * Or used by FociController to call umlObject's unfocus method.
     */
    static unfocus(){}
}

/****************************************
 * Tamplates. you can copy and paste
 ***************************************/


/**
 * @implements ShortCuttable
 */
class ShortcuttableController {

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
/**
 * @implements Editable
 */
class EditableController {

    /**********************************
    * @interface EditableController   *
    * ******************************* *
    * @argument Void                  *
    * @return Void                    *
    *                                 */
    static showEditMenu(){}
    /* End of Editable                *
    ***********************************/
}

/**
 * @implements Focussable
 */
class FocusableController {

    /***********************************
    * @interface FocasableController   *
    * ******************************** *
    * @argumnt Void                    *
    * @return  Void                    *
    *                                  */
    static focus(){

        ClassesView.focus()

    }
    /**                                *
    * @argument Void                   *
    * @return   Void                   *
    *                                  */
    static unfocus(){

        ClassesView.unfocus()
        
    }
    /* End of Focasable                *
    ************************************/

}




/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : interface/index.js')
 /*******************************/