package servlets;

import entity.Model;
import entity.Picture;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
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
import jsontools.ModelJsonBuilder;
import session.ModelFacade;
import session.PictureFacade;

/**
 *
 * @author makso
 */
@WebServlet(name = "ModelServlet", urlPatterns = {
    "/createModel",
    "/getListModels",
    "/getModel",
    "/editModel"
})
public class ModelServlet extends HttpServlet {
    @EJB private ModelFacade modelFacade;
    @EJB private PictureFacade pictureFacade;
    private final String imagesFolder = "C:\\Users\\makso\\Documents\\NetBeansProjects\\JSShoeShop\\web\\Images\\upload";

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        JsonObjectBuilder job = Json.createObjectBuilder();
        String path = request.getServletPath();
        switch(path) {
            case "/createModel":
                JsonReader jsonReader = Json.createReader(request.getReader());
                JsonObject jsonObject = jsonReader.readObject();
                String pictureName = jsonObject.getString("modelPicture", "");
                String modelName = jsonObject.getString("modelName", "");
                String modelFirm = jsonObject.getString("modelFirm", "");
                String modelSize = jsonObject.getString("modelSize", "");
                Double price = Double.parseDouble(jsonObject.getString("modelPrice", ""));
                BigDecimal bd = new BigDecimal(price).setScale(2, RoundingMode.HALF_UP);
                double decimalPrice = bd.doubleValue();
                int amount = Integer.parseInt(jsonObject.getString("modelAmount", ""));
                
                if("".equals(modelName) 
                        || "".equals(modelFirm) 
                        || "".equals(modelSize)
                        || "".equals(decimalPrice)
                        || "".equals(amount)) {
                    job.add("info", "Заполните все поля");
                    try(PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                if(amount < 1) {
                    job.add("info", "Введите колчество больше нуля!");
                    try(PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                if(decimalPrice == 0.0) {
                    job.add("info", "Введите сумму больше нуля!");
                    try(PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                if(pictureName.isEmpty()) {
                    job.add("info", "Выберите изображение!");
                    try(PrintWriter out = response.getWriter()) {
                        out.println(job.build().toString());
                    }
                    break;
                }
                
                Model newModel = new Model();
                newModel.setModelName(modelName);
                newModel.setModelFirm(modelFirm);
                newModel.setModelSize(modelSize);
                newModel.setPrice(decimalPrice);
                newModel.setAmount(amount);
                String pictureDir = imagesFolder + "\\" + pictureName;
                Picture picture = pictureFacade.findByPath(pictureDir);
                newModel.setPicture(picture);
                modelFacade.create(newModel);
                job.add("info", "Модель " + modelName + " успешно добавлена!")
                        .add("status", true);
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/getListModels":
                List<Model> models = modelFacade.findAll();
                ModelJsonBuilder mjb = new ModelJsonBuilder();
                if(!models.isEmpty()) {
                    job.add("status", true)
                        .add("options", mjb.getModelsJsonArray(models));
                }
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/getModel":
                jsonReader = Json.createReader(request.getReader());
                jsonObject = jsonReader.readObject();
                String modelId = jsonObject.getString("id", "");
                Model editingModel = modelFacade.find(Long.parseLong(modelId));
                mjb = new ModelJsonBuilder();
                job.add("status", true)
                    .add("info", "Вы редактируете: " + editingModel.getModelFirm() + " " + editingModel.getModelName())
                    .add("model", mjb.getModelJsonObject(editingModel));
                try(PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/editModel":
                jsonReader = Json.createReader(request.getReader());
                jsonObject = jsonReader.readObject();
                modelId = jsonObject.getString("id", "");
                modelName = jsonObject.getString("modelName", "");
                modelFirm = jsonObject.getString("modelFirm", "");
                modelSize = jsonObject.getString("modelSize", "");
                Double modelPrice = Double.parseDouble(jsonObject.getString("modelPrice", ""));
                bd = new BigDecimal(modelPrice).setScale(2, RoundingMode.HALF_UP);
                decimalPrice = bd.doubleValue();
                int modelAmount = Integer.parseInt(jsonObject.getString("modelAmount", ""));
                
                Model editModel = modelFacade.find(Long.parseLong(modelId));
                editModel.setModelName(modelName);
                editModel.setModelFirm(modelFirm);
                editModel.setModelSize(modelSize);
                editModel.setPrice(decimalPrice);
                editModel.setAmount(modelAmount);
                modelFacade.edit(editModel);
                
                mjb = new ModelJsonBuilder();
                job.add("status", true)
                    .add("info", "Модель " + editModel.getModelFirm() + " " + editModel.getModelName() + " изменена")
                    .add("editedModel", mjb.getModelJsonObject(editModel));
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
;