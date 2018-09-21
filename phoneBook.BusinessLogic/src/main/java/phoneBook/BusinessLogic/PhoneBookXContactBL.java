package phoneBook.BusinessLogic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessLogic.IPhoneBookXContactBL;
import phoneBook.Contracts.BusinessObjects.IPhoneBookXContact;
import phoneBook.Contracts.DataAccess.IPhoneBookXContactDA;

@Component
public class PhoneBookXContactBL implements IPhoneBookXContactBL {
	
	@Autowired
	IPhoneBookXContactDA _phoneBookXContactDA;
	
	public IPhoneBookXContact Add(IPhoneBookXContact obj) {
		return _phoneBookXContactDA.Add(obj);
	}

	public Boolean Update(IPhoneBookXContact obj) {
		return _phoneBookXContactDA.Update(obj);
	}

	public Boolean Delete(Integer id) {
		return _phoneBookXContactDA.Delete(id);
	}

	public IPhoneBookXContact GetDetails(Integer id) {
		return _phoneBookXContactDA.GetDetails(id);
	}

	public List<IPhoneBookXContact> GetAllForPhoneBookContact(Integer phoneBookId) {
		return _phoneBookXContactDA.GetAllForPhoneBookContact(phoneBookId);
	}

}