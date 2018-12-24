function check(pointElement, pointElement2, r) {
    let x = pointElement;
    let y = pointElement2;
    let isInCircle = x >= 0 && y >= 0
        && x * x + y * y < r * r;
    if (!isInCircle) {
        let isInRectangle = x <= 0 && y <= 0 &&
            Math.abs(x) < r && Math.abs(y) < r / 2;
        if (!isInRectangle) {
            // check if is in triangle
            return x >= 0 && y <= 0 && y >= 2 * x - r;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function setR(number) {
    r = number;
    let plot_canvas = document.getElementById("plot");
    let plot_context = plot_canvas.getContext("2d");
    draw_plot(plot_canvas,plot_context);
    isWarningShown = false;
    for (let i = 0; i < points.length; i++) {
        let isMatched = check(points[i]["x"],points[i]["y"],r);
        draw_point(points[i]["x"],points[i]["y"],isMatched? "green": "red",true);
    }
}

function updateX(xBox) {
    let xValues = document.getElementsByClassName('x-checkbox');
    for (let i = 0; i < xValues.length; i++) {
        xValues[i].checked = false;
    }
    xBox.checked = true;
}

let graphX;
let graphY;
function onPlotClick(e) {
    if(r === -1) {
        if (!isWarningShown){
            isWarningShown = true;
            draw_warning("R не задано");
        }
    } else {
        isWarningShown = false;
        clean_warning("R не задано");
        getCursorPosition(e);
        graphX = x;
        graphY = y;


        x -= 150;
        x = x/100*r;

        y -= 150;
        y *= -1;
        y = y/100*r;


        document.getElementById("j_idt11:hiddenX").value = x.toString();
        document.getElementById("j_idt11:hiddenY").value = y.toString();
        document.getElementById("j_idt11:hiddenR").value = r.toString();
        document.getElementById("j_idt11:ajax-button").click();


    }
}

function onSuccess() {
    let checkResult = document.getElementById("j_idt11:output").textContent;
    points.push({'x':x, 'y':y, 'matched':checkResult === "1"});
    if (checkResult === "1"){
        draw_point(graphX,graphY,"green");
    } else {
        draw_point(graphX,graphY,"red");
    }

}

function getCursorPosition(e) {
    if (e.pageX !== undefined && e.pageY !== undefined) {
        x = e.pageX;
        y = e.pageY;
    }
    // for old IE
    else {
        x = e.clientX;
        x += document.body.scrollLeft;
        x += document.documentElement.scrollLeft;

        y = e.clientY;
        y += document.body.scrollTop;
        y += document.documentElement.scrollTop;
    }
    x -= plot_canvas.offsetLeft ;
    y -= plot_canvas.offsetTop ;
}