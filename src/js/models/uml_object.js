export class UMLObject extends Group {

    constructor(){
        
        super()

        this.isFocused = false;

    }
    /****************************
    * @interface SettableModel  *
    * ************************* *
    * @argument Void            *
    * @returns Void             *
    *                           */
    set(){}
    /**                         *
    * @argument Void            *
    * @returns Void             *
    *                           */
    setNestStructure(){}
    /* End of SettableModel     *
    *****************************/

}


/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : uml_object.js')
 /*******************************/