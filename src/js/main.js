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
// TODO: create arrow prototype when you are boring

// TODO: i wanna let columns switchable like trello

// TODO: i prefer to cahnge the name of mouse ti UI or Some thing includes meaning of keyboad , and mouse
// CONSIDER: mouse Events are already got in paper.js file, have to think onother way use tow toools.
// TODO: commit for now
// TODO: create edit menu for Class

// 
