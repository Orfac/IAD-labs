function init() {
    var plot_canvas = document.getElementById("plot");
    var plot_context = plot_canvas.getContext("2d");
    var r_radio_button = document.getElementsByName("R");
    draw_plot(plot_canvas,plot_context);
}