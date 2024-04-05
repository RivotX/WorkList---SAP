sap.ui.define(
	["./BaseController", "sap/m/MessageBox", "../model/formatter"],
	function (BaseController, MessageBox, formatter) {
		"use strict";

		return BaseController.extend("com.myorg.myapp.controller.Main", {
			sayHello: function () {
				MessageBox.show("Hello World!");
			},
		});
	}
);
