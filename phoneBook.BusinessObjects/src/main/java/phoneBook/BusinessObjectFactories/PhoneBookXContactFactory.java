package phoneBook.BusinessObjectFactories;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IPhoneBookXContact;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.businessObjects.PhoneBookXContact;

@Component
public class PhoneBookXContactFactory implements IBusinessObjectFactory<IPhoneBookXContact> {

	public IPhoneBookXContact GetNewObject() {
		return new PhoneBookXContact();
	}

	public List<? extends IPhoneBookXContact> GetList() {
		return new LinkedList<PhoneBookXContact>();
	}

}
