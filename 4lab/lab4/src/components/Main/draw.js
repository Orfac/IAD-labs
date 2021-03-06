
function draw_plot(canvas,context) {
    fill_white(canvas, context);
    context.beginPath();
    draw_circle(context);
    draw_rectangle(context);
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
    context.lineTo(200, 150);
    context.lineTo(150, 250);
    context.lineTo(150, 150);
    context.fillStyle = '#3399ff';
    context.fill();
}

function draw_rectangle(context){
    context.rect(50, 150, 100, 50);
    context.fillStyle = '#3399ff';

    context.fill();
}

function draw_circle(context){
    context.arc(150, 150, 100, -Math.PI/2, 0);
    context.lineTo(150, 150);
    context.fillStyle = '#3399ff';
    context.fill();
}

function fill_white(canvas,context) {
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_message(context,message,color) {
    context.beginPath();
    context.font = "15px Comic Sans MS";
    context.fillStyle = color;
    context.textAlign = "center";
    context.fillText(message, 150, 285);
    context.closePath();
}

function draw_warning(message){
    draw_message(message,"red");
}

function clean_warning(message) {
    draw_message(message,"white");
    draw_message(message,"white");
    draw_message(message,"white");
    draw_message(message,"white");
}

function draw_point(context, x,y,color,isReal){
    let r = 1;
    context.beginPath();
    if (isReal){
        let x2 = x / r * 100;
        x2 += 150;

        let y2 = y / r * 100;
        y2 *= -1;
        y2 += 150;

        context.arc(x2, y2, 3, 0, 2 * Math.PI);
    } else {
        context.arc(x, y, 3, 0, 2 * Math.PI);
    }

    context.fillStyle = color;
    context.fill();
    context.closePath();
}
