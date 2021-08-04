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
        
        DividersView.setShape(divider);
        DividersView.setStyle(divider);

    }
    static setShape(divider){

        let pp = divider.parent.parent;
        let bounds = pp.bounds;
        let l = bounds.left;
        let r = bounds.right;
        let b = bounds.bottom;
        let w = bounds.width;
        divider.outerRect.bounds = new Rectangle([l,b],[w,DividersView.defaultBarStyle.strokeWidth]);

        divider.bar.removeSegments()
        divider.bar.addSegments([

            new Point(l , divider.outerRect.bounds.center.y),
            new Point(r, divider.outerRect.bounds.center.y)

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