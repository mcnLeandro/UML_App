/**
 * 
 * Interaface tamplates(For listener's)
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
class SettableListener {

    /**
     * @name set
     * @argument UMLObject
     * @returns Void
     * @details Calls all method's in Listener to set EventListeners
     */
    static set(umlObj){}

}
class DraggableListener {

    /**
     * @name onMouseDragToDrag
     * @argument UMLObject
     * @returns Void
     * @details set EventListener to drag UMLObject
     */
    static onMouseDragToDrag(umlObj){}

}
class FocusableListener {

    /**
     * @name onClickToFocus
     * @argument UMLObject
     * @returns Void
     * @details set EventListener to focus UMLObject
     */
    static onClickToFocus(umlObj){}

}


/****************************************
 * Tamplates. you can copy and paste
 ***************************************/

 class SettableListener {

    /*********************************
    * @interface SettableListener    *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static set(umlObj){}
    /* End of SettableListener       *
    **********************************/

}
class DraggableListener {

    /*********************************
    * @interface DraggableListener   *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static onMouseDragToDrag(umlObj){}
    /* End of DraggableListener      *
    **********************************/

}
class FocusableListener {

    /*********************************
    * @interface FocusableListener   *
    * ****************************** *
    *                                *
    * @argument UMLObject            *
    * @returns Void                  *
    *                                */
    static onClickToFocus(umlObj){}
    /* End of FocusableListener      *
    **********************************/
}




/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : interface/listener.js')
 /*******************************/