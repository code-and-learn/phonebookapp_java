package phoneBook.RestService.Security;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import phoneBook.Contracts.BusinessObjects.IUser;
import phoneBook.Contracts.DataAccess.IUserDA;

@Component
public class UserDAO {
	
	@Autowired
	IUserDA dataAccess;
	
	public ApplicationUser getUserDetails(String userName)
	{
		IUser user = dataAccess.GetDetails(userName);
		
		ApplicationUser appUser = new ApplicationUser();
		appUser.setId(user.getId());
		appUser.setUsername(user.getUsername());
		appUser.setPassword(user.getPassword());
		
		Collection<GrantedAuthority> grantedAuthoritiesList = new ArrayList<>();
		GrantedAuthority grantedAuthority = new SimpleGrantedAuthority("ROLE_APPUSER");
        
		appUser.setGrantedAuthoritiesList(grantedAuthoritiesList);
		
		return appUser;
	}

}