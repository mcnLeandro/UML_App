import { FieldsListener } from "js/listeners/fields_listener"
import { FieldsView } from "js/views/fields_view";
import { Field } from "js/models/field";


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

        FieldsListener.setListeners();

    }
    static updateStatus(status = FieldsView.defaultStyle){

        Field.color = status.color || Field.color;
        Field.gridGap = status.gridGap || Field.gridGap;
        Field.gridStrokeColor = status.gridStrokeColor || Field.gridStrokeColor;

    }
    static refresh(){

        const zoom = view.zoom > 0 ? view.zoom : 1 ;
        Field.viewRect.bounds.size = new Size(innerWidth/zoom, innerHeight/zoom);
        Field.viewRect.bounds.center = new Point(innerWidth/2,innerHeight/2);
        FieldsView.drawGrid();

    }
    
    static translate(x, y){

        view.translate([x, y]);
        
        FieldsView.drawGrid();

        Field.viewRect.position.x = view.center.x;
        Field.viewRect.position.y = view.center.y;

    }
}