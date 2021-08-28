export class DividersView {
    
    static defaultRectStyle = {

        fillColor: 'white',
        strokeColor: '#bbc8d3',

    }
    static defaultBarStyle = {

        strokeWidth : 2,
        strokeColor : '#bbc8d3',

    }
    static set(divider){
        
        DividersView.setStyle(divider);
        DividersView.setShape(divider);

    }
    static setShape(divider, rectangle){

        let _class = divider.parent.parent;
        let bounds = _class.bounds;

        divider.outerRect.bounds = rectangle ? rectangle : new Rectangle(

            [bounds.left,bounds.bottom],
            [bounds.width,DividersView.defaultBarStyle.strokeWidth]

        );

        divider.bar.removeSegments()
        divider.bar.addSegments([

            new Point(divider.outerRect.bounds.left , divider.outerRect.bounds.center.y),
            new Point(divider.outerRect.bounds.right, divider.outerRect.bounds.center.y)

        ]);

    }
    static setStyle(divider){
        
        divider.outerRect.set(DividersView.defaultRectStyle)
        divider.bar.set(DividersView.defaultBarStyle)
        
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
 console.log('loaded : dividers_view.js')
 /*******************************/