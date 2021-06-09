import { Field } from "js/models/field"


export class FieldsView {
    // ===============================================
    // paper
    // ===============================================
    static defaultStyle = {

        color: '#eef2f6',
        gridGap: 100,
        gridStrokeColor : '#bbc8d3',

    }
    static drawGrid(){

        //TODO: optimizate using deque
        const verticalLineGroup = new Group()
        const horizontalLineGroup = new Group()
    
        const remainderX = view.bounds.x%Field.gridGap
        const remainderY = view.bounds.y%Field.gridGap
    
        const minX = view.bounds.x;
        const minY = view.bounds.y;
        const maxX = view.bounds.width + minX;
        const maxY = view.bounds.height + minY;
    
    
        for (let x = minX - remainderX; x < maxX; x+=Field.gridGap) {
    
            let line = new Path.Line(
                [x, minY],
                [x, maxY]
            )
            
            verticalLineGroup.addChild(line)
        }
        for (let y = minY - remainderY; y < maxY; y+=Field.gridGap) {
    
            let line = new Path.Line(
                [minX, y],
                [maxX, y]
            )
        
            horizontalLineGroup.addChild(line)
        }
    
        Field.gridGroup.set({
            children : [
                horizontalLineGroup,
                verticalLineGroup
            ],
            strokeColor :Field.gridStrokeColor
        })


    }
}