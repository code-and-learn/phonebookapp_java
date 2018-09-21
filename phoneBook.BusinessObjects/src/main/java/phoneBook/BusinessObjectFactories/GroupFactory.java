package phoneBook.BusinessObjectFactories;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IGroup;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.businessObjects.Group;

@Component
public class GroupFactory implements IBusinessObjectFactory<IGroup> {

	public IGroup GetNewObject() {
		return new Group();
	}

	public List<? extends IGroup> GetList() {
		return new LinkedList<Group>();
	}

}
