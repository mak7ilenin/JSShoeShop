package jsontools;

import entity.User;
import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author pupil
 */
public class UserJsonBuilder {
    public JsonArray getUsersJsonArray(List<User> listUsers){
        JsonArrayBuilder jab = Json.createArrayBuilder();
        for(int i=0;i<listUsers.size();i++){
            jab.add(getUserJsonObject(listUsers.get(i)));
        }
        return jab.build();
    }
    public JsonObject getUserJsonObject(User user){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", user.getId());
        job.add("firstname", user.getFirstName());
        job.add("lastname", user.getLastName());
        job.add("username", user.getLogin());
        job.add("password", user.getPassword());
        job.add("salt", user.getSalt());
        job.add("phone", user.getPhone());
        job.add("money", user.getMoney());
        job.add("role", user.getRole());
        return job.build();
    }
}
