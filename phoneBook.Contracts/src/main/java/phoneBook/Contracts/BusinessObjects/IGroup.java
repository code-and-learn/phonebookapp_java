package phoneBook.Contracts.BusinessObjects;

public interface IGroup {

	Integer getId();

	void setId(Integer id);

	String getName();

	void setName(String name);

	String getDescription();

	void setDescription(String description);
	
	Integer getUserId();
	
	void setUserId(Integer userid);

}