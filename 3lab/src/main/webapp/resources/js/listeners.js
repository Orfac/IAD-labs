function changer() {
    r = getr();
}

function getr(){
    for (let i = 0, length = r_radio_button.length; i < length; i++){
        if (r_radio_button[i].checked) return r_radio_button[i].value;
    }
}

function initrListener(){
    for (let i = 0; i < r_radio_button.length; i++) {
        r_radio_button[i].addEventListener("click", changer, false);
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

var xhttp;

function onPlotClick(e) {
    if(r == '-1') {
        if (!isWarningShown){
            isWarningShown = true;
            draw_warning("r не задано");
        }
    } else {
        isWarningShown = false;
        clean_warning("r не задано");
        getCursorPosition(e);
        let graphX = x;
        let graphY = y;

        x -= 150;
        x = x/100*r;

        y -= 150;
        y *= -1;
        y = y/100*r;

        $.ajax({
            type: 'POST',
            url: "control",
            data: { 'X': x, 'Y': y, 'r': r, 'IsAjax': true},
            success: function (data,textStatus, xhR) { ajaxOnSucess(data,textStatus, xhR, graphX, graphY) },
            error: function (a, jqXHR, exception) { }
        });

        console.log(x);
        console.log(y);
    }
}
function ajaxOnSucess(data,textStatus, xhR, graphX, graphY) {
    if (data === "1"){
        draw_point(graphX,graphY,"green");
    } else {
        draw_point(graphX,graphY,"red")
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