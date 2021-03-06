import { FieldsListener } from "js/listeners/fields_listener"
import { FieldsView } from "js/views/fields_view";
import { Field } from "js/models/field";
import { canvas } from "js/paper"

export class FieldsController {
    
    static init(status = FieldsView.defaultStyle){

        FieldsController.updateStatus(status)

        Field.viewRect.bounds = new Rectangle([view.bounds.x, view.bounds.y],[innerWidth,innerHeight])
        FieldsView.drawGrid(Field.gridGap)
        Field.layer.set({

            children: [Field.viewRect, Field.gridGroup],
            fillColor : Field.color,

        })

        project.insertLayer(0, Field.layer);

        FieldsController.refreshZoomInput();

        FieldsListener.setListeners();

    }
    static updateStatus(status = FieldsView.defaultStyle){

        Field.color = status.color || Field.color;
        Field.gridGap = status.gridGap || Field.gridGap;
        Field.gridStrokeColor = status.gridStrokeColor || Field.gridStrokeColor;

    }
    static refreshZoomInput(){

        Field.zoomInput.value = Math.round(view.zoom * 100) + "%"; 

    }
    static refresh(){

        const zoom = view.zoom > 0 ? view.zoom : 1 ;

        Field.viewRect.bounds.size = new Size(Math.ceil(innerWidth/zoom), Math.ceil(innerHeight/zoom)); 
        Field.viewRect.bounds.center = view.center;

        FieldsView.drawGrid(Field.gridGap);

    }
    static refreshSVG(){

        Field.svgScale.style.transform = `scale(${view.zoom, view.zoom})`
        Field.svgTranslate.style.transform = `translate(${-view.bounds.x*view.zoom}px,${-view.bounds.y*view.zoom}px)`

    }
    static translate(x, y){

        view.translate([x, y]);
        FieldsController.refreshSVG()
        
        FieldsView.drawGrid(Field.gridGap);

        Field.viewRect.position.x = view.center.x;
        Field.viewRect.position.y = view.center.y;

    }
    static scale(scalingFactor, center){

        view.scale(scalingFactor, center);
        FieldsController.refreshSVG()

        FieldsController.refreshZoomInput();
        FieldsController.refresh();

    }
    static zoom(value){

        view.zoom = value;
        FieldsController.refreshSVG();

        FieldsController.refreshZoomInput(); 
        FieldsController.refresh();

    }
    static changeCursorStyle(styleString){

        canvas.style.cursor = styleString;

    }
    static setGridGroupChildren(horizontalLineGroup, verticalLineGroup){

        Field.gridGroup.set({
            children : [
                horizontalLineGroup,
                verticalLineGroup
            ],
            strokeColor :Field.gridStrokeColor
        })

    }

}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : fields_controller.js')
 /*******************************/