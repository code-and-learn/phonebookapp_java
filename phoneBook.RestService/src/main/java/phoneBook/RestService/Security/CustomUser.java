package phoneBook.RestService.Security;

import org.springframework.security.core.userdetails.User;

public class CustomUser extends User {
	
	private Integer id;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	private static final long serialVersionUID = 1L;
	   public CustomUser(ApplicationUser user) {
	      super(user.getUsername(), user.getPassword(), user.getGrantedAuthoritiesList());
	   }

}
