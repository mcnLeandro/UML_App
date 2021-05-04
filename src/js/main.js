import './../css/style.css'


// import {field} from "./modules/field.js"


// field.init()

paper.install(window);
paper.setup(document.getElementById('field'));
let mouse = new Tool()

function drawGrid(gap){
    const gridGroup = new Group()

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
        
        line.strokeColor = 'red'
        verticalLineGroup.addChild(line)
        // gridGroup.addChild(line)
    }
    for (let y = minY - remainderY; y < maxY; y+=gap) {

        let line = new Path.Line(
            [minX, y],
            [maxX, y]
        )
        
        line.strokeColor = 'red'
        horizontalLineGroup.addChild(line)
        // gridGroup.addChild(line)
    }
    gridGroup.addChild(horizontalLineGroup)
    gridGroup.addChild(verticalLineGroup)
    return gridGroup
}
 



let bgLayer = new Layer();
bgLayer.name = "bgLayer"
let gridGroup = drawGrid(100)


bgLayer.addChild(gridGroup)

project.insertLayer(bgLayer)
let cir2 = new Path.Circle([0, 0],10)
cir2.fillColor = 'blue'

console.log(project.layers.bgLayer)

view.onMouseDrag = function(e){
    if(Key.isDown('space')){

        let x = e.point.x - mouse._downPoint.x;
        let y = e.point.y - mouse._downPoint.y;

        view.translate([x , y])

        gridGroup.remove()
        gridGroup =  drawGrid(100)
    }
}