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
        <g pointer-events="all" id="nineRectsG">
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
// TODO: consider where put thsi code .
// TODO: consider how this code put and use.
// FIXME: reconsider how , and when focus event fired.

let fRect = new Class();
let focusG = document.getElementById("focusG");
let nineRectsG = document.getElementById("nineRectsG");
let focusRect = (umlObj)=>{
    return `
    <rect 
        style="position: absolute; top: ${umlObj.group.bounds.y}px; left: ${umlObj.group.bounds.x}px; width: ${umlObj.group.bounds.width}px; height: ${umlObj.group.bounds.height}px;"
        x="${umlObj.group.bounds.x}px" 
        y="${umlObj.group.bounds.y}px" 
        width="${umlObj.group.bounds.width}px" 
        height="${umlObj.group.bounds.width}px" 
        stroke="#B471EA" 
        fill="rgba(0,0,0,0)" 
        stroke-linejoin="round" 
        stroke-linecap="round" 
        stroke-width="5px" 
    ></rect>
    `
}
let nienResizeRects = (umlObj)=>{
    return `
    <g cursor="nwse-resize" class"topLeft">
        <image 
            x="${umlObj.group.bounds.topLeft.x - 10}" 
            y="${umlObj.group.bounds.topLeft.y - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    <g cursor="nesw-resize" class="topRight">
        <image 
            x="${umlObj.group.bounds.topRight.x - 10}" 
            y="${umlObj.group.bounds.topRight.y - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    <g cursor="nwse-resize" class="bottomRight">
        <image 
            x="${umlObj.group.bounds.bottomRight.x - 10}" 
            y="${umlObj.group.bounds.bottomRight.y - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    <g cursor="nesw-resize" class="bottomLeft">
        <image 
            x="${umlObj.group.bounds.bottomLeft.x - 10}" 
            y="${umlObj.group.bounds.bottomLeft.y - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>



    <g cursor="ns-resize" class="topMiddle">
        <image 
            x="${umlObj.group.bounds.center.x - 10}" 
            y="${umlObj.group.bounds.top - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    <g cursor="ns-resize" class="bottomMiddle">
        <image 
            x="${umlObj.group.bounds.center.x - 10}" 
            y="${umlObj.group.bounds.bottom - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    <g cursor="ew-resize" class="leftMiddle">
        <image 
            x="${umlObj.group.bounds.left - 10}" 
            y="${umlObj.group.bounds.center.y - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    <g cursor="ew-resize" class="rightMiddle">
        <image 
            x="${umlObj.group.bounds.right - 10}" 
            y="${umlObj.group.bounds.center.y - 10}" 
            width="20" 
            height="20" xlink:href="https://whimsical.com/s/images/handle-shadow@2x_705b643d74f0be5b2981996ea39a88a8.png" ></image>
    </g>
    `
}
fRect.group.onMouseDown = function(){
    focusG.innerHTML = ""
    nineRectsG.innerHTML = ""
}
fRect.group.onClick = function(){
    
    fRect.isFocused = !fRect.isFocused;
    if(fRect.isFocused){
        focusG.innerHTML = focusRect(fRect);
        nineRectsG.innerHTML = nienResizeRects(fRect);
    }
}



