
export const canvas = document.querySelector('#field')

canvas.width  = innerWidth;
canvas.height = innerHeight;

/**
 * @view event use
 * 
 * onMouseUp    -> None
 * onMouseDown  -> Used in onMouseDownToUnfocus() method in foci_listener.js
 * onMouseMove  -> None
 * onMouseDrag  -> Used in onMouseDragToGrab() method in fields_listener.js
 * 
 * onKeyDown    -> Used in onMouseDragToGrab() method in fields_listener.js
 * onKeyUp      -> None
 */

paper.install(window);
paper.setup(canvas);

/**
 * @UI event use
 * 
 * onMouseUp    -> Used to control UI.isMouseDown variable in paper.js
 * onMouseDown  -> Used to control UI.isMouseDown variable in paper.js
 * onMouseMove  -> Used to control UI.mousePoint variable in paper.js
 * onMouseDrag  -> None
 * 
 * onKeyDown    -> Used to set short cut in foci_controllers.js
 * onKeyUp      -> None
 * 
 * */
paper.UI = new Tool();
paper.UI.activate();


paper.UI.name          = "UI";
paper.UI.isMouseDown   = false;
paper.UI.mousePoint    = view.center;


paper.UI.onMouseUp   = function(){ UI.isMouseDown = false;}
paper.UI.onMouseDown = function(){ UI.isMouseDown = true;}
paper.UI.onMouseMove = function(event){UI.mousePoint = event.point;}