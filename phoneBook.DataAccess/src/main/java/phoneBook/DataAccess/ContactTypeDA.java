package phoneBook.DataAccess;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IContactType;
import phoneBook.Contracts.DataAccess.IContactTypeDA;
import phoneBook.Contracts.ObjectFactory.IBusinessObjectFactory;
import phoneBook.Entities.ContactType;
import phoneBook.Repository.ContactTypeRepository;

@Component
public class ContactTypeDA implements IContactTypeDA {
	
	@Autowired
	ContactTypeRepository repository;
	
	@Autowired
	IBusinessObjectFactory<IContactType> businessObjectFactory;

	@Override
	public IContactType Add(IContactType obj) {
		
		ModelMapper modelMapper = new ModelMapper();
		ContactType entity = modelMapper.map(obj, ContactType.class);
		
		repository.save(entity);
		
		obj.setId(entity.getId());
		
		return obj;
	}

	@Override
	public Boolean Update(IContactType obj) {
	
		try
		{
			ContactType entity = repository.findById(obj.getId()).get();
		
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
	public IContactType GetDetails(Integer id) {
		
		IContactType businessObject = businessObjectFactory.GetNewObject();
		
		ContactType entity = repository.findById(id).get();
		
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.map(entity, businessObject);
		
		return businessObject;
	}

	@Override
	public List<IContactType> GetAll() {
		
		List<IContactType> list = (List<IContactType>)businessObjectFactory.GetList();
		
		Iterable<ContactType> contactTypeEntities = repository.findAll();
		
		ModelMapper modelMapper = new ModelMapper();
		IContactType contactType = null;
		
		for(ContactType contactTypeEntity : contactTypeEntities)
		{
			contactType = businessObjectFactory.GetNewObject();
			modelMapper.map(contactTypeEntity, contactType);
			
			list.add(contactType);
		}
		
		return (List<IContactType>)list;
	}

}
