<%@ page import="java.util.List" %>
<%@ page import="model.Point" %>
<%@ page import="java.util.ArrayList" %>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Results</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/styles/result.css">
</head>
<body>
<table class='points'>
    <tr>
        <td>X coordinate</td><td>Y coordinate</td><td>Radius</td><td>Entrance</td>
    </tr>
    <%  Object pointsObject = pageContext.getServletContext().getAttribute("points");
        List<Point> points = (ArrayList<Point>) pointsObject;

        for (Point point : points) {%>
    <tr>
        <td><%=point.x %></td>
        <td><%=point.y %></td>
        <td><%=point.R %></td>
        <td><% if (point.isMatched) {%>
            <%="Yes"%>
            <%} else {%>
            <%="No"%>
            <%}%>
        </td>
    </tr>
        <%}%>


</table>
<div class="return-button">
    <form action="${pageContext.request.contextPath}/">
        <input type="submit" value="Return to home page" />
    </form>
</div>

</body>
</html>