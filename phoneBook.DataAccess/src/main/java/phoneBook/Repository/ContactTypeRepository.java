package phoneBook.Repository;

import org.springframework.data.repository.CrudRepository;

import phoneBook.Entities.ContactType;

public interface ContactTypeRepository extends CrudRepository<ContactType, Integer> {

}
