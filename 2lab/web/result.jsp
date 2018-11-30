<%@ page import="java.util.List" %>
<%@ page import="model.Point" %>
<%@ page import="java.util.ArrayList" %>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Results</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/styles/result.css">
</head>
<body>
<table class='points'>
    <tr>
        <td>X coordinate</td><td>Y coordinate</td><td>Radius</td><td>Entrance</td>
    </tr>
    <%
        Object pointObject = pageContext.getServletContext().getAttribute("point");
        Point point = (Point) pointObject;%>
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


</table>
<div class="return-button">
    <form action="${pageContext.request.contextPath}/">
        <input type="submit" value="Return to home page" />
    </form>
</div>

</body>
</html>