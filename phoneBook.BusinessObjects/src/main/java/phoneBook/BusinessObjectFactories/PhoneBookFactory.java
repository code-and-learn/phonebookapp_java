package phoneBook.BusinessObjectFactories;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IPhoneBook;
import phoneBook.Contracts.BusinessObjects.IPhoneBookXContact;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.businessObjects.PhoneBook;

@Component
public class PhoneBookFactory implements IBusinessObjectFactory<IPhoneBook> {

	public IPhoneBook GetNewObject() {
		
		PhoneBookXContactFactory pbxcFactory = new PhoneBookXContactFactory();
		
		return new PhoneBook((List<IPhoneBookXContact>)(List)pbxcFactory.GetList());
	}

	public List<? extends IPhoneBook> GetList() {
		return new LinkedList<PhoneBook>();
	}

}