export class ClassesView {

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
}

