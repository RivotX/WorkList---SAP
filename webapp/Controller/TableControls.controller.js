sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("webapp.Controller.TableControls", {
		onInit: function () {
			// This method is called upon initialization of the view.
		},

		onAfterRendering: function () {
			// This method is called after the view has been rendered.
		},

		onExit: function () {
			// This method is called when the view is about to be destroyed.
		},

		onAddProduct: function () {
			if (!this.oAddProductDialog) {
				var oResourceBundle = this.getOwnerComponent()
					.getModel("i18n")
					.getResourceBundle();

				// Create a new Dialog
				this.oAddProductDialog = new sap.m.Dialog({
					title: oResourceBundle.getText("AddPtitle"),
					content: [
						new sap.m.Label({ text: oResourceBundle.getText("PackageID") }),
						new sap.m.Input({ id: "inputID" }), //deberia generarse automaticamente

						new sap.m.Label({ text: oResourceBundle.getText("PackageName") }),
						new sap.m.Input({ id: "inputName" }),
						new sap.m.Label({ text: oResourceBundle.getText("Desc") }),
						new sap.m.Input({ id: "inputDesc" }),
						//status label and input. States only can be "Success", "Warning", "Error", "None"
						// new sap.m.Label({ text: oResourceBundle.getText("State") }),
						// ?=?=
						new sap.m.Label({ text: oResourceBundle.getText("Amount") }),
						new sap.m.Input({ id: "inputAmount" }),
						// ... add more input fields for the rest of the properties
					],
					beginButton: new sap.m.Button({
						text: "OK",
						press: this.onAddProduct.bind(this),
					}),
					endButton: new sap.m.Button({
						text: "Cancel",
						press: function () {
							this.oAddProductDialog.close();
						}.bind(this),
					}),
				});
			}
			this.oAddProductDialog.open();
		},
	});
});
