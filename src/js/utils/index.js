// import { FieldsController } from "js/controllers/fields_controller";
// import { FieldsListener } from "js/listeners/fields_listener";
// import { FieldsView } from "js/views/fields_view";
// import { Field } from "js/models/field";

// import { FociController } from "js/controllers/foci_controller";
// import { FociListener } from "js/listeners/foci_listener";
// import { FociView } from "js/views/foci_view";
// import { Focus } from "js/models/focus";
import { ClassesController } from "js/controllers/classes_controller"
import { ClassesListener } from "js/listeners/classes_listener"
import { ClassesView } from "js/views/classes_view";
import { Class } from 'js/models/class';

import { ColumnsController } from "js/controllers/columns_controller";
import { ColumnsListener } from 'js/listeners/columns_listener';
import { ColumnsView } from "js/views/columns_view";
import { Column } from 'js/models/column';

import { DividersController } from "js/controllers/dividers_controller";
import { DividersListener } from "js/listeners/dividers_listener";
import { DividersView } from "js/views/dividers_view";
import { Divider } from "js/models/divider";

import { ArrowsController } from "js/controllers/arrows_controller";
import { ArrowsListener } from "js/listeners/arrows_listener";
import { ArrowsView } from "js/views/arrows_view";
import { Arrow } from "js/models/arrow"



const classesMVCL = {

    CONSTROLLER : ClassesController,
    LISTENER    : ClassesListener,
    VIEW        : ClassesView,
    MODEL       : Class,
    
}
const columnsMVCL = {

    CONSTROLLER : ColumnsController,
    LISTENER    : ColumnsListener,
    VIEW        : ColumnsView,
    MODEL       : Column,
    
}
const dividersMVCL = {

    CONSTROLLER : DividersController,
    LISTENER    : DividersListener,
    VIEW        : DividersView,
    MODEL       : Divider,
    
}
const arrowsMVCL = {

    CONSTROLLER : ArrowsController,
    LISTENER    : ArrowsListener,
    VIEW        : ArrowsView,
    MODEL       : Arrow,
    
}

// const fieldsMVCL = {

//     CONTROLLER : FieldsController,
//     LISTENER   : FieldsListener,
//     VIEW       : FieldsView,
//     MODEL      : Field,

// }
// const fociMVCL = {

//     CONSTROLLER : FociController,
//     LISTENER    : FociListener,
//     VIEW        : FociView,
//     MODEL       : Focus,
    
// }


/**
 * @augment model 
 * @return HashMap of MVCL
 * @description Get Model,View,Controller,Listener classes from UMLObject instance
 */
export function getMVCLFromUMLObject(umlObj){
    switch (umlObj.constructor.name) {

        case "Class": return classesMVCL; break;
        case "Column": return columnsMVCL; break;
        case "Divider": return dividersMVCL;break;
        case "Arrow": return arrowsMVCL;break;
        default: break;
    }

    throw "There was no Set";
}

