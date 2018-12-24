
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerCreator {
    private EntityManager entityManager;

    public EntityManagerCreator() {
        EntityManagerFactory pointUnit = Persistence.createEntityManagerFactory("pointUnit");
        entityManager = pointUnit.createEntityManager();
    }

    public EntityManager getEntityManager() {
        return entityManager;
    }

    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
}