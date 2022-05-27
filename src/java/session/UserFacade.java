package session;

import entity.User;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author pupil
 */
@Stateless
public class UserFacade extends AbstractFacade<User> {

    @PersistenceContext(unitName = "JSShoeShopPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UserFacade() {
        super(User.class);
    }
    
    public User findByRole(String role) {
        try {
            return (User) em.createQuery("SELECT u FROM u WHERE u.role=:role")
                    .setParameter("role", role)
                    .getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
    
    public User findByLogin(String login) {
        try {
            return (User) em.createQuery("SELECT u FROM User u WHERE u.login=:login")
                    .setParameter("login", login)
                    .getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }
}
