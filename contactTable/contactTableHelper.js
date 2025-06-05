({
	fetchContacts : function(component) {
		var action = component.get("c.getContacts");
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                let records = response.getReturnValue();
                records.forEach(function(record){
                    record.AccountName = record.Account ? record.Account.Name : 'N/A';
                    record.AccountLink = record.AccountId ? '/' + record.AccountId : '';
                });
                component.set("v.contactData", records);
            }
        });
	$A.enqueueAction(action);
    }
})