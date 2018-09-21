package phoneBook.businessObjects;

import phoneBook.Contracts.BusinessObjects.IGroupXContact;

public class GroupXContact implements IGroupXContact {

	private Integer id;
	private Integer groupId;
	private Integer contactId;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Integer getGroupId() {
		return groupId;
	}
	
	public void setGroupId(Integer groupId) {
		this.groupId = groupId;
	}

	public Integer getContactId() {
		return contactId;
	}

	public void setContactId(Integer contactId) {
		this.contactId = contactId;
	}
	
}
