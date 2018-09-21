package phoneBook.businessObjects;

import phoneBook.Contracts.BusinessObjects.IPhoneBookXContact;

public class PhoneBookXContact implements IPhoneBookXContact {
	
	private Integer id;
	private String contactInfo;
	private Integer contactTypeId;
	private Integer phoneBookId;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getContactInfo() {
		return contactInfo;
	}
	
	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}
	
	public Integer getContactTypeId() {
		return contactTypeId;
	}
	
	public void setContactTypeId(Integer contactTypeId) {
		this.contactTypeId = contactTypeId;
	}
	
	public Integer getPhoneBookId() {
		return phoneBookId;
	}
	
	public void setPhoneBookId(Integer phoneBookId) {
		this.phoneBookId = phoneBookId;
	}

}
