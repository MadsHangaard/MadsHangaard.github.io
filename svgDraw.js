function drawPath(svg, path, startX, startY, endY) {
    // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)
    var stroke =  parseFloat(path.attr("stroke-width"));
    if (svg.attr("height") <  endY)                 svg.attr("height", endY*2);
    if (svg.attr("width" ) < (startX + stroke) )    svg.attr("width", (startX + stroke)*2);

    path.attr("d", "M" + startX + " " + startY + "V " + endY)
}

function connectElements(svg, path, startElem, endElem) {
    if(startElem.offset().top > endElem.offset().top){
        var temp = startElem;
        startElem = endElem;
        endElem = temp;
    }

    var startCoord = startElem.offset();
    var endCoord   = endElem.offset();

    var startX = startCoord.left + 0.5*startElem.outerWidth();
    var startY = startCoord.top + 14

    var endY = endCoord.top + 14;

    console.log("innerHeight: " + window.innerHeight)
    console.log("outerHieght: " + window.outerHeight)

    // call function for drawing the path
    drawPath(svg, path, startX, startY, endY);

}


function connectAll() {
    connectElements($("#svg1"), $("#path1"), $("#first-dot"),   $("#last-dot"));

}

$(window).resize(function () {
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
});

$(document).ready(function() {
    
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
});

window.onload = function () {
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
};