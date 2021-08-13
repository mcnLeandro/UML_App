import { FociListener } from "js/listeners/foci_listener";
import { FociView } from "js/views/foci_view";
import { Focus } from "js/models/focus";

import { ClassesController } from "js/controllers/classes_controller";

import { FociHandleListener } from "../listeners/foci_listener";

/**
 * @implement FocasableController
 */
export class FociController {

    static set(umlObj){

        Focus.umlObj = umlObj;
        FociListener.set();

        // FociController.unfocus()
        FociController.focus()


        FociController.setShortcuts(umlObj);

    }
    /***********************************
    * @interface FocusableController   *
    * ******************************** *
    * @argumnt Void                    *
    * @return  Void                    *
    *                                  */
    static focus(){

        // if(!Focus.umlObj.isFocused){
            import('js/utils/index.js').then(module => {
                
                const MVCL = module.getMVCLFromUMLObject(Focus.umlObj)
                
                Focus.umlObj.isFocused = true;
                MVCL.CONTROLLER.focus()
                // FociHandleListener.set()

            });
        // }

    }
    /**                                *
    * @argument Void                   *
    * @return   Void                   *
    *                                  */
    static unfocus(){

        // if(Focus.umlObj.isFocused){
            import('js/utils/index.js').then(module => {

                const MVCL = module.getMVCLFromUMLObject(Focus.umlObj)

                Focus.umlObj.isFocused = false;
                MVCL.CONTROLLER.unfocus()
                document.activeElement.blur()
                
            });

        // }

    }
    /* End of FocasableController      *
    ************************************/


    static setShortcuts(umlObj){

        import('js/utils/index.js').then(module => {

            let shortcuts = module
                            .getMVCLFromUMLObject(Focus.umlObj)
                            .CONTROLLER
                            .shortcuts
    
            FociListener.setShortcuts(() => {

                shortcuts(umlObj)
                // FociController.unfocus()
                // FociController.focus()
                this.update()
                
            })

        })

    }
    static update(){

        const rect = document.querySelector("#focus-rect rect")

        rect.style.top = `${Focus.umlObj.bounds.y}px`
        rect.style.left = `${Focus.umlObj.bounds.x}px`
        rect.style.width = `${Focus.umlObj.bounds.width}px`
        rect.style.height = `${Focus.umlObj.bounds.height}px`

        rect.setAttribute("x",Focus.umlObj.bounds.x)
        rect.setAttribute("y",Focus.umlObj.bounds.y)
        rect.setAttribute("width",Focus.umlObj.bounds.width)
        rect.setAttribute("height",Focus.umlObj.bounds.width)


        
        const topLeft      = document.querySelector("#resize-handles .top-left      image")
        const topRight     = document.querySelector("#resize-handles .top-right     image")
        const bottomLeft   = document.querySelector("#resize-handles .bottom-left   image")
        const bottomRight  = document.querySelector("#resize-handles .bottom-right  image")

        const topMiddle    = document.querySelector("#resize-handles .top-middle    image")
        const bottomMiddle = document.querySelector("#resize-handles .bottom-middle image")
        const leftMiddle   = document.querySelector("#resize-handles .left-middle   image")
        const rightMiddle  = document.querySelector("#resize-handles .right-middle  image")
        

        topLeft.setAttribute("x", Focus.umlObj.bounds.topLeft.x - 10)
        topLeft.setAttribute("y", Focus.umlObj.bounds.topLeft.y - 10)

        topRight.setAttribute("x", Focus.umlObj.bounds.topRight.x - 10)
        topRight.setAttribute("y", Focus.umlObj.bounds.topRight.y - 10)

        bottomLeft.setAttribute("x", Focus.umlObj.bounds.bottomRight.x - 10)
        bottomLeft.setAttribute("y", Focus.umlObj.bounds.bottomRight.y - 10)

        bottomRight.setAttribute("x", Focus.umlObj.bounds.bottomLeft.x - 10)
        bottomRight.setAttribute("y", Focus.umlObj.bounds.bottomLeft.y - 10)


        topMiddle.setAttribute("x", Focus.umlObj.bounds.center.x - 10)
        topMiddle.setAttribute("y", Focus.umlObj.bounds.top - 10)

        bottomMiddle.setAttribute("x", Focus.umlObj.bounds.center.x - 10)
        bottomMiddle.setAttribute("y", Focus.umlObj.bounds.bottom - 10)

        leftMiddle.setAttribute("x", Focus.umlObj.bounds.left - 10)
        leftMiddle.setAttribute("y", Focus.umlObj.bounds.center.y - 10)

        rightMiddle.setAttribute("x", Focus.umlObj.bounds.right - 10)
        rightMiddle.setAttribute("y", Focus.umlObj.bounds.center.y - 10)


    }

}


/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : foci_controller.js')
 /*******************************/