package phoneBook.Contracts.DataAccess;

import phoneBook.Contracts.BusinessObjects.IUser;

public interface IUserDA {
	
	IUser Add(IUser obj);
	
	Boolean Update(IUser obj);
	
	Boolean Delete(Integer id);
	
	IUser GetDetails(Integer id);
	
	IUser GetDetails(String username);
}
