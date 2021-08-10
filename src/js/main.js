import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
import { ClassesController } from 'js/controllers/classes_controller';
import { ArrowsController } from "js/controllers/arrows_controller"

window.config = {
    
    expands         : document.getElementById("r-btn"),
    classBtn        : document.getElementById("class-btn"),
    arrowBtn        : document.getElementById("arrow-btn"),

    canvas          : document.getElementById("field"),

    editableText    : document.getElementById("editableTextDiv"),
    editMenu        : document.getElementById("edit-menu"),
    zoomInBtn       : document.getElementById("zoom-in-btn"),
    zoomOutBtn      : document.getElementById("zoom-out-btn"),
    zoomInput       : document.getElementById("zoom-input"),

    svgTranslate    : document.getElementById("svg-translate"),
    svgScale        : document.getElementById("svg-scale"),
    focusGroup      : document.getElementById("focus-group")

}

FieldsController.init();



config.classBtn.addEventListener('click',  ()=>ClassesController.create())

// TODO: i wanna let columns switchable like trello

// TODO: create edit menu for Class

config.arrowBtn.addEventListener("click", ()=>ArrowsController.create())

import { FociController } from 'js/controllers/foci_controller'
import { ColumnsController } from 'js/controllers/columns_controller'
import { DividersController } from 'js/controllers/dividers_controller'
import { ClassesView } from 'js/views/classes_view'
import { ColumnsView } from 'js/views/columns_view'
import { DividersView } from 'js/views/dividers_view'

let class1   = ClassesController.create()
let column1  = ColumnsController.createInto(class1)
let divider1 = DividersController.createInto(class1)
let column2  = ColumnsController.createInto(class1)

let expandRightOfColumn = (column, width) => {

    let pp = column.parent.parent;
    let bounds = pp.bounds;

    ColumnsView.setShape(column, new Rectangle(
        column.bounds.topLeft,
        // [bounds.width + width, column.bounds.height]
        [width, column.bounds.height]
    ))

}
let expandRightOfDivider = (divider, width) => {

    let _class = divider.parent.parent;
    let bounds = _class.bounds;

    DividersView.setShape(divider, new Rectangle(

        divider.bounds.topLeft,
        [bounds.width,DividersView.defaultBarStyle.strokeWidth]

    ))

}
let expandRightOfClass = (_class,width) => {

    ClassesView.setShape(_class, new Rectangle(
        _class.bounds.topLeft,
        [width, _class.rect.bounds.height]
    ))

    // import('js/utils/index').then(module =>{

        _class.contentsGroup.children.forEach(child => {
            switch(child.constructor.name){
    
                case "Column" : expandRightOfColumn(child, width);break;
                case "Divider": expandRightOfDivider(child,width);break;
                default : break;
    
            }
        })
    // })

}

config.expands.addEventListener("click", ()=>{
    expandRightOfClass(class1, class1.bounds.width + 10)
    FociController.focus()
})




/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : main.js')
 /*******************************/