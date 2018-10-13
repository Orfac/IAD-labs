<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title> Вариант 52545659</title>
  <link rel="stylesheet" type="text/css" href="<%request.getContextPath();%>styles/main.css">
  <script src="<%request.getContextPath();%>/main.js" type="text/javascript"></script>
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
  <img src="graph.jpg" alt="График">
</div>
<br>
<form id="params" method="post">
  <div class="input-field">
    <ul id="x-label">
      <li><b> X: </b></li>
      <li id="x-value"></li>
    </ul>
    <%for (int i = -5; i <= 3; i++) { %>
    <input type="button" name="X" value="<%= i %>" onclick="setX(this)">
    <%}%>

  </div>
  <div class="input-field">
    <b> Y: </b> <input type="text" name="Y" placeholder="(-5 .. 3)">
  </div>
  <div class="input-field">
    <b>R: </b>
    <%for (int i = 1; i <= 5; i++){ %>
    <input type="radio" name="R" value="<%= i %>"> <%= i%>
    <%}%>
  </div>
  <div class="input-field" onclick="return validate()">
    <input type="submit" value="Проверить точку">
  </div>
</form>
</body>
</html>