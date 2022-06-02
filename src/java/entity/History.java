package entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class History implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(cascade = CascadeType.DETACH)
    private User user;
    @OneToOne(cascade = CascadeType.DETACH)
    private Model model;
    @Temporal(TemporalType.TIMESTAMP)
    private Date buy;
    private double gain;

    @Override
    public String toString() {
        return "History{" + "id=" + id + ", user=" + user + ", model=" + model + ", buy=" + buy + ", gain=" + gain + '}';
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 19 * hash + Objects.hashCode(this.id);
        hash = 19 * hash + Objects.hashCode(this.user);
        hash = 19 * hash + Objects.hashCode(this.model);
        hash = 19 * hash + Objects.hashCode(this.buy);
        hash = 19 * hash + (int) (Double.doubleToLongBits(this.gain) ^ (Double.doubleToLongBits(this.gain) >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final History other = (History) obj;
        if (Double.doubleToLongBits(this.gain) != Double.doubleToLongBits(other.gain)) {
            return false;
        }
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.user, other.user)) {
            return false;
        }
        if (!Objects.equals(this.model, other.model)) {
            return false;
        }
        if (!Objects.equals(this.buy, other.buy)) {
            return false;
        }
        return true;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public Date getBuy() {
        return buy;
    }

    public void setBuy(Date buy) {
        this.buy = buy;
    }

    public double getGain() {
        return gain;
    }

    public void setGain(double gain) {
        this.gain = gain;
    }


}