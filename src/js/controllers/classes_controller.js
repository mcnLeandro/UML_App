import { ClassesListener } from "js/listeners/classes_listener.js"
import { ClassesView } from "js/views/classes_view"
import { Class } from "js/models/class"

export class ClassesController {
    
    static create(){

        let _class = new Class();
        ClassesView.set(_class);
        ClassesListener.setListeners(_class);
        _class.set();//CONSIDER: this is intNestStructure acutually

        return _class;

    }

}