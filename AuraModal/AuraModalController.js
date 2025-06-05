({
    doInit: function(component, event, helper) {
        helper.loadOpportunities(component);
        helper.loadContacts(component);
        helper.loadAccounts(component);
        //helper.fetchAuraConnect(component);
    },

    openModal: function(component, event, helper) {
        component.set("v.showModal", true);
    },

    closeModal: function(component, event, helper) {
        component.set("v.showModal", false);
        component.set("v.selectedContactId", null);
        component.set("v.selectedContact", null);
        component.set("v.selectedAccount", null);
        component.set("v.selectedOpportunityId", null);
    },

    handleContactChange: function(component, event, helper) {
        let contactId = component.get("v.selectedContactId");
        let contacts = component.get("v.contacts");
        let selected = contacts.find(c => c.Id === contactId);
        component.set("v.selectedContact", selected || null);

        if (selected && selected.AccountId) {
            component.set("v.selectedAccount", selected.Account);
        } else {
            component.set("v.selectedAccount", null);
        }
    },

    saveAuraConnect: function(component, event, helper) {
        helper.saveAuraConnectRecord(component);
    }
});