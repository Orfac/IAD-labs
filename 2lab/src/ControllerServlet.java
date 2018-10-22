import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;


public class ControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Map<String,String[]> parameters = request.getParameterMap();
        ServletContext context = request.getServletContext();

        if (parameters.containsKey("X") &&
                parameters.containsKey("Y") &&
                parameters.containsKey("R")) {

            context.getRequestDispatcher("/check").forward(request, response);
            return;
        }

        context.getRequestDispatcher("/index.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request,response);
    }
}