// import { from } from 'webpack-sources/lib/CompatSource';
import './../css/style.css'

// ===============================================
// global
// ===============================================

let body = document.querySelector('body');
body.innerHTML +=  `
<div style="top: 0px;  cursor: default; position: absolute;  left: 0px;">
    <button id="btn" class='btn btn-primary'> create new Class </button>
</div>
<div style="top: 0px; user-select: none; width: 100%; cursor: default; position: absolute; height: 100%; left: 0px;">
    <svg data-canvasoverlay="true" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;">
        <g class="translate" style="transform: translate(0px, 0px);">
            <g class="scale" style="transform-origin: 0px 0px; transform: scale(0.220459, 0.220459);">
                <g id="focusG" opacity="1" style="transition: opacity 0.2s ease 0s;">
                    
                </g>
            </g>
        </g>
    </svg>
</div>

`



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
// TODO: 
let fRect = new Class();
let focusG = document.getElementById("focusG");
let focusRect = (paperObj)=>{
    return `
    <rect 
        x="${paperObj.group.bounds.x}" 
        y="${paperObj.group.bounds.y}" 
        width="${paperObj.group.bounds.width}" 
        height="${paperObj.group.bounds.height}" 
        stroke="#B471EA" 
        fill="none" 
        stroke-linejoin="round" 
        stroke-linecap="round" 
        stroke-width="9.072" 
        style="--darkreader-inline-fill:none; --darkreader-inline-stroke:#a86bda;"
    ></rect>
    `
}
fRect.group.onClick = function(){
    fRect.isFocused = !fRect.isFocused;
    if(fRect.isFocused){
        focusG.innerHTML = focusRect(fRect);
    }
}




