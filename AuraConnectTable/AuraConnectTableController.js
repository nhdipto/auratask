({
    doInit : function(component, event, helper) {
        component.set("v.columns",[
            {label:"Name" , fieldName: "Name", type: "text"},
            {label:"Contact Name" , fieldName: "contactName", type: "text"},
            {label:"Account ---OF---> Contact" , fieldName: "accountName", type: "text"},
            {label:"Opportunity ---OF---> Contact" , fieldName: "opportunityName", type: "text"}
        ]);
        helper.fetchAuraConnect(component);
    }})