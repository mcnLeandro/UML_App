let canvas =  document.querySelector('#field')

canvas.width = innerWidth;
canvas.height = innerHeight;

paper.install(window);
paper.setup(canvas);


// mouse
let mouse = new Tool()
paper.mouse = mouse;
mouse.activate()


mouse.name = "mouse"
mouse.isMouseDown = false;


mouse.onMouseDown = function(){
    mouse.isMouseDown = true;
}
mouse.onMouseUp = function(){
    mouse.isMouseDown = false;
}