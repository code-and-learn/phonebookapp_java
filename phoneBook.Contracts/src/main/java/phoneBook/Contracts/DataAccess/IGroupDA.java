package phoneBook.Contracts.DataAccess;

import java.util.List;

import phoneBook.Contracts.BusinessObjects.IGroup;

public interface IGroupDA {

	IGroup Add(IGroup obj);
	
	Boolean Update(IGroup obj);
	
	Boolean Delete(Integer id);
	
	IGroup GetDetails(Integer id);
	
	List<IGroup> GetAllForUser(Integer userId);
	
	Boolean RemoveContactFromGroup(Integer groupid, Integer contactid);
}
