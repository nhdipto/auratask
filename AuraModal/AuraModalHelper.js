({
    loadOpportunities: function(component) {
        var action = component.get("c.getOpportunities");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.opportunities", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    loadContacts: function(component) {
        var action = component.get("c.getContacts");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.contacts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    loadAccounts: function(component) {
        var action = component.get("c.getAccounts");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    saveAuraConnectRecord: function(component) {
        var contact = component.get("v.selectedContact");
        var contactAccountId = contact ? contact.AccountId : null;
        var manualAccountId = component.get("v.selectedAccountId");
        var finalAccountId = contactAccountId || manualAccountId;
        var opportunityId = component.get("v.selectedOpportunityId");
        
        if (!contact || !finalAccountId || !opportunityId) {
            alert("Please fill in all fields before saving.");
            return;
        }
        
        var action = component.get("c.createAuraConnect");
        action.setParams({
            contactId: contact.Id,
            accountId: finalAccountId,
            opportunityId: opportunityId
        });

        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                alert("Aura Connect record created successfully.");
                component.set("v.showModal", false);
                this.fetchAuraConnect(component);
            } else {
                console.error("Error:", response.getError());
                alert("Failed to create Aura Connect.");
            }
        });

        $A.enqueueAction(action);
    }
});