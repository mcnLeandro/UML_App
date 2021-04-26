let canvas = document.querySelector('canvas');
let svg = document.querySelector('svg')
let g = document.querySelector('svg').querySelector('g');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let UMLClassStrokerColor = 'rgb(185, 198, 209)';
let lineWidthDafault = 1;

let colorArray = [
    '#15C2A6',
    '#353535',
    '#FEC828',
    '#EF4F2D',
    '#CB2624'
]

function distance(x1, y1, x2, y2){
    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}


// ===============================================
// mouse status
// ===============================================

let mouse = {
    x:undefined,
    y:undefined,
    
    lastDown:{
        x:undefined,
        y:undefined,
    },
    
    // is this really need ? but I thought lastDown and click is different. click is propablly same as mouseup, or little bit different
    click:{
        x:undefined,
        y:undefined,
    },
    isClicked:false,

    field:{
        x:undefined,
        y:undefined,
        lastDown:{
            x:undefined,
            y:undefined,
        },
    }
}

export {
    canvas,
    svg,
    g,
    c,
    UMLClassStrokerColor,
    lineWidthDafault,
    colorArray,
    distance,
    mouse
};

//module エラーが出る
//clicker emoiregameを参考にする