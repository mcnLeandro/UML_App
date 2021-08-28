import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
import { ClassesController } from 'js/controllers/classes_controller';
import { ArrowsController } from "js/controllers/arrows_controller"

window.config = {
    
    expandRightBtn  : document.getElementById("r-btn"),
    expandTopBtn    : document.getElementById("t-btn"),
    expandleftBtn   : document.getElementById("l-btn"),
    expandBottomBtn : document.getElementById("b-btn"),
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
// let column1  = ColumnsController.createInto(class1)
// let divider1 = DividersController.createInto(class1)
// let column2  = ColumnsController.createInto(class1)



/***************
 * Events
 */
config.expandRightBtn.addEventListener("click", ()=>{
    ClassesController.expandRight(class1, 10)
    FociController.update()
})
config.expandleftBtn.addEventListener("click", ()=>{
    ClassesController.expandLeft(class1, 10)
    FociController.update()
})




// ClassesController.expandRight(class1, 60)
// ClassesController.expandRight(class1, 100)
// ClassesController.expandRight(class1, 100)
// ClassesController.expandRight(class1, 100)
/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : main.js')
 /*******************************/


 /* 
 
 
 




 
  handleRectの上にいるときだけdoubleからintegerになる。何故なるのか、どう解決したらいいのか
 







 */