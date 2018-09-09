<?php
    $start = microtime(true);
    $x = $_POST["X"];
    $y = $_POST["Y"];
    $r = $_POST["R"];
    $r2 = $r / 2;
    $resultMessage;
    $currentTime = date("H:i:s");
?>
<!DOCTYPE HTML>
<html> 
<head> 
    <meta charset='UTF-8'> 
    <title>Проверка</title>
    <style type="text/css">
        
    </style>
</head> 
<body> 
    <table>
    <tr>  
        <td>X</td>
        <td>Y</td>
        <td>R</td> 
        <td>Состояние</td> 
        <td>Время</td> 
        <td>Время работы скрипта</td>  
    </tr>
<?php
    if (($x >= 0 && $y >= 0 && $y <= $r && $x <= $r) ||
        ($x <= 0 && $y <= 0 && ($x * $x + $y * $y) <= ($r2 * $r2)) ||
        ($x >= 0 && $y <= 0 && ($x - $y) <= $r2 )
        ){
            $resultMessage = "Точка попадает в область";
        }       
      else{
        $resultMessage = "Точка не попадает в область";
      }
          
      $time = microtime(true) - $start;
      echo "
      <tr>
        <td>$x</td> 
        <td>$y</td> 
        <td>$r</td>            
        <td>$resultMessage</td> 
        <td>$currentTime</td> 
        <td>$time</td> 
       </tr>
       ";
    ?>
    </table> <br>  
</body> 
</html>
