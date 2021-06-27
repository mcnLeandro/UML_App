let canvas = document.querySelector('#field')

canvas.width = innerWidth;
canvas.height = innerHeight;

paper.install(window);
paper.setup(canvas);


const UI = new Tool()

paper.UI = UI;



UI.activate()


UI.name          = "UI"
UI.isMouseDown   = false;
UI.point         = view.center;


UI.onMouseDown = function(){
    UI.isMouseDown = true;
    console.log(this)
}
UI.onMouseUp = function(){
    UI.isMouseDown = false;
}
UI.onMouseMove = function(event){
    UI.point = event.point;
}

export { canvas }
