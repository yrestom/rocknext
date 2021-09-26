// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Compliance Procedure', {
	refresh: function(frm) {
		frm.set_query("procedure","processes", (frm) =>{
			return {
				filters: {
					name: ["not in", [frm.parent_compliance_procedure, frm.name]]
				}
			};
		});

		frm.set_query('parent_compliance_procedure', function(){
			return {
				filters: {
					is_group: 1
				}
			};
		});
	}
});
