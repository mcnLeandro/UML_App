import './../css/style.css'

// ===============================================
// global
// ===============================================


let global = {
    canvas : document.querySelector('#field'),
    // c : global.canvas.getContext('2d'),
}


global.canvas.width = window.innerWidth;
global.canvas.height = window.innerHeight;


// ===============================================
//  paper setup
// ===============================================

paper.install(window);
paper.setup(document.getElementById('field'));
let mouse = new Tool()




// ===============================================
// style
// ===============================================

let color = {
    field : '#eef2f6',
    classStroke : '#b9c6d1',
    gridStroke : '#c1cdd9'
}
let strokeWidth = {
    class : 1,

}

// ===============================================
// layers
// ===============================================

let bgRect = new Path.Rectangle([view.bounds.x, view.bounds.y],[innerWidth,innerHeight])
bgRect.name = "bgRect";

//adding name to default layer
project.activeLayer.name = "default";
// adding bg layer
project.insertLayer(0,
    new Layer({
        children: [bgRect,drawGrid(100)],
        name:"bg",
        fillColor : color.field
    })
)


// ===============================================
// field
// ===============================================
function drawGrid(gap){
    

    const verticalLineGroup = new Group()
    const horizontalLineGroup = new Group()

    const remainderX = view.bounds.x%gap
    const remainderY = view.bounds.y%gap

    const minX = view.bounds.x 
    const minY = view.bounds.y 
    const maxX = view.bounds.width + minX;
    const maxY = view.bounds.height + minY;


    for (let x = minX - remainderX; x < maxX; x+=gap) {

        let line = new Path.Line(
            [x, minY],
            [x, maxY]
        )
        
        verticalLineGroup.addChild(line)
    }
    for (let y = minY - remainderY; y < maxY; y+=gap) {

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
        strokeColor :color.gridStroke
    })
    
    
    return grids
}


view.onMouseDrag = function(e){
    if(Key.isDown('space')){

        let x = e.point.x - mouse._downPoint.x;
        let y = e.point.y - mouse._downPoint.y;

        view.translate([x , y])


        let newGrids = drawGrid(100)
        let bgChildren = project.layers.bg.children

        bgChildren.grids.replaceWith(newGrids)
        bgChildren.bgRect.position.x = view.center.x
        bgChildren.bgRect.position.y = view.center.y
    }
}

