import * as paper from 'paper'
import 'css/main.scss'

// TODO: create config
// ===============================================
// global setup
// ===============================================

document.querySelector('body').innerHTML +=  `

    <div style="top: 0px; left: 0px; cursor: default; position: absolute;">
        <button id="btn" class='btn btn-primary'> create new Class </button>
    </div>
    <div class="d-flex"style="top: 0px; left: 200px; cursor: default; position: absolute;">

        <button id="plus-btn" class='btn btn-primary'> + </button>

        <input id="scale-input" type="text" class="form-control" style="width:80px;" disabled=true/>

        <button id="minus-btn" class='btn btn-primary'> - </button>

    </div>

    <div id="editableTextDiv">
    </div>

    <canvas id="field" resize="true"></canvas>

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        pointer-events="none"    
        style="
            position: absolute;
            top: 0px; 
            left: 0px; 
            width: 100%; 
            height: 100%;
        ">
        
        <g id="focus-group" pointer-events="none" >
        </g>
    </svg>
`
// FIXME: when implement field's scale, and translate, pointer-events not works again,
// FIXME: so go to the field branch, 
// FIXME: implement those things,
// FIXME: come back
// FIXME: then fix pointer-events if it doesn't working.

let canvas =  document.querySelector('#field')


canvas.width = innerWidth;
canvas.height = innerHeight;



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


import { FieldsController } from "js/controllers/fields_controller"
FieldsController.init();


// ===============================================
// Class
// ===============================================

import { ClassesController } from './controllers/classes_controller';

let btn = document.getElementById('btn');
btn.addEventListener('click',  ()=>ClassesController.create() )


// ===============================================
// Field's scale
// ===============================================

const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const scaleInput = document.getElementById("scale-input");
scaleInput.value = Math.round(view.zoom * 100) + "%"; 

plusBtn.addEventListener("click", function(){
    view.zoom += 0.1;
    scaleInput.value = Math.round(view.zoom * 100) + "%"; 
});

minusBtn.addEventListener("click", function(){
    view.zoom -= 0.1;
    scaleInput.value = Math.round(view.zoom * 100) + "%";
});


