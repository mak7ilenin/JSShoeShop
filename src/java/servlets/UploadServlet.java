package servlets;

import entity.Model;
import entity.Picture;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import jsontools.PictureJsonBuilder;
import session.ModelFacade;
//import org.imgscalr.Scalr;
import session.PictureFacade;

/**
 *
 * @author makso
 */
@WebServlet(name = "UploadServlet", urlPatterns = {
    "/getListPictures",
    "/getPicture",
    "/uploadPicture",
    "/getModelPicture"
})
@MultipartConfig()
public class UploadServlet extends HttpServlet {
    @EJB private PictureFacade pictureFacade;
    @EJB private ModelFacade modelFacade;
//    private final String imagesFolder = "D:\\Shoeger\\ShoeShop";
    private final String imagesFolder = "C:\\Users\\makso\\Documents\\NetBeansProjects\\JSShoeShop\\web\\Images\\upload";
    private final String uploadFolder = "Images\\upload\\";
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
        request.setCharacterEncoding("UTF-8");
        String path = request.getServletPath();
        JsonObjectBuilder job = Json.createObjectBuilder();
//        JsonReader jsonReader = Json.createReader(request.getReader());
//        JsonObject jsonObject = jsonReader.readObject();                         ЭТИ СТРОЧКИ - ЗЛО
        switch (path) {
            case "/uploadPicture":
                String imageName  = request.getParameter("inputTag");
                Picture newPicture = new Picture();
                try {
                    newPicture.setPathToFile(getPathToPicture(request.getPart("inputTag")));
                } catch (Exception e) {
                    imageName = request.getParameter("inputTag");
                    newPicture.setPathToFile(getPathToPicture(imageName));
                }
                pictureFacade.create(newPicture);
                PictureJsonBuilder pjb = new PictureJsonBuilder();
                job.add("status", true);
                job.add("picture", pjb.getPictureJsonObject(newPicture));
                job.add("info", "Изображение успешно загружено!");
                try (PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/getListPictures":
                String[] picturesFileName = getPictureFileName();
                JsonArrayBuilder jab = Json.createArrayBuilder();
                for (int i = 0; i < picturesFileName.length; i++) {
                    jab.add(picturesFileName[i]);
                }
                
                job.add("status", true);
                job.add("info", "Создан список изображений");
                job.add("pictures",jab.build());
                try (PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
            case "/getPicture":
                JsonReader jsonReader = Json.createReader(request.getReader());
                JsonObject jsonObject = jsonReader.readObject();
                String picturePath = jsonObject.getString("id", "");
                List<Picture> pictures = pictureFacade.findAll();
                String dirPathToFile = imagesFolder + "\\" + picturePath;
                String pathToFile = uploadFolder + picturePath;
                System.out.println(pathToFile);
                for(Picture picture : pictures) {
                    if(picture.getPathToFile().equals(dirPathToFile)) {
                        String picPathToFile = pathToFile.replace("\\", "/");
                        System.out.println(picPathToFile);
                        job.add("status", true);
                        job.add("picturePath", picPathToFile);
                        try (PrintWriter out = response.getWriter()) {
                            out.println(job.build().toString());
                        }
                    }
                }
                break;
            case "/getModelPicture":
                jsonReader = Json.createReader(request.getReader());
                jsonObject = jsonReader.readObject();
                Long modelId = Long.parseLong(jsonObject.getString("id", ""));
                Model model = modelFacade.find(modelId);
                String pictureName = model.getPicture().getPathToFile();
                String fileName = pictureName.replace(imagesFolder + "\\", "");
//                System.out.println(fileName);
                String normalPicPath = uploadFolder + fileName;
                job.add("status", true);
                job.add("pictureSource", normalPicPath);
                try (PrintWriter out = response.getWriter()) {
                    out.println(job.build().toString());
                }
                break;
        }
    }
    private String getPathToPicture(Part part) throws IOException {
        String pathToPicture = imagesFolder + File.separator + getFileName(part);
        File file = new File(pathToPicture);
        file.mkdirs();
        try(InputStream fileContent = part.getInputStream()){
            Files.copy(fileContent, file.toPath(), StandardCopyOption.REPLACE_EXISTING);
        }
        return pathToPicture;
    }
    private String getPathToPicture(String pictureFileName){
        File uploadFolder = new File(imagesFolder);
        File[] listOfFiles = uploadFolder.listFiles();
        for (int i = 0; i < listOfFiles.length; i++) {
            if(listOfFiles[i].isFile()){
                if(pictureFileName.equals(listOfFiles[i].getName())){
                    return listOfFiles[i].getPath();
                }
            }
        }
        return "";
    }
    private String[] getPictureFileName(){
        Set<String> setPathToPicture = new HashSet<>();
        File uploadFolder = new File(imagesFolder);
        File[] listOfFiles = uploadFolder.listFiles();
        for (int i = 0; i < listOfFiles.length; i++) {
            if(listOfFiles[i].isFile()){
                setPathToPicture.add(listOfFiles[i].getName());
            }
        }
        return setPathToPicture.toArray(new String[setPathToPicture.size()]);
    }
    private String getFileName(Part part){
        final String partHeader = part.getHeader("content-disposition");
        for (String content : part.getHeader("content-disposition").split(";")){
            if(content.trim().startsWith("filename")){
                return content
                        .substring(content.indexOf('=')+1)
                        .trim()
                        .replace("\"",""); 
            }
        }
        return null;
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