var plot_canvas;
var plot_context;
var x;
var y;
var r = -1;
var isWarningShown;
var points;
function init() {
    points = [];
    plot_canvas = document.getElementById("plot");
    plot_context = plot_canvas.getContext("2d");
    draw_plot(plot_canvas,plot_context);
    isWarningShown = false;
    plot_canvas.addEventListener("click", onPlotClick, false);
}