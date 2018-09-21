package phoneBook.Contracts.BusinessLogic;

import java.util.List;

import phoneBook.Contracts.BusinessObjects.IGroupXContact;

public interface IGroupXContactBL {
	
	IGroupXContact Add(IGroupXContact obj);
	
	Boolean Update(IGroupXContact obj);
	
	Boolean Delete(Integer id);
	
	IGroupXContact GetDetails(Integer id);
	
	List<IGroupXContact> GetAllContactsForGroup(Integer groupId);

	List<IGroupXContact> GetAllGroupsForContact(Integer phoneBookId);

}
