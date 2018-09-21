package phoneBook.BusinessLogic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessLogic.IUserBL;
import phoneBook.Contracts.BusinessObjects.IUser;
import phoneBook.Contracts.DataAccess.IUserDA;

@Component
public class UserBL implements IUserBL {

	@Autowired
	IUserDA _userDA;
	
	public IUser Add(IUser obj) {
		return _userDA.Add(obj);
	}

	public Boolean Update(IUser obj) {
		return _userDA.Update(obj);
	}

	public Boolean Delete(Integer id) {
		return _userDA.Delete(id);
	}

	public IUser GetDetails(Integer id) {
		return _userDA.GetDetails(id);
	}

}
