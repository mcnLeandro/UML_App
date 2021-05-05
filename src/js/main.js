// import { from } from 'webpack-sources/lib/CompatSource';
import './../css/style.css'

// ===============================================
// global
// ===============================================


let canvas =  document.querySelector('#field')
let color = {
    field : '#eef2f6',
    classStroke : '#b9c6d1',
    gridStroke : '#c1cdd9'
}
let strokeWidth = {
    class : 1,

}

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
    color,
    strokeWidth
}

// ===============================================
// field
// ===============================================

import { Field } from './modules/field.js'



Field.set()
Field.init();
Field.grabbable();

