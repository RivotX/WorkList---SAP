sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(
				this.getOwnerComponent().getContentDensityClass()
			);
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.subscribe(
				"DetailButtonClicked",
				this.onDetailButtonClicked,
				this
			);
		},
		onDetailButtonClicked: function () {
			var oToolPage = this.byId("myToolPage");
			oToolPage.removeStyleClass("noPadding");
		},
	});
});
