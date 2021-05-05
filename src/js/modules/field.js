

import {mouse,
    canvas,
    color,
    strokeWidth
} from './../main.js'



class Field{

    static gap;
    static color;
    static gridColor;
    

    static set(){
        this.gap = 100;
        this.color = color.field;
        this.gridColor = color.gridStroke;
    }
    static init(){

        let bgRect = new Path.Rectangle([view.bounds.x, view.bounds.y],[innerWidth,innerHeight])
        bgRect.name = "bgRect";
        
        //adding name to default layer
        project.activeLayer.name = "default";
        // adding bg layer
        project.insertLayer(0,
            new Layer({
                children: [bgRect,this.drawGrid()],
                name:"bg",
                fillColor : this.color
            })
        )

    }
    static drawGrid(){
    
        const verticalLineGroup = new Group()
        const horizontalLineGroup = new Group()
    
        const remainderX = view.bounds.x%this.gap
        const remainderY = view.bounds.y%this.gap
    
        const minX = view.bounds.x;
        const minY = view.bounds.y;
        const maxX = view.bounds.width + minX;
        const maxY = view.bounds.height + minY;
    
    
        for (let x = minX - remainderX; x < maxX; x+=this.gap) {
    
            let line = new Path.Line(
                [x, minY],
                [x, maxY]
            )
            
            verticalLineGroup.addChild(line)
        }
        for (let y = minY - remainderY; y < maxY; y+=this.gap) {
    
            let line = new Path.Line(
                [minX, y],
                [maxX, y]
            )
        
            horizontalLineGroup.addChild(line)
        }
    
        const grids = new Group({
            children : [
                horizontalLineGroup,
                verticalLineGroup
            ],
            name:"grids",
            strokeColor :this.gridColor
        })
        
        
        return grids

    }
    static updateAsCanvas(x,y){

        view.translate([x , y])
        
        let newGrids = this.drawGrid(100)
        let bgChildren = project.layers.bg.children

        bgChildren.grids.replaceWith(newGrids)
        bgChildren.bgRect.position.x = view.center.x
        bgChildren.bgRect.position.y = view.center.y

    }
    static grabbable(){

        view.onMouseDrag = function(e){
            if(Key.isDown('space')){
        
                let x = e.point.x - mouse._downPoint.x;
                let y = e.point.y - mouse._downPoint.y;
        
                Field.updateAsCanvas(x,y)
            }
        }
        
        view.onKeyDown = function(){
            if(Key.isDown('space')){
                canvas.style.cursor =  "grab";
            } 
            if(Key.isDown('space') && mouse.isMouseDown){
                canvas.style.cursor = 'grabbing'
            }
            mouse.onMouseUp = function(){
                if(Key.isDown('space')){
                    canvas.style.cursor = 'grab'
                }
            }
            view.onKeyUp = function(){
                canvas.style.cursor = 'default'
            }
        }
        
    }
}


export { Field }