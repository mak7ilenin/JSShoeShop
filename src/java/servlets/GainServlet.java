package servlets;

import entity.History;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.List;
import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import session.HistoryFacade;

/**
 *
 * @author makso
 */
@WebServlet(name = "GainServlet", urlPatterns = {
    "/allGain",
    "/septemberGain",
    "/octoberGain",
    "/novemberGain",
    "/decemberGain",
    "/januaryGain",
    "/februaryGain",
    "/marchGain",
    "/aprilGain",
    "/mayGain",
    "/juneGain",
    "/julyGain",
    "/augustGain"
})
public class GainServlet extends HttpServlet {
    @EJB private HistoryFacade historyFacade;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        JsonObjectBuilder job = Json.createObjectBuilder();
        String path = request.getServletPath();
        List<History> histories = historyFacade.findAll();
        DecimalFormat df = new DecimalFormat("0.00");
        double gainForAMonth = 0;
        switch(path) {
            case "/allGain":
                double allGain = 0;
                for (History history : histories) {
                    allGain += history.getGain();
                }
                df = new DecimalFormat("0.00");
                job.add("status", true).add("allGain", df.format(allGain));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/januaryGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 0) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("januaryGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/februaryGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 1) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("februaryGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/marchGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 2) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("marchGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/aprilGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 3) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("aprilGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/mayGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 4) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("mayGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/juneGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 5) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("juneGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/julyGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 6) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("julyGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/augustGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 7) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("augustGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/septemberGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 8) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("septemberGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/octoberGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 9) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("octoberGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/novemberGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 10) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("novemberGain", df.format(gainForAMonth));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/decemberGain":
                for (History history : histories) {
                    if(history.getBuy().getMonth() == 11) {
                        gainForAMonth += history.getGain();
                    }
                }
                job.add("status", true).add("decemberGain", df.format(gainForAMonth));
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
