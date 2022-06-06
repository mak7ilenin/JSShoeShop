package jsontools;

import entity.Picture;
import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author makso
 */
public class PictureJsonBuilder {
    public JsonArray getPicturesJsonArray(List<Picture> listPictures){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i=0;i<listPictures.size();i++){
            jab.add(getPictureJsonObject(listPictures.get(i)));
        }
        return jab.build();
    }
    public JsonObject getPictureJsonObject(Picture picture){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", picture.getId());
        job.add("pathToFile", picture.getPathToFile());
        return job.build();
    }
}