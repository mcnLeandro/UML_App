import { FociController } from "js/controllers/foci_controller";
import { Focus } from "js/models/focus";



export class FociListener {

    static set(){

        FociListener.onMouseDownToUnfocus();
        FociListener.onMouseUpToFocus();

    }
    static onMouseDownToUnfocus(){
        
        view.onMouseDown = function(){

            FociController.unfocus()

        }
        
    }
    static onMouseUpToFocus(){

        Focus.umlObj.onMouseUp = function(){

            FociController.focus()

        }

    }
    static setShortcuts(shortCutsCallBack){

        paper.UI.onKeyDown = shortCutsCallBack

    }

}

export class FociHandleListener {

    static set(){

        FociHandleListener.setRightHandleListener()

    }

    static setRightHandleListener(){

        const rightMiddle      = document.querySelector("#resize-handles .right-middle ")

        rightMiddle.addEventListener('mousedown',()=>{

            Focus.handles.rightMiddle.isMouseDown = true

        })
        addEventListener('mousemove',(event)=>{

            event.preventDefault();

            if(Focus.handles.rightMiddle.isMouseDown){
                (async ()=>{

                    const module = await import('js/utils/index.js')

                    // const width = Math.abs(Focus.umlObj.bounds.left - paper.UI.mousePoint.x)
                    // console.log(`${view.zoom} : ${paper.UI.mousePoint.x} : ${width}`)
                    console.log(paper.UI.mousePoint.x)
                    module
                        .getMVCLFromUMLObject(Focus.umlObj)
                        .CONTROLLER
                        .expandRight(Focus.umlObj, paper.UI.mousePoint.x)
                    FociController.update()
                    
                })()
            }

        })
        addEventListener('mouseup',()=>{

            Focus.handles.rightMiddle.isMouseDown = false

        })

    }
}

/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : foci_listener.js')
 /*******************************/