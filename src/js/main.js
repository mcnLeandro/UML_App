import './../css/main.scss'
import resizeRect from './../images/resize-rect.svg'
import resizeTest1 from './../images/test1.png'
// const resizeTest1 = require('./../images/test1.png')
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
        
        <g id="focusG" >
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

class Focus {
    static focusG =document.getElementById("focusG");
    static focusingObj = null;
    static getFocusRect(umlObj){
        return `
        <g pointer-events="none">
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
        </g>
        <g  id='imgTest'
            pointer-events="all">


            <g cursor="nwse-resize" class"topLeft">
                <img 
                    x="${umlObj.group.bounds.topLeft.x - 10}" 
                    y="${umlObj.group.bounds.topLeft.y - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
            <g cursor="nesw-resize" class="topRight">
                <img 
                    x="${umlObj.group.bounds.topRight.x - 10}" 
                    y="${umlObj.group.bounds.topRight.y - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
            <g cursor="nwse-resize" class="bottomRight">
                <img 
                    x="${umlObj.group.bounds.bottomRight.x - 10}" 
                    y="${umlObj.group.bounds.bottomRight.y - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
            <g cursor="nesw-resize" class="bottomLeft">
                <img 
                    x="${umlObj.group.bounds.bottomLeft.x - 10}" 
                    y="${umlObj.group.bounds.bottomLeft.y - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
    
    
    
            <g cursor="ns-resize" class="topMiddle">
                <img 
                    x="${umlObj.group.bounds.center.x - 10}" 
                    y="${umlObj.group.bounds.top - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
            <g cursor="ns-resize" class="bottomMiddle">
                <img 
                    x="${umlObj.group.bounds.center.x - 10}" 
                    y="${umlObj.group.bounds.bottom - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
            <g cursor="ew-resize" class="leftMiddle">
                <img 
                    x="${umlObj.group.bounds.left - 10}" 
                    y="${umlObj.group.bounds.center.y - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>
            <g cursor="ew-resize" class="rightMiddle">
                <img 
                    x="${umlObj.group.bounds.right - 10}" 
                    y="${umlObj.group.bounds.center.y - 10}" 
                    width="20" 
                    height="20" src="${resizeTest1}" ></img>
            </g>

        </g>
        `
    }
    static to(umlObj){

        Focus.focusingObj = umlObj;

        view.onMouseDown = function(){
            if(umlObj.isFocused){
                umlObj.isFocused = false;
                focusG.innerHTML = ""
            }
        }
        umlObj.group.onMouseUp = function(){
            if(!umlObj.isFocused){
                umlObj.isFocused = true;
                focusG.innerHTML = Focus.getFocusRect(umlObj);
                document.querySelectorAll('#imgTest g img').forEach(e => e.src = resizeTest1)
            }
        
        }
    }
}

Focus.to(fRect)

console.log(resizeRect)
console.log(resizeTest1)