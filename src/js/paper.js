let canvas = document.querySelector('#field')

canvas.width = innerWidth;
canvas.height = innerHeight;

paper.install(window);
paper.setup(canvas);


const mouse = new Tool()

paper.mouse = mouse;



mouse.activate()


mouse.name          = "mouse"
mouse.isMouseDown   = false;
mouse.point         = view.center;


mouse.onMouseDown = function(){
    mouse.isMouseDown = true;
    console.log(this)
}
mouse.onMouseUp = function(){
    mouse.isMouseDown = false;
}
mouse.onMouseMove = function(event){
    mouse.point = event.point;
}

export { canvas }
