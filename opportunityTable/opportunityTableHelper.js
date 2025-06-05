({
	fetchOpportunities : function(component) {
		var action = component.get("c.getOpp");
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                let records = response.getReturnValue();
                records.forEach(function(record){
                    record.AccountName = record.Account ? record.Account.Name : ''; 
                });
                component.set("v.oppData", records);
            }
        });
        $A.enqueueAction(action);
	}
})