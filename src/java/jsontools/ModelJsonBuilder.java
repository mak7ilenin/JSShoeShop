/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsontools;

import entity.Model;
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
public class ModelJsonBuilder {
    public JsonArray getModelsJsonArray(List<Model> listModels){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i=0;i<listModels.size();i++){
            jab.add(getModelJsonObject(listModels.get(i)));
        }
        return jab.build();
    }
    public JsonObject getModelJsonObject(Model model){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", model.getId());
        job.add("modelName", model.getModelName());
        job.add("modelFirm", model.getModelFirm());
        job.add("modelSize", model.getModelSize());
        job.add("modelPrice", model.getPrice());
        job.add("modelAmount", model.getAmount());
        return job.build();
    }
}
