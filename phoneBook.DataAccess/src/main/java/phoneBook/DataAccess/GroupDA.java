package phoneBook.DataAccess;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IGroup;
import phoneBook.Contracts.DataAccess.IGroupDA;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.Entities.Group;
import phoneBook.Repository.GroupRepository;;

@Component
public class GroupDA implements IGroupDA {

	@Autowired
	private GroupRepository repository;
	
	@Autowired
	IBusinessObjectFactory<IGroup> businessObjectFactory;


	@Override
	public IGroup Add(IGroup obj) {
		
		ModelMapper modelMapper = new ModelMapper();
		Group entity = modelMapper.map(obj, Group.class);
		
		repository.save(entity);
		
		obj.setId(entity.getId());
		
		return obj;
	}

	@Override
	public Boolean Update(IGroup obj) {
		
		try
		{
			Group entity = repository.findById(obj.getId()).get();
		
			ModelMapper modelMapper = new ModelMapper();
			modelMapper.map(obj, entity);
		
			repository.save(entity);
			
			return true;
		}
		catch (Exception e)
		{
			return false;
		}
		
	}

	@Override
	public Boolean Delete(Integer id) {
		
		try
		{
			repository.deleteById(id);
			return true;
		}
		catch (Exception e)
		{
			return false;
		}
		
	}

	@Override
	public IGroup GetDetails(Integer id) {
		
		IGroup businessObject = businessObjectFactory.GetNewObject();
		
		Group entity = repository.findById(id).get();
		
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.map(entity, businessObject);
		
		return businessObject;
		
	}

	@Override
	public List<IGroup> GetAllForUser(Integer userId) {
		
		List<IGroup> list = (List<IGroup>)businessObjectFactory.GetList();
		
		Iterable<Group> entities = repository.GetAllGroupsForUser(userId);
		
		ModelMapper modelMapper = new ModelMapper();
		IGroup businessObject = null;
		
		for(Group entity : entities)
		{
			businessObject = businessObjectFactory.GetNewObject();
			modelMapper.map(entity, businessObject);
			
			list.add(businessObject);
		}
		
		return (List<IGroup>)list;
		
	}

	@Override
	public Boolean RemoveContactFromGroup(Integer groupid, Integer contactid) {
		repository.DeleteContactFromGroup(groupid, contactid);
		return true;
		/*try
		{
			repository.DeleteContactFromGroup(groupid, contactid);
			return true;
		}
		catch (Exception e)
		{
			return false;
		}*/
	}

}