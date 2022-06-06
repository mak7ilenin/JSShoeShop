package session;

import entity.Picture;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author makso
 */
@Stateless
public class PictureFacade extends AbstractFacade<Picture> {

    @PersistenceContext(unitName = "JSShoeShopPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public PictureFacade() {
        super(Picture.class);
    }
    
    public Picture findByPath(String pathToFile) {
        try {
            return (Picture) em.createQuery("SELECT p FROM Picture p WHERE p.pathToFile=:pathToFile")
                    .setParameter("pathToFile", pathToFile)
                    .getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
}
