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

class SettableModel {
    /**
     * @name set
     * @argument Void
     * @returns Void
     * @details Calls rest of settableModel methods to model's setting.
     */
    set(){}
    /**
     * @name initNestStructure
     * @argument Void
     * @returns Void
     * @details set structure of model's group
     */
    setNestStructure(){}
}


/****************************************
 * Tamplates. you can copy and paste
 ***************************************/

class SettableModel {
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