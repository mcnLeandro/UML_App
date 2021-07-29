import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
// import { ClassesController } from 'js/controllers/classes_controller';
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
import { getMVCLFromUMLObject } from 'js/utils/index'

// console.log(getMVCLFromUMLObject(ArrowsController.create()))
// console.log(getMVCLFromUMLObject(ClassesController.create()))

import { ClassesController } from "js/controllers/classes_controller"
import { ClassesListener } from "js/listeners/classes_listener"
import { ClassesView } from "js/views/classes_view";
import { Class } from 'js/models/class';

const classesMVCL = {

    CONSTROLLER : ClassesController,
    LISTENER    : ClassesListener,
    VIEW        : ClassesView,
    MODEL       : Class,
    
}

console.log(classesMVCL)

