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

    <textarea 
        id='span-tag-input' 
        style="top: 100px; left: 100px; cursor: default; position: absolute; " 
        style="outline: none; white-space: pre-wrap; overflow-wrap: break-word; "
        role="textbox" 
        contenteditable="true" 
        autocorrect="off" 
        spellcheck="false" 
        aria-multiline="true"
    >

        editable input

    </textarea>

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

view.onKeyDown = function(e){
    if(Key.isDown('/')) addSection()
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


//TODO: to think of stracture of inside of class, have to create column object

// group[
//     paperjsClassObj,

//     section1[
        
//     ],
//     section2[

//     ]

// ]


//TODO: when click pointText, input appears to same position of point Text
//- create function called TextMode()
//- add click Event in pointText
//- let appears input(anywhere)
//- let appears input(on point Text)
//- if both overlaped , hide poinText while TextMode()
//TODO: when click another place, input disappears and pointTexxt updated
//- add click Event to view or something(maybe can use hitpoint so..)
//- get content of input
//- let dissapears input
//- if pointText is hidden, display it.
//- update the point Text


// input(textarea) is HTML side and decleaed in 14 line in this file
let input = document.getElementById('span-tag-input')
let pt = new PointText({
    point: [50, 50],
    content: input.innerHTML,
    fillColor: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 25,
    selected: true
})

view.onKeyDown = function(){
    if(Key.isDown('enter')){
        pt.content = input.value
        //then unfocus
    }
}
