import { FieldsListener } from "js/listeners/fields_listener"
import { FieldsView } from "js/views/fields_view";
import { Field } from "js/models/field";
// import { canvas } from "js/main"

export class FieldsController {
    
    static init(status = FieldsView.defaultStyle){

        FieldsController.updateStatus(status)

        Field.viewRect.bounds = new Rectangle([view.bounds.x, view.bounds.y],[innerWidth,innerHeight])
        FieldsView.drawGrid()
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

        FieldsView.drawGrid();

    }
    static translate(x, y){

        view.translate([x, y]);
        Field.svgTranslate.style.transform = `translate(${-view.bounds.x}px,${-view.bounds.y}px)`
        
        FieldsView.drawGrid();

        Field.viewRect.position.x = view.center.x;
        Field.viewRect.position.y = view.center.y;

    }
    static scale(scalingFactor, center){

        view.scale(scalingFactor, center);
        FieldsController.refreshZoomInput();
        FieldsController.refresh();

    }
    static zoom(value){

        view.zoom = value;
        FieldsController.refreshZoomInput(); 
        FieldsController.refresh();

    }
}