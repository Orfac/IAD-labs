<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <meta charset="UTF-8">
    <title> Лабораторная №2</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/styles/main.css">
    <script src="${pageContext.request.contextPath}/scripts/validate.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/scripts/listeners.js" type="text/javascript"></script>
    <script src="${pageContext.request.contextPath}/scripts/draw.js" type="text/javascript"></script>
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
    <form id="params" method="post" action="check">
        <div class="input-field">
            <div id="x-label">
               <div> <b> X: </b></div>
                <div id="x-value"></div>
            </div>
            <%for (int i = -5; i <= 3; i++) { %>
            <input type="button" name="X" value="<%= i %>" onclick="setX(this)">
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
</body>
<script src="${pageContext.request.contextPath}/scripts/init.js" type="text/javascript"></script>
</html>