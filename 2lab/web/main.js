function validate() {
    var x = document.forms["params"]["X"].value;
    var y = document.forms["params"]["Y"].value;
    var r = document.forms["params"]["R"].value;
    console.log(x[0]);
    console.log(y[0]);
    var isCorrect = true;
    var errorMessage = "";
    if (x === "") {
        isCorrect = false;
        errorMessage += "Неккоректно задано значение X\n";
    }
    if (y === "" || isNaN(y) || y <= "-3" || y >= "3") {
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