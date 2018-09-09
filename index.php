<?php
    
    $_SESSION['params'] = array();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title> Вариант 28710</title>
    <style type="text/css">
        header
        {
            font-size: 10pt;
            font-family: Sans-Serif;
            color: #353535;
        }
        li 
        {
            font-weight: bold;
        }
        .image 
        {
            margin: auto; width: 200px; 
        }
        .input-field
        {
            text-align: center; 
        }
        input 
        {           
            padding: 5px 10px; 
            color: #353535; 
            margin-top: 20px;
        }
    </style>
    <script type="text/javascript">
        function validate() {
            var x = document.forms["params"]["X"].value;
            var y = document.forms["params"]["Y"].value;
            var r = document.forms["params"]["R"].value;
            var isCorrect = true;
            var errorMessage = "";
            if (x ==""){
                isCorrect = false;
                errorMessage +="Неккоректно задано значение X\n";
            }
            if (y == "" || y.length > 10 || isNaN(y) || y < -3 || y > 3){
                errorMessage += "Некорректно задано значение Y\n";
                isCorrect = false;
            }
            if (r == "" || r.length > 10 || isNaN(r) || r < 2 || r > 5){
                errorMessage += "Некорректно задано значение R";
                isCorrect = false;
            }
            if (isCorrect){
                return true;
            } else {
                alert(errorMessage);
                return false;
            }
        }
    </script>
</head>
<body>
    <header>
        <div>
            <ul>
                <li>Группа P3217
                <li>Молодецкий Арсений 
                <li>Вариант 28710 
            </ul>
        </div>
    </header>
    <div class="image">
        <img src="graph.png" alt="График"> 
    </div>
    <form id="params" method="post" action="check.php">
        <div class="input-field">
            <b> X: </b>
            <?php
                for ($i=-3; $i <= 5 ; $i++) { 
                    echo '<input type="radio" name="X" value="',$i,'">',$i;
                }
            ?> 
        </div>
        <div class="input-field">   
            <b> Y: </b> <input type="text" name="Y" placeholder="(-3 .. 3)">     
        </div>      
        <div class="input-field">
            <b> R: </b> <input type="text" name="R" placeholder="(2 .. 5)">
        </div>
        <div class="input-field" onclick="return validate()">
            <input type="submit" value="Проверить точку"> 
        </div>
    </form>
</body>
</html>
