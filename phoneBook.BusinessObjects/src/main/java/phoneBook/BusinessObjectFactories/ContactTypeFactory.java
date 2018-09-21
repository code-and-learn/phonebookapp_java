package phoneBook.BusinessObjectFactories;

import phoneBook.Contracts.BusinessObjects.IContactType;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.businessObjects.ContactType;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class ContactTypeFactory implements IBusinessObjectFactory<IContactType> {

	public IContactType GetNewObject() {
		return new ContactType();
	}

	public List<? extends IContactType> GetList() {
		LinkedList<ContactType> list = new LinkedList<ContactType>();	
		return (LinkedList<IContactType>)(List)list;
	}

	

}
