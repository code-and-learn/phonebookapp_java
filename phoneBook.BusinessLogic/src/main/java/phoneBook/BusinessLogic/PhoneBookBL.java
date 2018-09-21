package phoneBook.BusinessLogic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessLogic.IPhoneBookBL;
import phoneBook.Contracts.BusinessObjects.IPhoneBook;
import phoneBook.Contracts.DataAccess.IPhoneBookDA;

@Component
public class PhoneBookBL implements IPhoneBookBL {

	@Autowired
	IPhoneBookDA _phoneBookDA;
	
	public IPhoneBook Add(IPhoneBook obj) {
		return _phoneBookDA.Add(obj);
	}

	public Boolean Update(IPhoneBook obj) {
		return _phoneBookDA.Update(obj);
	}

	public Boolean Delete(Integer id) {
		return _phoneBookDA.Delete(id);
	}

	public IPhoneBook GetDetails(Integer id) {
		return _phoneBookDA.GetDetails(id);
	}

	public List<IPhoneBook> GetAllForUser(Integer userId) {
		return _phoneBookDA.GetAllForUser(userId);
	}

	public List<IPhoneBook> GetAllContactsInGroup(Integer groupId) {
		return _phoneBookDA.GetAllContactsInGroup(groupId);
	}

	public List<IPhoneBook> GetAllContactsNotInGroup(Integer groupId, Integer userId) {
		return _phoneBookDA.GetAllContactsNotInGroup(groupId, userId);
	}
	
}
