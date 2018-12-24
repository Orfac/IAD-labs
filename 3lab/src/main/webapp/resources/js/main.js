var plot_canvas;
var plot_context;
var x;
var y;
var r_radio_button;
var isWarningShown;
function init() {
    plot_canvas = document.getElementById("plot");
    plot_context = plot_canvas.getContext("2d");
    r_radio_button = document.getElementsByName("R");
    draw_plot(plot_canvas,plot_context);
    r = -1;
    isWarningShown = false;
    initrListener();
    plot_canvas.addEventListener("click", onPlotClick, false);
}