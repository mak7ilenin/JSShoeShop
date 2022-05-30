package servlets;

import entity.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import session.UserFacade;
import tools.PasswordProtected;

/**
 *
 * @author makso
 */
@WebServlet(name = "ClientServlet", loadOnStartup = 1 , urlPatterns = {
    "/registration"
})
public class ClientServlet extends HttpServlet {
    @EJB private UserFacade userFacade;
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        JsonObjectBuilder job = Json.createObjectBuilder();
        String path = request.getServletPath();
        switch (path) {
            case "/registration":
                JsonReader jsonReader = Json.createReader(request.getReader());
                JsonObject jsonObject = jsonReader.readObject();
                String firstName = jsonObject.getString("firstName","");
                String lastName = jsonObject.getString("lastName","");
                String username = jsonObject.getString("username","");
                String password = jsonObject.getString("password","");
                String phone = jsonObject.getString("phone","");
                double money = Double.parseDouble(jsonObject.getString("money",""));
                if(firstName.isEmpty() || lastName.isEmpty() 
                        || username.isEmpty() || password.isEmpty() || phone.isEmpty()
                ){
                    job.add("info", "Заполните все поля!")
                       .add("firstName", firstName)
                       .add("lastName", lastName)
                       .add("username", username)
                       .add("password", password)
                       .add("phone", phone)
                       .add("money", money);
                    job.add("status", false);
                    try(PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                if(money == 0.0) {
                    job.add("info", "Введите сумму больше нуля!")
                    .add("firstName", firstName)
                       .add("lastName", lastName)
                       .add("username", username)
                       .add("password", password)
                       .add("phone", phone)
                       .add("money", money);
                    job.add("status", false);
                    try(PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                User newUser = new User();
                newUser.setFirstName(firstName);
                newUser.setLastName(lastName);
                newUser.setLogin(username);
                newUser.setPhone(phone);
                newUser.setMoney(money);
                PasswordProtected passwordProtected = new PasswordProtected();
                String salt = passwordProtected.getSalt();
                newUser.setSalt(salt);
                String userPassword = passwordProtected.getProtectedPassword(password, salt);
                newUser.setPassword(userPassword);
                newUser.setRole("USER");
                userFacade.create(newUser);
                job.add("info", "Аккаунт" + username + "успешно создан!")
                        .add("status", true);
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
