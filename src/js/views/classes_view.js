import { UMLObjectsView } from 'js/views/uml_objects_view'

export class ClassesView extends UMLObjectsView{

    static defaultRectStyle = {
        
        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {
        
        fillColor:'#25313c',
        content: 'Class',
        justification: 'center',
        fontWeight: 'bold',
        fontSize: 15,

    }
    static set(_class){

        ClassesView.initShape(_class);
        ClassesView.initStyle(_class);

    }
    static initShape(_class){

        _class.rect.bounds = new Rectangle([100,100],[240,70]);
        _class.nameText.bounds.point = new Point(_class.rect.bounds.center.x, _class.rect.bounds.center.y + 10);

    }
    static initStyle(_class){

        _class.rect.set(ClassesView.defaultRectStyle);
        _class.nameText.set(ClassesView.defaultTextStyle);

    }

    static edit(_class){

        config.editMenu.innerHTML = `
            <div
                id='' 
                class="bg-danger"
                style="
                    top: ${_class.bounds.bottom}px; 
                    left: ${_class.bounds.left}px; 
                    height:${_class.bounds.height}px;
                    width:${_class.bounds.width}px;
                    cursor: none; 
                    position: absolute; 
                    outline: none; 
                    white-space: pre-wrap; 
                    overflow-wrap: break-word; 
                "
            ></div>
        `

    }

    /**
     * CONSIDER: this focus method is considering at issue #10
     */
    static focus(){

        super.boundFocus()

    }
    static unfocus(){

        super.unfocus()

    }
    
}








/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : classes_view.js')
 /*******************************/