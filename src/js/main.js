import './../css/style.css'

// ===============================================
// global
// ===============================================

document.querySelector('body').innerHTML +=  `

<div style="top: 0px;  cursor: default; position: absolute;  left: 0px;">
    <button id="btn" class='btn btn-primary'> create new Class </button>
</div>


    <canvas id="field"></canvas>

    <svg pointer-events="none"
            
        style="
            position: absolute; 
            top: 0px; 
            left: 0px; 
            width: 100%; 
            height: 100%;
        ">
        
        <g pointer-events="none" id="focusG" >
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

// --------------------------------------
// focus
// --------------------------------------
// TODO: add rect that can resize object in feature
// TODO: consider where put thsi code .
// TODO: consider how this code put and use.


let fRect = new Class();
let focusG = document.getElementById("focusG");
let focusRect = (paperObj)=>{
    return `
    <rect 
        style="position: absolute; top: ${paperObj.group.bounds.y}px; left: ${paperObj.group.bounds.x}px; width: ${paperObj.group.bounds.width}px; height: ${paperObj.group.bounds.height}px;"
        x="${paperObj.group.bounds.x}px" 
        y="${paperObj.group.bounds.y}px" 
        width="${paperObj.group.bounds.width}px" 
        height="${paperObj.group.bounds.width}px" 
        stroke="#B471EA" 
        fill="rgba(0,0,0,0)" 
        stroke-linejoin="round" 
        stroke-linecap="round" 
        stroke-width="5px" 
    ></rect>
    `
}
fRect.group.onMouseDown = function(){
    focusG.innerHTML = ""
}
fRect.group.onClick = function(){
    
    fRect.isFocused = !fRect.isFocused;
    if(fRect.isFocused){
        focusG.innerHTML = focusRect(fRect);
    }
}



