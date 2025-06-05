({
	fetchAccounts : function(component) {
		var action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
                           if(response.getState() === "SUCCESS"){
                               let records = response.getReturnValue();
                               records.forEach(function(record){
                                   record.OwnerName = record.Owner ? record.Owner.Name : 'N/A';
                                   
                               })
            component.set("v.accountData", records);
        }});
        $A.enqueueAction(action);
	}
})