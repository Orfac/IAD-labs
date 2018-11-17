function changeR() {
    R = getR();
}

function getR(){
    for (let i = 0, length = r_radio_button.length; i < length; i++){
        if (r_radio_button[i].checked) return r_radio_button[i].value;
    }
}

function initRListener(){
    for (let i = 0; i < r_radio_button.length; i++) {
        r_radio_button[i].addEventListener("click", changeR, false);
    }
}

function setX(button) {
    if (button != null) {
        let buttonValue = Number(button.value);
        console.log(button.value);
        if (!isNaN(buttonValue) && buttonValue >= -5 && buttonValue <= 3){
            document.getElementsByName("X")[0].value = button.value;
            console.log("updated");
        }

    }
}

function onPlotClick(e) {
    //$('#results1').hide();
    if(R == '-1') {
        if (!isWarningShown){
            isWarningShown = true;
            draw_warning("R не задано");
        }
    } else {
        isWarningShown = false;
        draw_plot(plot_canvas,plot_context);
        getCursorPosition(e);
        draw_point(x,y);
        x -= 150;
        x = x/100*R;

        y -= 150;
        y *= -1;
        y = y/100*R;

        console.log(x);
        console.log(y);
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