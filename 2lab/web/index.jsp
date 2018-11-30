<%@ page import="model.Point" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
  <meta charset="UTF-8">
  <title> Лабораторная №2</title>
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/styles/main.css">
  <script src="${pageContext.request.contextPath}/static/scripts/validate.js" type="text/javascript"></script>
  <script src="${pageContext.request.contextPath}/static/scripts/listeners.js" type="text/javascript"></script>
  <script src="${pageContext.request.contextPath}/static/scripts/draw.js" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> </script>
</head>
<body>
<header>
  <div>
    <ul>
      <li>Группа P3217
      <li>Молодецкий Арсений
      <li>Вариант 52545659
    </ul>
  </div>
</header>
<div class="main-content">
  <div class="main-content-elem">
    <canvas id="plot" width="300" height="300"></canvas>
  </div>
  <div class="main-content-elem">
    <form id="params" method="post" action="control">
      <div class="input-field">
        <b>X:</b>
        <input class="x-value" type="text"  name="X" width="30px" value="" >
        <%for (int i = -5; i <= 3; i++) { %>
        <input type="button" value="<%= i %>" onclick="setX(this)">
        <%}%>

      </div>
      <div class="input-field">
        <b> Y: </b>
        <input type="text" name="Y" placeholder="(-5 .. 3)">
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
  </div>

</div>
<table class='points'>
    <tr>
        <td>X coordinate</td><td>Y coordinate</td><td>Radius</td><td>Entrance</td>
    </tr>
    <%
        Object pointsObject = pageContext.getServletContext().getAttribute("points");
        if(pointsObject != null){
            List<Point> points = (ArrayList<Point>) pointsObject;

            for (Point point : points) {%>
    <tr>
        <td><%=point.x %></td>
        <td><%=point.y %></td>
        <td><%=point.R %></td>
        <% if (point.isMatched) {%>
        <td class="matched-cell">
                <%="Yes"%>
                <%} else {%>
        <td class="unmatched-cell">
            <%="No"%>
            <%}%>
        </td>
    </tr>
    <%}%>
    <%}%>


</table>
</body>
<script src="${pageContext.request.contextPath}/static/scripts/init.js" type="text/javascript"></script>

</html>