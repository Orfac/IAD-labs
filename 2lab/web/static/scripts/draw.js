function draw_plot(canvas,context) {
    fill_white(canvas, context);
    context.beginPath();
    draw_circle(context);
    draw_square(context);
    draw_triangle(context);
    context.closePath();
    context.beginPath();
    draw_ox(context);
    draw_oy(context);
    context.closePath();
    context.stroke();
}

function draw_oy(context) {
    context.moveTo(150, 30);
    context.lineTo(140, 40);
    context.moveTo(150, 30);
    context.lineTo(160, 40);
    context.moveTo(150, 30);
    context.lineTo(150, 270);
    context.moveTo(30, 150);
}

function draw_ox(context){
    context.moveTo(30, 150);
    context.lineTo(270, 150);
    context.lineTo(260, 140);
    context.moveTo(270, 150);
    context.lineTo(260, 160);
}

function draw_triangle(context){

    context.moveTo(150, 150);
    context.lineTo(100, 150);
    context.lineTo(150, 250);
    context.lineTo(150, 150);
    context.fillStyle = '#3399ff';
    context.fill();
}

function draw_square(context){
    context.rect(50, 50, 100, 100);
    context.fillStyle = '#3399ff';
    context.fill();
}

function draw_circle(context){
    context.arc(150, 150, 100, 0, Math.PI/2);
    context.lineTo(150, 150);
    context.fillStyle = '#3399ff';
    context.fill();
}

function fill_white(canvas,context) {
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_warning(message){
    plot_context.beginPath();
    plot_context.font = "15px Comic Sans MS";
    plot_context.fillStyle = "red";
    plot_context.textAlign = "center";
    plot_context.fillText(message, 150, 285);
    plot_context.closePath();
}

function clean_warning(message) {
    plot_context.beginPath();
    plot_context.font = "15px Comic Sans MS";
    plot_context.fillStyle = "white";
    plot_context.textAlign = "center";
    plot_context.fillText(message, 150, 285);
    plot_context.closePath();
}

function draw_point(x,y){
    plot_context.beginPath();
    plot_context.arc(x, y, 3, 0, 2 * Math.PI);
    plot_context.fillStyle = "red";
    plot_context.fill();
    plot_context.closePath();
}

// todo Доделать скрипт с переотрисовкой точек, проблема с радиусом
function redraw_point(x,y,isHitted) {
    x -= 150;
    x = x/100*R;

    x = x * 100 / r;
    y -= 150;
    y *= -1;
    y = y/100*R;

}