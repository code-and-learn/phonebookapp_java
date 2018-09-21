package phoneBook.businessObjects;

import phoneBook.Contracts.BusinessObjects.IGroup;

public class Group implements IGroup {
	
	private Integer id;
	private String name;
	private String description;
	private Integer userId;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userid) {
		this.userId = userid;
	}
	
}
