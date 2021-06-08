import * as paper from 'paper'
import 'css/main.scss'

// TODO: create config
// ===============================================
// global setup
// ===============================================

// FIXME: when implement field's scale, and translate, pointer-events not works again,
// FIXME: so go to the field branch, 
// FIXME: implement those things,
// FIXME: come back
// FIXME: then fix pointer-events if it doesn't working.

let canvas =  document.querySelector('#field')


// window.pointerEvents = "none";


//  paper setup
paper.install(window);
paper.setup(canvas);



// mouse
let mouse = new Tool()
mouse.isMouseDown = false;

view.onMouseDown = function(){
    mouse.isMouseDown = true;
}
view.onMouseUp = function(){
    mouse.isMouseDown = false;
}

// ===============================================
// export
// ===============================================

export{
    mouse,
    canvas,
    paper
}

// ===============================================
// field
// ===============================================

import { Field } from "js/models/field"
import { FieldsController } from "js/controllers/fields_controller"
FieldsController.init();

// ===============================================
// Class
// ===============================================

import { ClassesController } from './controllers/classes_controller';

let btn = document.getElementById('btn');
btn.addEventListener('click',  ()=>ClassesController.create() )



// Field
// TODO: the zoom place is always center so fix to mouse point