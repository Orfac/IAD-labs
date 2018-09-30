
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title> Вариант 52545659</title>
  <style src="main.css"></style>
  <script src="main.js" type="text/javascript"></script>
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
<form id="params" method="post" >
  <div class="input-field">
    <b> X: </b>

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
