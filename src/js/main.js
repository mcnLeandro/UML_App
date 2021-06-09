import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
import { ClassesController } from 'js/controllers/classes_controller';

// TODO: create config


// ===============================================
// field
// ===============================================


FieldsController.init();

// ===============================================
// Class
// ===============================================



let btn = document.getElementById('btn');
btn.addEventListener('click',  ()=>ClassesController.create() )



// Field




// TODO: the zoom place is always center so fix to mouse point
// TODO: have to sepalation of concern in listeners.