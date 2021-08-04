import handleRectImage from 'images/test1.png'
import { Focus } from "js/models/focus"

export class FociView {

    static boundFocus(){
        config.focusGroup.innerHTML = FociViewHelper.boundFocus()
    }
    static lineFocus(){

    }
    static unfocus(){
        config.focusGroup.innerHTML = ""
    }

}
class FociViewHelper{

    static boundFocus(){
        return `

        <g pointer-events="none">
            <rect 
                style="position: absolute; top: ${Focus.umlObj.bounds.y}px; left: ${Focus.umlObj.bounds.x}px; width: ${Focus.umlObj.bounds.width}px; height: ${Focus.umlObj.bounds.height}px;"
                x="${Focus.umlObj.bounds.x}px" 
                y="${Focus.umlObj.bounds.y}px" 
                width="${Focus.umlObj.bounds.width}px" 
                height="${Focus.umlObj.bounds.width}px" 
                stroke="#B471EA" 
                fill="rgba(0,0,0,0)" 
                stroke-linejoin="round" 
                stroke-linecap="round" 
                stroke-width="5px" 
            ></rect>
        </g>

        <g  id='resize-rects-group'
            pointer-events="all">


            <g cursor="nwse-resize" class="topLeft">
                <image
                    x="${Focus.umlObj.bounds.topLeft.x - 10}"
                    y="${Focus.umlObj.bounds.topLeft.y - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></img>
            </g>
            <g cursor="nesw-resize" class="topRight">
                <image
                    x="${Focus.umlObj.bounds.topRight.x - 10}"
                    y="${Focus.umlObj.bounds.topRight.y - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>
            <g cursor="nwse-resize" class="bottomRight">
                <image
                    x="${Focus.umlObj.bounds.bottomRight.x - 10}"
                    y="${Focus.umlObj.bounds.bottomRight.y - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>
            <g cursor="nesw-resize" class="bottomLeft">
                <image
                    x="${Focus.umlObj.bounds.bottomLeft.x - 10}"
                    y="${Focus.umlObj.bounds.bottomLeft.y - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>
    
    
    
            <g cursor="ns-resize" class="topMiddle">
                <image
                    x="${Focus.umlObj.bounds.center.x - 10}"
                    y="${Focus.umlObj.bounds.top - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>
            <g cursor="ns-resize" class="bottomMiddle">
                <image
                    x="${Focus.umlObj.bounds.center.x - 10}"
                    y="${Focus.umlObj.bounds.bottom - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>
            <g cursor="ew-resize" class="leftMiddle">
                <image
                    x="${Focus.umlObj.bounds.left - 10}"
                    y="${Focus.umlObj.bounds.center.y - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>
            <g cursor="ew-resize" class="rightMiddle">
                <image
                    x="${Focus.umlObj.bounds.right - 10}"
                    y="${Focus.umlObj.bounds.center.y - 10}"
                    width="20"
                    height="20"
                    href="${handleRectImage}" ></image>
            </g>


        </g>
        `
    }

}









/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : foci_view.js')
 /*******************************/