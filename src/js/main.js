import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
import { ClassesController } from 'js/controllers/classes_controller';

window.config = {
    
    btn             : document.getElementById("btn"), // for create class testing.

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



config.btn.addEventListener('click',  ()=>ClassesController.create() )
// TODO: create UMLObject class that has dependencies and inheritenced Group of paper.js
// TODO: create ApplicationListener for setShortCutsMethod
// TODO: create edit menu for Class
// TODO: create arrow branch
// TODO: make sure that what is workspace.code-workspace
// TODO: i wanna let columns switchable like trello