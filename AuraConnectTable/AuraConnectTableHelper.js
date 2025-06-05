({
	fetchAuraConnect : function(component) {
		var action = component.get("c.getAuraConnectRecords");
        action.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                let records = response.getReturnValue();
                records.forEach(function(record){
                    record.contactName = record.Contact__r ? record.Contact__r.Name: '';
                    record.accountName = record.Account__r ? record.Account__r.Name: '';
                    record.opportunityName = record.Opportunity__r ? record.Opportunity__r.Name: '';
                });
                component.set("v.connections", records);
            }
            else{
                console.error('Failed to fetch Aura Connect records');
            }
        });
        $A.enqueueAction(action);
	}
})