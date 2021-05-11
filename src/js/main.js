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
<div id="focusDiv">
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





// let rect = new Path.Rectangle([100,100],[200,50])
// let sec1 = new Path.Rectangle([rect.bounds.x, rect.bounds.y + rect.bounds.height],[200,50])
// let sec2 = new Path.Rectangle([sec1.bounds.x, sec1.bounds.y + sec1.bounds.height],[200,50])


// console.log(sec1)
// --------------------------------------
// group
// --------------------------------------

view.onClick = function(e){
    console.log(`x: ${e.point.x}, y: ${e.point.y}`)
}
let g = new Group()
g.style = {
    fillColor: '#000',
    strokeColor: '#f0f'
};

// --------------------------------------
// addSection code
// --------------------------------------
function addSection(){

    let l = g.children.length
    //segments[0] is point of left bottom of reectangle
    let x = l != 0 ? g.children[l -1].segments[0].point.x :100;
    let y = l != 0 ? g.children[l -1].segments[0].point.y :100;
    
    let newSec = new Path.Rectangle([x,y],[200,50])
    newSec.style = {
        fillColor: '#000',
        strokeColor: '#f0f'
    };

    g.addChild(newSec);

}

// view.onKeyDown = function(e){
//     if(Key.isDown('/')) addSection()
// }
// g.onMouseDrag = function(e){

//     this.position.x += e.delta.x;
//     this.position.y += e.delta.y;
// }


// --------------------------------------
// random size of rectangle  code (btn)
// --------------------------------------
let json;
let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let rec = new Class();
    rec.addDivider()
    rec.draggable()
})




// --------------------------------------
// editable text code
// --------------------------------------

// input(textarea) is HTML side and decleaed in 14 line in this file
// let pt = new PointText({
//     point: [100, 100],
//     content: "test",
//     fillColor: 'black',
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 25,
//     // selected: true
// })


function ptTextMode(){


    let inputHTML = (left,top, h, w, fontSize, fontFamily)=>{
        return `
        <input 
            id='input' 
            style="
                top: ${top}px; 
                left: ${left}px; 
                height:${h}px;
                width:${w}px;
                font-size:${fontSize}px;
                font-family:${fontFamily};
                cursor: default; 
                position: absolute; 
                outline: none; 
                white-space: pre-wrap; 
                overflow-wrap: break-word; 
            "
            role="textbox" 
            contenteditable="true" 
            autocorrect="off" 
            spellcheck="false" 
            aria-multiline="true"
        >
        </input>
        `
    }

    pt.onClick = function(){
        
        let focusDiv = document.getElementById('focusDiv');
        focusDiv.innerHTML += inputHTML(
            this.point.x, 
            this.point.y - this.fontSize, 
            this.bounds.height,
            this.bounds.width,
            this.fontSize,
            this.fontFamily
        );

        let input = document.getElementById('input')
        input.value = this.content

        this.visible = false

        let pt = this;
        input.addEventListener('keydown',function(e){
            if(e.key == "Enter"){
                pt.content = input.value;
                pt.visible = true;
                focusDiv.innerHTML = ""
            }
        })


    }


}

// ptTextMode();




