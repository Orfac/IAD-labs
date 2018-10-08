import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double x = (Double) request.getAttribute("x");
        double y = (Double) request.getAttribute("y");
        double r = (Double) request.getAttribute("r");
        AreaChecker checker = new AreaChecker();
        boolean isIn = checker.Check(x,y,r);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
