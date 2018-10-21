function validate() {
    let x = document.getElementById("x-value").innerText;
    let y = document.forms["params"]["Y"].value;
    let r = document.forms["params"]["R"].value;

    let isCorrect = true;
    let errorMessage = "";
    if (x === "") {
        errorMessage += "Неккоректно задано значение X\n";
        isCorrect = false;
    }
    if (y === "" || isNaN(y) || y <= "-5" || y >= "3") {
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
