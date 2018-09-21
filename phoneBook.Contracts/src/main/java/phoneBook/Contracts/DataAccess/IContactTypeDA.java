package phoneBook.Contracts.DataAccess;

import java.util.List;

import phoneBook.Contracts.BusinessObjects.IContactType;

public interface IContactTypeDA {

	IContactType Add(IContactType obj);
	
	Boolean Update(IContactType obj);
	
	Boolean Delete(Integer id);
	
	IContactType GetDetails(Integer id);
	
	List<IContactType> GetAll();
	
}
