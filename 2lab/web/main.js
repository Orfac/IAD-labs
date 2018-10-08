function validate() {
    var x = document.getElementById("x-value").innerText;
    var y = document.forms["params"]["Y"].value;
    var r = document.forms["params"]["R"].value;

    var isCorrect = true;
    var errorMessage = "";
    if (x === "") {
        isCorrect = false;
        errorMessage += "Неккоректно задано значение X\n";
    }
    if (y === "" || isNaN(y) || y <= "-5" || y >= "3") {
        errorMessage += "Некорректно задано значение Y\n";
        isCorrect = false;
    }
    if (r === "" || isNaN(r) || y <= "2" || r >= "5") {
        errorMessage += "Некорректно задано значение R";
        isCorrect = false;
    }
    if (isCorrect) {
        return true;
    } else {
        alert(errorMessage);
        return false;
    }
}

function isInt(value) {
    return parseInt(value, 10) === value;
}

function setX(button) {
    if (button != null) {
        var buttonValue = Number(button.value);
        if (!isNaN(buttonValue) && buttonValue >= -5 && buttonValue <= 3)
            document.getElementById("x-value").innerText = button.value;
    }
}