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
<div id="editableTextDiv">
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

// view.translate([100,100])


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

// ===============================================
// layout tester
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
    [classRect.bounds.right - 40, classRect.bounds.top -10],
    [50,40]
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
    new Point(column.bounds.left  + space, column.bounds.top + space),
    new Point(column.bounds.right - space, column.bounds.bottom - space)
);
let cBtn = new Shape.Rectangle({
    center : [cInnerRect.bounds.left + btnSize/2, cInnerRect.bounds.center.y],
    size:[btnSize,btnSize],
    radius: 5
});
let cText = new PointText({
    point: [cInnerRect.bounds.left + cBtn.bounds.width+ space, cInnerRect.bounds.center.y + 6 ],
    content: `Column`,
    justification: 'left',
    fontWeight: 'Bold',
    fontSize: fontSize,
});

//divider
let divider = new Path.Rectangle(// same outerRect
    column.bounds.bottomLeft,
    new Size(classRect.bounds.width, 5)
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






