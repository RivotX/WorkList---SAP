sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/core/format/DateFormat"],
	function (Controller, DateFormat) {
		"use strict";

		return Controller.extend("com.myorg.myapp.controller.Date", {
			onInit: function () {
				var oModel = new sap.ui.model.json.JSONModel();
				var oDateFormat = DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });

				oModel.setData({
					date: oDateFormat.format(new Date()),
				});

				this.getView().setModel(oModel);
			},
		});
	}
);
