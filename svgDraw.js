function drawPath(svg, path, startX, startY, endX, endY) {
    var stroke =  parseFloat(path.attr("stroke-width"));
    if (svg.attr("height") <  endY)                 svg.attr("height", endY*2);
    if (svg.attr("width" ) < (startX + stroke) )    svg.attr("width", (startX + stroke)*2);
    if (svg.attr("width" ) < (endX   + stroke) )    svg.attr("width", (endX   + stroke)*2);

    path.attr("d", "M" + startX + " " + startY + "V " + endY)
}

function connectElements(svg, path, startElem, endElem) {
    var svgContainer= $("#svgContainer");

    if(startElem.offset().top > endElem.offset().top){
        var temp = startElem;
        startElem = endElem;
        endElem = temp;
    }

    var startCoord = startElem.offset();
    var endCoord   = endElem.offset();

    var startX = startCoord.left + 0.5*startElem.outerWidth();
    var startY = startCoord.top + 14

    var endX = endCoord.left + 0.5*endElem.outerWidth();
    var endY = endCoord.top + 14;

    // call function for drawing the path
    drawPath(svg, path, startX, startY, endX, endY);

}



function connectAll() {
    connectElements($("#svg1"), $("#path1"), $("#first-dot"),   $("#last-dot"));

}

$(document).ready(function() {
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
});

$(window).resize(function () {
    // reset svg each time 
    $("#svg1").attr("height", "0");
    $("#svg1").attr("width", "0");
    connectAll();
});