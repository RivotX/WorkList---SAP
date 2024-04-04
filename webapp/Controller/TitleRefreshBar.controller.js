//basic setup
sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("com.myorg.myapp.controller.TitleRefreshBar", {
			//function to refresh the title
			refreshTitle: function () {
				MessageBox.show("Title Refreshed!");
			},
		});
	}
);
