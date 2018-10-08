import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String x = request.getParameter("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");
        System.out.println("bla");
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        if (x == null || y == null || r == null) {
            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        } else {
            request.getServletContext().getRequestDispatcher("/check").forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }
}
