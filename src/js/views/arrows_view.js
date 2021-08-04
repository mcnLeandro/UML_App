export class ArrowsView {

    static defaultPathStyle = {

        strokeColor : 'black',
        strokeWidth : 10,

    }
    static defaultCircleStyle = {

        fillColor : 'red',
        strokeColor : 'black',

    }
    static set(arrow){

        ArrowsView.setShape(arrow);
        ArrowsView.setStyle(arrow);

    }
    static setShape(arrow){

        const firstPoint = new Point(100, 100);
        const lastPoint = new Point(200, 200);


        arrow.path.add(firstPoint);
        arrow.path.add(lastPoint);

        arrow.firstCircle.bounds.center = firstPoint;
        arrow.lastCircle.bounds.center  = lastPoint;
        arrow.firstCircle.scale(5);
        arrow.lastCircle.scale(5);

    }
    static setStyle(arrow){

        arrow.path.set(ArrowsView.defaultPathStyle);
        arrow.firstCircle.set(ArrowsView.defaultCircleStyle);
        arrow.lastCircle.set(ArrowsView.defaultCircleStyle);

    }
    /*
    static showEditMenu(){

        super.showEditMenu()

    }
    */
    /*
    static focus(){
 
        super.focus()
 
    }
    */
    /*
    static unfocus(){
 
        super.unfocus()
         
    }
    */
}










/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : arrows_view.js')
 /*******************************/