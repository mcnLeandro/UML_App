import resizeRect from './../../images/resize-rect.svg'
import resizeTest1 from './../../images/test1.png'

// ===============================================
// (SVG)
// ===============================================
class Focus {
    static focusG =document.getElementById("focusG");
    static focusingObj = null;
    static getFocusRect(umlObj){
        return `
        <g pointer-events="none">
            <rect 
                style="position: absolute; top: ${umlObj.bounds.y}px; left: ${umlObj.bounds.x}px; width: ${umlObj.bounds.width}px; height: ${umlObj.bounds.height}px;"
                x="${umlObj.bounds.x}px" 
                y="${umlObj.bounds.y}px" 
                width="${umlObj.bounds.width}px" 
                height="${umlObj.bounds.width}px" 
                stroke="#B471EA" 
                fill="rgba(0,0,0,0)" 
                stroke-linejoin="round" 
                stroke-linecap="round" 
                stroke-width="5px" 
            ></rect>
        </g>
        <g  id='imgTest'
            pointer-events="all">
            <g cursor="nwse-resize" class="topLeft">
                <image
                    x="${umlObj.bounds.topLeft.x - 10}"
                    y="${umlObj.bounds.topLeft.y - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></img>
            </g>
            <g cursor="nesw-resize" class="topRight">
                <image
                    x="${umlObj.bounds.topRight.x - 10}"
                    y="${umlObj.bounds.topRight.y - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>
            <g cursor="nwse-resize" class="bottomRight">
                <image
                    x="${umlObj.bounds.bottomRight.x - 10}"
                    y="${umlObj.bounds.bottomRight.y - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>
            <g cursor="nesw-resize" class="bottomLeft">
                <image
                    x="${umlObj.bounds.bottomLeft.x - 10}"
                    y="${umlObj.bounds.bottomLeft.y - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>
    
    
    
            <g cursor="ns-resize" class="topMiddle">
                <image
                    x="${umlObj.bounds.center.x - 10}"
                    y="${umlObj.bounds.top - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>
            <g cursor="ns-resize" class="bottomMiddle">
                <image
                    x="${umlObj.bounds.center.x - 10}"
                    y="${umlObj.bounds.bottom - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>
            <g cursor="ew-resize" class="leftMiddle">
                <image
                    x="${umlObj.bounds.left - 10}"
                    y="${umlObj.bounds.center.y - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>
            <g cursor="ew-resize" class="rightMiddle">
                <image
                    x="${umlObj.bounds.right - 10}"
                    y="${umlObj.bounds.center.y - 10}"
                    width="20"
                    height="20"
                    href="${resizeTest1}" ></image>
            </g>

        </g>
        `
    }
    static to(umlObj){

        Focus.focusingObj = umlObj;

        view.onMouseDown = function(){
            if(umlObj.isFocused){
                umlObj.isFocused = false;
                focusG.innerHTML = ""
            }
        }
        umlObj.onMouseUp = function(){
            if(!umlObj.isFocused){
                umlObj.isFocused = true;
                focusG.innerHTML = Focus.getFocusRect(umlObj);
            }

        }
    }
}




export { Focus }