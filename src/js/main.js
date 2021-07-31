import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
import { ClassesController } from 'js/controllers/classes_controller';
import { ArrowsController } from "js/controllers/arrows_controller"

window.config = {
    
    classBtn        : document.getElementById("class-btn"),
    arrowBtn        : document.getElementById("arrow-btn"),

    canvas          : document.getElementById("field"),

    editableText    : document.getElementById("editableTextDiv"),
    editMenu        : document.getElementById("edit-menu"),
    zoomInBtn       : document.getElementById("zoom-in-btn"),
    zoomOutBtn      : document.getElementById("zoom-out-btn"),
    zoomInput       : document.getElementById("zoom-input"),

    svgTranslate    : document.getElementById("svg-translate"),
    svgScale        : document.getElementById("svg-scale"),
    focusGroup      : document.getElementById("focus-group")

}

FieldsController.init();



config.classBtn.addEventListener('click',  ()=>ClassesController.create())

// TODO: i wanna let columns switchable like trello

// TODO: create edit menu for Class

config.arrowBtn.addEventListener("click", ()=>ArrowsController.create())


import { ColumnsController } from 'js/controllers/columns_controller'

let class1 = ClassesController.create()
let column1 = ColumnsController.createInto(class1)




/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : main.js')
 /*******************************/