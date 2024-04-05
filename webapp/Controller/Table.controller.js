sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("com.myorg.myapp.controller.Table", {
			onInit: function () {
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData("model/data.json").then(console.log("LoadData ejecutado"));
				this.getView().setModel(oModel, "model");
			},
		});
	}
);
