

/**
 * 
 * Interaface tamplates(For view's)
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
class SettableView {

    /**
     * @name set
     * @argument UMLObject
     * @returns Void
     * @details Calls all SettableView interface methods.
     */
    static set(umlObj){}
    /**
     * @name setShape
     * @argument UMLObject
     * @returns Void
     * @details Set shape of UMLObject that is argument.
     */
    static setShape(umlObj){}
    /**
     * @name setStyle
     * @argument UMLObject
     * @returns Void
     * @details Set style of UMLObject that is argument.
     */
    static setStyle(umlObj){}

}
class EditableView {

    /**
     * @name showEditMenu
     * @argument UMLObject
     * @returns Void
     * @details Set HTML or SVG in specifyed place that is DOMElement
     */
    static showEditMenu(){}

}
class FocusableView {

    /**
     * @name focus
     * @argument Void
     * @returns Void
     * @details Set HTML or SVG in specifyed place that is DOMElement
     */
    static focus()
    /**
     * @name unocus
     * @argument Void
     * @returns Void
     * @details Set HTML or SVG in specifyed place that is DOMElement
     */
    static unfocus(){}

}

/****************************************
 * Tamplates. you can copy and paste
 ***************************************/

class SettableView {

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

}
class EditableView {

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

}
class FocusableView {

    /*****************************
    * @interface FocusableView   *
    * ************************** *
    *                            *
    * @argumnt Void              *
    * @return  Void              *
    *                            */
    static focus(){}
    /**                          *
    * @argument Void             *
    * @return   Void             *
    *                            */
    static unfocus(){}
    /* End of FocusableView      *
    ******************************/

}




/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : interface/view.js')
 /*******************************/