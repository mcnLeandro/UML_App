export class Divider extends Group {

    
    constructor(){

        super()

        this.outerRect = new Path.Rectangle(new Rectangle(1,1,1,1));
        this.bar = new Path.Line()

    }
    set(){

        this.initNestStracture();
        
    }
    
    initNestStracture(){
        
        this.addChild(this.outerRect)
        this.addChild(this.bar);
        
    }
    

}

