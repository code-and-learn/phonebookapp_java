package phoneBook.BusinessObjectFactories;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IGroupXContact;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.businessObjects.GroupXContact;

@Component
public class GroupXContactFactory implements IBusinessObjectFactory<IGroupXContact> {

	public IGroupXContact GetNewObject() {
		return new GroupXContact();
	}

	public List<? extends IGroupXContact> GetList() {
		return new LinkedList<GroupXContact>();
	}

}
