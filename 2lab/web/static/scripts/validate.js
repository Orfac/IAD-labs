function validate() {
    let x = document.getElementsByClassName("x-value")[0].value;
    let y = document.forms["params"]["Y"].value;
    let r = document.forms["params"]["R"].value;

    let isCorrect = true;
    let errorMessage = "";
    if (x === "" || isNaN(x) || !validateX(x)) {
        errorMessage += "Неккоректно задано значение X\n";
        isCorrect = false;
    }
    document.forms["params"]["X"].value = x;
    if (y === "" || isNaN(y) || y < -5 || y > 3) {
        errorMessage += "Некорректно задано значение Y\n";
        isCorrect = false;
    }
    if (r === "") {
        errorMessage += "Неккоректно задано значение R\n";
        isCorrect = false;
    }
    if (!isCorrect) {
        alert(errorMessage);
    }
    return isCorrect;
}

function validateX(x) {
    return x === "-5" || x === "-4" || x === "-3" || x === "-2" || x === "-1"
        || x === "0" || x === "1" || x === "2" || x === "3";
}