import * as paper from 'paper'
import './../css/main.scss'
import resizeRect from './../images/resize-rect.svg'
import resizeTest1 from './../images/test1.png'

// Wait for canvas to be created

// ===============================================
// global
// ===============================================

document.querySelector('body').innerHTML +=  `

<div style="top: 0px;  cursor: default; position: absolute;  left: 0px;">
    <button id="btn" class='btn btn-primary'> create new Class </button>
</div>


    <canvas id="field"></canvas>

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        pointer-events="none"    
        style="
            position: absolute; 
            top: 0px; 
            left: 0px; 
            width: 100%; 
            height: 100%;
        ">
        
        <g id="focusG" pointer-events="none" >
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
paper.setup(document.getElementById('field'));



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
}

// ===============================================
// field
// ===============================================

import { Field } from './modules/field.js'

// view.translate([-9981,3372])


Field.set()
Field.init();
Field.grabbable();

// ===============================================
// Class
// ===============================================

import { 
    Class,
    Column,
    Divider
} from './modules/class.js'



// --------------------------------------
// btn that create a class
// --------------------------------------

let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let rec = new Class();
    view.onKeyDown = function(){
        if(Key.isDown('/'))rec.addDivider();
        else if (Key.isDown('c'))rec.addColumn();
    }
})
