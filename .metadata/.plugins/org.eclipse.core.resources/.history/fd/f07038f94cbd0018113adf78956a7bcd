package phoneBook.RestService;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import phoneBook.Contracts.BusinessLogic.IGroupBL;
import phoneBook.Contracts.BusinessObjects.IGroup;
import phoneBook.Contracts.BusinessObjects.IPhoneBook;
import phoneBook.Contracts.DataAccess.IGroupDA;
import phoneBook.Contracts.DataAccess.IGroupXContactDA;
import phoneBook.RestService.Models.RestServiceModel;
import phoneBook.RestService.Security.CustomUser;
import phoneBook.businessObjects.GroupXContact;

@RestController
@RequestMapping("/groups")
public class GroupController {
	
	@Autowired
    IGroupDA dataAccess;
	
	@Autowired
    IGroupXContactDA groupXContactdataAccess;
	
	@Autowired
	IGroupBL businessLogic;
	
	// Create a new group
	@RequestMapping(method = RequestMethod.POST, value="/createnew")
	public HttpEntity<RestServiceModel<IGroup>> createGroup(@RequestBody phoneBook.businessObjects.Group group)
	{
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		CustomUser user = (CustomUser)auth.getPrincipal();
		
		group.setUserId(user.getId());
		
		IGroup newGroup = businessLogic.Add(group);
		
		RestServiceModel<IGroup> restModel = new RestServiceModel<>();
        restModel.Model = newGroup;
        restModel.add(linkTo(methodOn(GroupController.class).getGroupDetails(newGroup.getId())).withSelfRel());

        return new ResponseEntity<>(restModel, HttpStatus.OK);
	}
	
	// Create a new group
	@RequestMapping(method = RequestMethod.POST, value="/addcontacttogroup")
	public HttpEntity<RestServiceModel<IGroup>> addContactToGroup(@RequestBody GroupXContact groupXContact)
	{
		groupXContactdataAccess.Add(groupXContact);
        return new ResponseEntity<>(HttpStatus.OK);
	}
	
	// Update group details
	@RequestMapping(method = RequestMethod.PUT, value="/updategroup")
	public HttpEntity<RestServiceModel<IGroup>> updateGroup(IGroup group)
	{
		Boolean result = businessLogic.Update(group);
		
		RestServiceModel<IGroup> restModel = new RestServiceModel<>();
        restModel.Model = group;
        restModel.add(linkTo(methodOn(GroupController.class).getGroupDetails(group.getId())).withSelfRel());

        return new ResponseEntity<>(restModel, HttpStatus.OK);
	}
	
	// Delete contact from the group
	@RequestMapping(method = RequestMethod.DELETE, value="/deletegroup")
	public HttpStatus deleteGroup(Integer groupid)
	{
		Boolean result = businessLogic.Delete(groupid);
        return HttpStatus.OK;
	}
	
	// Get group details
	@RequestMapping("/getdetails")
    public HttpEntity<RestServiceModel<IGroup>> getGroupDetails(@RequestParam(value = "groupid", required = true) Integer groupid) {

        IGroup group = businessLogic.GetDetails(groupid);
        
        RestServiceModel<IGroup> restModel = new RestServiceModel<>();
        restModel.Model = group;
        restModel.add(linkTo(methodOn(GroupController.class).getGroupDetails(groupid)).withSelfRel());

        return new ResponseEntity<>(restModel, HttpStatus.OK);
    }
	
	// Get all groups for the user
	@RequestMapping("/getallgroups")
    public HttpEntity<RestServiceModel<List<IGroup>>> getAllGroupsForUser() {

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		CustomUser user = (CustomUser)auth.getPrincipal();
		
		Integer userid= user.getId();
		
        List<IGroup> businessObjectList = businessLogic.GetAllForUser(userid);
        
        RestServiceModel<List<IGroup>> restModel = new RestServiceModel<>();
        restModel.Model = businessObjectList;
        restModel.add(linkTo(methodOn(ContactTypeController.class).getAllContactTypes()).withSelfRel());

        return new ResponseEntity<>(restModel, HttpStatus.OK);
    }
	
	// Get all contacts in the group
	@RequestMapping(method = RequestMethod.DELETE, value="/removecontactfromgroup")
    public HttpEntity<RestServiceModel<List<IPhoneBook>>> removeContactFromGroup(@RequestParam(value = "groupid", required = true) Integer groupId, @RequestParam(value = "contactid", required = true) Integer contactid) {

        boolean result = businessLogic.RemoveContactFromGroup(groupId, contactid);
        
    	return new ResponseEntity<>(HttpStatus.OK);
    }
	
	// Add contact to the group
}
