// import { from } from 'webpack-sources/lib/CompatSource';
import './../css/style.css'

// ===============================================
// global
// ===============================================

document.querySelector('body').innerHTML +=  `

<div style="top: 0px;  cursor: default; position: absolute;  left: 0px;">
    <button id="btn" class='btn btn-primary'> create new Class </button>
</div>

<div id="canvas-container" >

    <canvas id="field"></canvas>

    <div pointer-events="none"
        
        style="
            position: absolute; 
            top: 0px; 
            left: 0px;
            width: 100%; 
            height: 100%; 
            user-select: none; 
            cursor: default; 
        ">
        <svg 
             
            style="
                position: absolute; 
                top: 0px; 
                left: 0px; 
                width: 100%; 
                height: 100%;
            ">
            <g 
                
                class="translate" 
                style="transform: translate(0px, 0px);"
                >
                <g 
                    
                    class="scale" 
                    style="transform-origin: 0px 0px; transform: scale(1, 1);"
                    >
                    <g id="focusGfill" >
                        <rect 
                            x="100px" 
                            y="100px"
                            width="100px" 
                            height="100px" 
                            stroke="#B471EA" 
                            fill="black" 
                            stroke-linejoin="round" 
                            stroke-linecap="round" 
                            stroke-width="10px" 
                        ></rect>
                    </g>
                    <g pointer-events="none" id="focusG" >
                        <rect 
                            x="100px" 
                            y="100px"
                            width="100px" 
                            height="100px" 
                            stroke="#B471EA" 
                            fill="none" 
                            stroke-linejoin="round" 
                            stroke-linecap="round" 
                            stroke-width="10px" 
                        ></rect>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</div>
`
// TODO: move rect somehow. point-events:none should be work but it doesn't, so you have to test another place.


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
        stroke-width="10px" 
    ></rect>
    `
}
fRect.group.onClick = function(){
    fRect.isFocused = !fRect.isFocused;
    if(fRect.isFocused){
        focusG.innerHTML = focusRect(fRect);
    }
}




document.getElementById("focusGfill").addEventListener('click',function(){
    console.log('hey')
})