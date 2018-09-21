package phoneBook.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import phoneBook.Entities.Group;
import phoneBook.Entities.PhoneBook;

public interface GroupRepository  extends CrudRepository<Group, Integer> {

	@Transactional
	@Modifying
	@Query("delete FROM GroupXContact gxc WHERE gxc.groupId = :groupId and gxc.contactId = :contactid")
	void DeleteContactFromGroup(@Param("groupId")Integer groupid, @Param("contactid")Integer contactid);
	
	@Query("SELECT gp FROM Group gp WHERE gp.userId = :userId")
	List<Group> GetAllGroupsForUser(@Param("userId")Integer userId);
	
}
