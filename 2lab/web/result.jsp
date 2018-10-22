<%@ page import="java.util.List" %>
<%@ page import="Model.Point" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <table class='points'>
        <tr>
            <td>X coordinate</td><td>Y coordinate</td><td>Radius</td><td>Entrance</td>
        </tr>
        <%
            List<Point> points = (List<Point>) pageContext.getServletContext().getAttribute("points");
    for (int i = 0; i < points.size(); i++) {
    
}
    </table>
</body>
</html>
