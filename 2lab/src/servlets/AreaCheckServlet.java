package servlets;

import model.AreaChecker;
import model.Point;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = request.getServletContext();
        Object pointsObject = context.getAttribute("points");
        List<Point> points;
        if (pointsObject == null) {
            points = new ArrayList<Point>();
        } else {
            points = (ArrayList<Point>) pointsObject;
        }

        double x = 0;
        double y = 0;
        int r = 0;
        try {
            x = Double.parseDouble(request.getParameter("X"));
            y = Double.parseDouble(request.getParameter("Y"));
            r = Integer.parseInt(request.getParameter("R"));
        } catch (NumberFormatException ex) {
            response.sendError(400);
        }

        Point point = new Point(x, y, r);
        AreaChecker checker = new AreaChecker();
        checker.Check(point);

        points.add(point);

        context.setAttribute("points", points);
        context.setAttribute("point",point);

        String isAjax = request.getParameter("IsAjax");
        if (isAjax == null)
            context.getRequestDispatcher("/result.jsp").forward(request, response);
        else {
            response.getWriter().print(point.isMatched ? 1 : 0);
        }
    }
}