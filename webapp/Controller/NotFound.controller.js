sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
	function (Controller, History) {
		"use strict";

		return Controller.extend("webapp.controller.NotFound", {
			onInit: function () {
				// This method is called upon initialization of the controller.
			},

			onAfterRendering: function () {
				// This method is called after the view has been rendered.
			},

			onExit: function () {
				// This method is called when the controller is about to be destroyed.
			},
			onBack: function () {
				var sPreviousHash = History.getInstance().getPreviousHash();

				//The history contains a previous entry
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					// There is no history!
					// replace the current hash with page 1 (will not add an history entry)
					this.getOwnerComponent().getRouter().navTo("main", null, true);
				}
			},
		});
	}
);
