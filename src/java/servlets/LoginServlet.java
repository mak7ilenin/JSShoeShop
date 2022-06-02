package servlets;

import entity.History;
import entity.Model;
import entity.User;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneOffset;
import java.util.Calendar;
import java.util.Date;
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
import javax.servlet.http.HttpSession;
import jsontools.ModelJsonBuilder;
import jsontools.UserJsonBuilder;
import session.HistoryFacade;
import session.ModelFacade;
import session.UserFacade;
import tools.PasswordProtected;

/**
 *
 * @author pupil
 */
@WebServlet(name = "LoginServlet", loadOnStartup = 0, urlPatterns = {
    "/login",
    "/logout",
    "/buyModel"
})
public class LoginServlet extends HttpServlet {
    @EJB private UserFacade userFacade;
    @EJB private ModelFacade modelFacade;
    @EJB private HistoryFacade historyFacade;
    
    Calendar calendar = Calendar.getInstance();
    Date date = calendar.getTime();
    
    @Override
    public void init() throws ServletException {
        super.init();
        if(userFacade.count()>0) return;
        User user = new User();
        user.setFirstName("Maksim");
        user.setLastName("Dzjubenko");
        user.setPhone("53005207");
        user.setMoney(248.46);
        user.setLogin("admin");
        PasswordProtected passwordProtected = new PasswordProtected();
        String salt = passwordProtected.getSalt();
        user.setSalt(salt);
        String adminPassword = passwordProtected.getProtectedPassword("12345", salt);
        user.setPassword(adminPassword);
        user.setRole("ADMINISTRATOR");
        userFacade.create(user);
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        HttpSession session = null;
        JsonObjectBuilder job = Json.createObjectBuilder();
        String path = request.getServletPath();
        switch (path) {
            case "/login":
                JsonReader jsonReader = Json.createReader(request.getReader());
                JsonObject jsonObject = jsonReader.readObject();
                String username = jsonObject.getString("username","");
                String password = jsonObject.getString("password","");
                User authUser = userFacade.findByLogin(username);
                if(authUser == null){
                    job.add("info", "Нет такого пользователя!")
                       .add("auth", false);
                    try (PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                }
                PasswordProtected pp = new PasswordProtected();
                password = pp.getProtectedPassword(password, authUser.getSalt());
                if(!password.equals(authUser.getPassword())){
                    job.add("info", "Неверный пароль!")
                       .add("auth", false);
                    try (PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                session = request.getSession(true);
                session.setAttribute("authUser", authUser);
                job.add("info", "Приветствуем вас, " + authUser.getFirstName() + "!")
                   .add("auth",true)
                   .add("user", new UserJsonBuilder().getUserJsonObject(authUser));          
                try (PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/logout":
                authUser = null;
                session = request.getSession(false);
                if(session != null) {
                    session.invalidate();
                }
                break;
            case "/buyModel":
                jsonReader = Json.createReader(request.getReader());
                jsonObject = jsonReader.readObject();
                
                Long modelId = Long.parseLong(jsonObject.getString("id", ""));
                Model model = modelFacade.find(modelId);
                User user = (User) session.getAttribute("authUser");
                
                if(user.getMoney() >= model.getPrice() && model.getAmount() != 0) {
                    user.setMoney(user.getMoney() - model.getPrice());
                    model.setAmount(model.getAmount() - 1);
                    
                    History history = new History();
                    history.setModel(model);
                    history.setUser(user);
                    history.setBuy(Date.from(LocalDate.now().atTime(LocalTime.now().plusHours(date.getHours() - 13)).toInstant(ZoneOffset.UTC)));
                    history.setGain(history.getGain() + model.getPrice());
                    modelFacade.edit(model);
                    userFacade.edit(user);
                    historyFacade.create(history);
                    ModelJsonBuilder mjb = new ModelJsonBuilder();
                    UserJsonBuilder ujb = new UserJsonBuilder();
                    job.add("status", true)
                       .add("model", mjb.getModelJsonObject(model))
                            .add("user", ujb.getUserJsonObject(user))
                                .add("info", "Покупка прошла успешно!");
                    }if(user.getMoney() < model.getPrice()) {
                        job.add("info", "У вас недостаточно денег!");
                    }if(model.getAmount() == 0) {
                        job.add("info", "Экземпляры данной модели отсутствуют!");
                    }
                    try (PrintWriter out = response.getWriter()) {
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