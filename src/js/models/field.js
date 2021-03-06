
export class Field {

    static color;
    static gridGap;
    static gridStrokerColor;

    static viewRect      = new Path.Rectangle(1, 1, 1, 1);
    static gridGroup     = new Group();
    static layer         = new Layer();

    static zoomInBtn     = document.getElementById("zoom-in-btn");
    static zoomOutBtn    = document.getElementById("zoom-out-btn");
    static zoomInput     = document.getElementById("zoom-input");
    static svg           = document.querySelector("svg");
    static svgTranslate  = document.getElementById("svg-translate");
    static svgScale      = document.getElementById("svg-scale")

}






/********************************
 * load message                 *
 * ******************************/
 console.log('loaded : field.js')
 /*******************************/