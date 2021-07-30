import { FieldsController } from "js/controllers/fields_controller"

export class FieldsView {
    // ===============================================
    // paper
    // ===============================================
    static defaultStyle = {

        color: '#eef2f6',
        gridGap: 100,
        gridStrokeColor : '#bbc8d3',

    }
    static drawGrid(gridGap){

        //TODO: optimizate using deque
        const verticalLineGroup = new Group()
        const horizontalLineGroup = new Group()
    
        const remainderX = view.bounds.x%gridGap
        const remainderY = view.bounds.y%gridGap
    
        const minX = view.bounds.x;
        const minY = view.bounds.y;
        const maxX = view.bounds.width + minX;
        const maxY = view.bounds.height + minY;
    
    
        for (let x = minX - remainderX; x < maxX; x+=gridGap) {
    
            let line = new Path.Line(
                [x, minY],
                [x, maxY]
            )
            
            verticalLineGroup.addChild(line)
        }
        for (let y = minY - remainderY; y < maxY; y+=gridGap) {
    
            let line = new Path.Line(
                [minX, y],
                [maxX, y]
            )
        
            horizontalLineGroup.addChild(line)
        }
        
        FieldsController.setGridGroupChildren(horizontalLineGroup, verticalLineGroup);
        
    }
}







/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : fields_view.js')
 /*******************************/