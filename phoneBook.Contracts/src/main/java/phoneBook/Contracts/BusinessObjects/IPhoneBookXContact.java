package phoneBook.Contracts.BusinessObjects;

public interface IPhoneBookXContact {

	Integer getId();

	void setId(Integer id);

	String getContactInfo();

	void setContactInfo(String contactInfo);

	Integer getContactTypeId();

	void setContactTypeId(Integer contactTypeId);

	Integer getPhoneBookId();

	void setPhoneBookId(Integer phoneBookId);

}