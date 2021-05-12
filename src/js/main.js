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

view.translate([100,100])


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

let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    let rec = new Class();
    rec.draggable()

})

// ===============================================
// TODO: line 66 in class.js
// ===============================================



let space = 5
let btnSize = 25
let fontSize = 15;
// class
let classRect = new Path.Rectangle(
    [0,0],
    [240, 70]
)

let classText = new PointText({
    point: [classRect.bounds.center.x, classRect.bounds.center.y + 10],
    content: `Class`,
    justification: 'center' ,
    fontSize: fontSize,
});
let classInterfaceText = new PointText({
    point: [classRect.bounds.center.x, classRect.bounds.center.y - 10],
    content: `<<Interface>>`,
    justification: 'center' ,
    fontWeight: 'Bold Italic',
    fontSize: fontSize,
});
let classTemplateRect = new Path.Rectangle(
    [classRect.bounds.right - 50, classRect.bounds.top],
    [50,50]
)
let classTemplateText = new PointText({
    point: classTemplateRect.bounds.center,
    content: `T`,
    justification: 'center' ,
    fontWeight: 'Bold',
    fontSize: fontSize,
});


// column
let column = new Path.Rectangle(// same outerRect
    classRect.bounds.bottomLeft,
    new Size(classRect.bounds.width, 50)
)
let cInnerRect = new Path.Rectangle(
    new Point(column.bounds.left  + space, column.bounds.top + space,),
    new Point(column.bounds.right - space, column.bounds.bottom - space)
);
let cBtn = new Shape.Rectangle({
    center : [cInnerRect.bounds.left + btnSize, cInnerRect.bounds.center.y],
    size:[btnSize,btnSize],
    radius: 5
});
let cText = new PointText({
    point: [cInnerRect.bounds.left + cBtn.bounds.width*2, cInnerRect.bounds.center.y + 6 ],
    content: `Column`,
    justification: 'left',
    fontWeight: 'Bold',
    fontSize: fontSize,
});

//divider
let divider = new Path.Rectangle(// same outerRect
    column.bounds.bottomLeft,
    new Size(classRect.bounds.width, 50)
)
let dLine = new Path.Line(
    new Point(divider.bounds.left , divider.bounds.center.y),
    new Point(divider.bounds.right, divider.bounds.center.y)
);

classRect.strokeColor = '#000';
classText.strokeColor = '#000';
classInterfaceText.strokeColor = '#000';
classTemplateRect.strokeColor  = '#000';
classTemplateText.strokeColor  = '#000';

column.strokeColor = '#000';
cInnerRect.strokeColor = '#00f';
cBtn.strokeColor = '#00f';
cText.strokeColor = '#00f';


divider.strokeColor = '#000';
dLine.strokeColor = '#00f';
dLine.strokeWidth = 5;



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




