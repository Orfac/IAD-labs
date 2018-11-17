package servlets;

import model.AreaChecker;
import model.Point;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = request.getServletContext();
        Object pointsObject = context.getAttribute("points");
        List<Point> points;
        if (pointsObject == null){
            points = new ArrayList<Point>();
        } else {
            points = (ArrayList<Point>) pointsObject;
        }

        double x = Double.parseDouble(request.getParameter("X"));
        double y = Double.parseDouble(request.getParameter("Y"));
        int r = Integer.parseInt(request.getParameter("R"));

        Point point = new Point(x,y,r);
        AreaChecker checker = new AreaChecker();
        checker.Check(point);

        points.add(point);

        context.setAttribute("points",points);
        context.getRequestDispatcher("/result.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}