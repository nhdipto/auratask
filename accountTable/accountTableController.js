({
	doInit : function(component, event, helper) {
		component.set("v.columns", [
            {label: "Name", fieldName: "Name", type: "text"},
            {label: "Industry", fieldName: "Industry", type: "text"},
            {label: "Owner ID", fieldName: "OwnerId", type: "text"},
            {label: "Owner Name", fieldName: "OwnerName", type: "text"},
        ]);
            helper.fetchAccounts(component);
                     
	}
})