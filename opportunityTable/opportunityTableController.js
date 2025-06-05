({
	doInit : function(component, event, helper) {
		component.set("v.columns", [
            {label: "Name", fieldName: "Name", type: "text"},
            {label: "Stage", fieldName: "StageName", type: "text"},
            {label: "Account related to Opportunity", fieldName: "AccountName", type: "text"}
        ]);
        helper.fetchOpportunities(component);
	}
})