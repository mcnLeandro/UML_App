// import { from } from 'webpack-sources/lib/CompatSource';
import './../css/style.css'

// ===============================================
// global
// ===============================================

let body = document.querySelector('body');
let btnHTML = `
<div style="top: 0px;  cursor: default; position: absolute;  left: 0px;">
    <button id="btn" class='btn btn-primary'> create new Class </button>
</div>
`
body.innerHTML += btnHTML


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

import { Class } from './modules/class.js'



// let rect = new Path.Rectangle([100,100],[200,50])
// let sec1 = new Path.Rectangle([rect.bounds.x, rect.bounds.y + rect.bounds.height],[200,50])
// let sec2 = new Path.Rectangle([sec1.bounds.x, sec1.bounds.y + sec1.bounds.height],[200,50])


// console.log(sec1)

let g = new Group()
g.style = {
    fillColor: '#000',
    strokeColor: '#f0f'
};

function addSection(){
    let l = g.children.length
    let lastBounds = l != 0 ? g.children[l -1].bounds : {x:100, y:100, width:200, height:50} ;
    let x = lastBounds.x;
    let y = lastBounds.y + lastBounds.height
    
    let newSec = new Path.Rectangle([x,y],[200,50])
    newSec.style = {
        fillColor: '#000',
        strokeColor: '#f0f'
    };
    
    g.addChild(newSec);

}

view.onKeyDown = function(e){
    if(Key.isDown('/')) addSection()
    console.log(e.key)
}
g.onMouseDrag = function(e){

    this.position.x += e.delta.x;
    this.position.y += e.delta.y;
}



let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let rec = new Class();
    rec.draggable()
    
})

