<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"> 
    <title> Вариант 28710</title>
    <style type="text/css">
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
            if (x == "" ){
                
            }
            return true;
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
            <b> Y: </b> <input type="text" name="Y">     
        </div>      
        <div class="input-field">
            <b> R: </b> <input type="text" name="R">
        </div>
        <div class="input-field" onclick="return validate()">
            <input type="submit" value="Проверить точку"> 
        </div>
    </form>
</body>
</html>
