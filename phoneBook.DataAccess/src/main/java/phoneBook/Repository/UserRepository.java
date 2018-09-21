package phoneBook.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import phoneBook.Entities.User;

public interface UserRepository extends JpaRepository<User, Integer>  {

	@Query("SELECT u FROM Users u WHERE u.userName = :username")
	User GetByUsername(@Param("username")String username);
	
}
