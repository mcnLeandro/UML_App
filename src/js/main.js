import 'css/main.scss'

import { FieldsController } from "js/controllers/fields_controller"
import { ClassesController } from 'js/controllers/classes_controller';

// TODO: create config
FieldsController.init();


let btn = document.getElementById('btn');
btn.addEventListener('click',  ()=>ClassesController.create() )

// Field
// TODO: zoom (svg)
// TODO: g tag with id translate
// TODO: g tag with id scale
