import { UMLObjectsView } from "js/views/uml_objects_view"

export class ColumnsView extends UMLObjectsView{

    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {

        content: "Column",
        fillColor: '#25313c',
        fontSize: 15,

    }
    static defaultBtnStyle = {

        // strokeColor : '#f55',
        fillColor : '#f55'

    }
    static defaultBtnTextStyle = {
        content : "+",
        fillColor : "#fff",
        justification: 'center',
        fontSize: 15,
    }
    static set(column){

        ColumnsView.setStyle(column);
        ColumnsView.setShape(column);

    }
    static setShape(column, rectangle){

        let pp = column.parent.parent;
        let bounds = pp.bounds;

        column.outerRect.bounds = rectangle ? rectangle : new Rectangle(
            [bounds.left,bounds.bottom],
            [bounds.width,50]
        );

        column.innerRect.bounds = new Rectangle(
            new Point(column.outerRect.bounds.left + column.space, column.outerRect.bounds.top + column.space),
            new Point(column.outerRect.bounds.right - column.space, column.outerRect.bounds.bottom - column.space)
        );
        
        column.btn.set({
            radius: 0.2,
            strokeWidth: 0.1,
        })
        column.btn.bounds = new Rectangle({
            center :[column.innerRect.bounds.left + column.btnSize/2, column.innerRect.bounds.center.y], 
            size: [column.btnSize,column.btnSize],

        });

        column.btnText.bounds.center = new Point([
            column.btn.bounds.center.x,
            column.btn.bounds.center.y // Don't kenow why but plus equal minus?
        ])


        column.text.bounds.point  = new Point([
            column.innerRect.bounds.left + column.btn.bounds.width + column.space, 
            column.innerRect.bounds.center.y - 6 
        ]);

    }
    static setStyle(column){

        column.outerRect.strokeColor = '#f0f';
        // column.innerRect.strokeColor = '#00f'

        column.outerRect.set(ColumnsView.defaultRectStyle);
        column.text.set(ColumnsView.defaultTextStyle);
        column.btn.set(ColumnsView.defaultBtnStyle);
        column.btnText.set(ColumnsView.defaultBtnTextStyle);

    }

    /*
    static showEditMenu(){

        super.showEditMenu()

    }
    */
    /*
    static focus(){
 
        super.focus()
 
    }
    */
    /*
    static unfocus(){
 
        super.unfocus()
         
    }
    */
    static editInputHTML(pointText){
        return `
        <input 
            id='input' 
            style="
                top: ${pointText.point.y - pointText.fontSize}px; 
                left: ${pointText.point.x}px; 
                height:${pointText.bounds.height}px;
                width:${pointText.bounds.width}px;
                font-size:${pointText.fontSize}px;
                font-family:${pointText.fontFamily};
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
    
    
}










/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : columns_view.js')
 /*******************************/