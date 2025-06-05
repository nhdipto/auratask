({
	doInit : function(component, event, helper) {
		component.set("v.columns", [
            {label: "Name", fieldName: "Name", type: "text"},
            {label: "Email", fieldName: "Email", type: "email"},
            {label: "Phone", fieldName: "Phone", type: "phone"},
            {
                label: 'Account Related To Contact',
                fieldName: 'AccountLink',
                type: 'url',
                typeAttributes: {
                    label: {fieldName : 'AccountName'}
                }
            }
        ]);
        helper.fetchContacts(component);
	}
})