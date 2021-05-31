export class ColumnsView {

    // ===============================================
    // paper
    // ===============================================
    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultTextStyle = {

        content: "Column",
        fillColor: '#25313c',
        fontSize: 15,

    }
    static defaultBtnStayle = {

        strokeColor : '#f55',
        radius : 5,

    }
    static set(column){

        ColumnsView.initShape(column);
        ColumnsView.initStyle(column);

    }
    static initShape(column){

        let pp = column.parent.parent;
        let bounds = pp.bounds;
        let l = bounds.left;
        let r = bounds.right;
        let b = bounds.bottom;
        let w = bounds.width;


        column.outerRect.bounds = new Rectangle([l,b],[w,50]);

        column.innerRect.bounds = new Rectangle(

            new Point(l + column.space, column.outerRect.bounds.top + column.space),
            new Point(r - column.space, column.outerRect.bounds.bottom - column.space)

        );

        column.btn.bounds  = new Rectangle({

            center :[column.innerRect.bounds.left + column.btnSize/2, column.innerRect.bounds.center.y], 
            size: [column.btnSize,column.btnSize]

        });
        column.text.bounds.point  = new Point(

            [column.innerRect.bounds.left + column.btn.bounds.width + column.space, column.innerRect.bounds.center.y + 6 ]

        );

    }
    static initStyle(column){

        column.outerRect.strokeColor = '#f0f';
        column.innerRect.strokeColor = '#00f'

        column.outerRect.set(ColumnsView.defaultRectStyle)
        column.text.set(ColumnsView.defaultTextStyle);
        column.btn.set(ColumnsView.defaultBtnStayle)

    }

    // ===============================================
    // html
    // ===============================================
    // there's ediitableTextDiv in HTML side. decleaed in 14 line in main.js file
    // FIXME: translate gives a place error
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