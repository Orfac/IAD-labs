
function setR(number) {
    r = number;
}

function updateX(xBox) {
    let xValues = document.getElementsByClassName('x-checkbox');
    for (let i = 0; i < xValues.length; i++) {
        xValues[i].checked = false;
    }
    xBox.checked = true;
}

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
        let graphX = x;
        let graphY = y;

        x -= 150;
        x = x/100*r;

        y -= 150;
        y *= -1;
        y = y/100*r;


        document.getElementById("j_idt11:hiddenX").textContent = toString(x);
        document.getElementById("j_idt11:hiddenY").textContent = toString(y);
        document.getElementById("j_idt11:hiddenR").textContent = toString(r);
        document.getElementById("j_idt11:ajax-button").click();
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