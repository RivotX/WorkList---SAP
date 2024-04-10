sap.ui.define(
	[
		"./BaseController",
		"sap/m/MessageBox",
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
		"sap/ui/export/library",
		"sap/ui/export/Spreadsheet",
	],
	function (
		BaseController,
		MessageBox,
		JSONModel,
		Formatter,
		exportLibrary,
		Spreadsheet
	) {
		"use strict";
		var EdmType = exportLibrary.EdmType;

		return BaseController.extend("com.myorg.myapp.controller.Table", {
			formatter: Formatter, // make the formatter available in the view
			onInit: function () {
				var data = this.getJson();

				data.results = data.results.map((item) => {
					// Convert VARIABLE_02 to float and add it as a new field
					item.VARIABLE_02_float = parseFloat(item.VARIABLE_02);
					return item;
				});
				this.getView().setModel(new JSONModel(data), "data");
			},

			getJson: function () {
				const data = {
					results: [
						{
							PACKAGE_ID: "PCK/50187442",
							OBJID: "50187442",
							ENTITY: "PCK",
							CREATEON: "/Date(1637539200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: " PCK/50187442 Test performance",
							DESCRIPTION: " PCK/50187442 Test performance",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "S",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1483315200000)/",
							PRIORITY: "X",
							VARIABLE_01: "20.000",
							VARIABLE_02: "0.000",
						},
						{
							PACKAGE_ID: "PCK/50187479",
							OBJID: "50187479",
							ENTITY: "PCK",
							CREATEON: "/Date(1550793600000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: " PCK/50187479 NAME 2 dos",
							DESCRIPTION: " PCK/50187479 NAME 2 dos",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "E",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1484006400000)/",
							PRIORITY: "X",
							VARIABLE_01: "34.077",
							VARIABLE_02: "12.000",
						},
						{
							PACKAGE_ID: "PCK/50173464",
							OBJID: "50173464",
							ENTITY: "PCK",
							CREATEON: "/Date(1565568000000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: " SOE Template 0/0 (1)",
							DESCRIPTION: " SOE Template 0/0 (1)",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "A",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1475712000000)/",
							PRIORITY: "X",
							VARIABLE_01: "01.134",
							VARIABLE_02: "66.000",
						},
						{
							PACKAGE_ID: "PCK/50185635",
							OBJID: "50185635",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "1 Motor UH",
							DESCRIPTION:
								"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "A",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "99.000",
							VARIABLE_02: "565.000",
						},
						{
							PACKAGE_ID: "PCK/50185658",
							OBJID: "50185658",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "1 Condenser v13",
							DESCRIPTION:
								"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "S",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "11.660",
							VARIABLE_02: "45.030",
						},
						{
							PACKAGE_ID: "PCK/50185636",
							OBJID: "50185636",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "2 Optical Dual 2.0",
							DESCRIPTION:
								"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "U",
							STATUS: "R",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "00.320",
							VARIABLE_02: "17.630",
						},
						{
							PACKAGE_ID: "PCK/50185659",
							OBJID: "50185659",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "2 Micro-store BHY",
							DESCRIPTION:
								"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "R",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "83.880",
							VARIABLE_02: "10.000",
						},
						{
							PACKAGE_ID: "PCK/50185637",
							OBJID: "50185637",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "3 Aluminum 200",
							DESCRIPTION:
								"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "F",
							STATUS: "S",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "55.233",
							VARIABLE_02: "40.000",
						},
						{
							PACKAGE_ID: "PCK/50185638",
							OBJID: "50185638",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "4 Wood 3D",
							DESCRIPTION:
								"4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "X",
							VARIABLE_01: "09.003",
							VARIABLE_02: "71.011",
						},
						{
							PACKAGE_ID: "PCK/50185661",
							OBJID: "50185661",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "4 RESOURCE UUU",
							DESCRIPTION:
								"4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "U",
							STATUS: "",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "44.505",
							VARIABLE_02: "01.001",
						},
						{
							PACKAGE_ID: "PCK/50185639",
							OBJID: "50185639",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "5 Express 9",
							DESCRIPTION:
								"5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "U",
							STATUS: "A",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "X",
							VARIABLE_01: "00.333",
							VARIABLE_02: "00.001",
						},
						{
							PACKAGE_ID: "PCK/50185640",
							OBJID: "50185640",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "6 steel deposit 100",
							DESCRIPTION:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "F",
							STATUS: "R",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "99.111",
							VARIABLE_02: "54.000",
						},
						{
							PACKAGE_ID: "PCK/50185663",
							OBJID: "50185663",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "6 EN Si se conocen el lugar y el",
							DESCRIPTION:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "A",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "73.166",
							VARIABLE_02: "22.076",
						},
						{
							PACKAGE_ID: "PCK/50185641",
							OBJID: "50185641",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "7 hammers Hi",
							DESCRIPTION:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "13.166",
							VARIABLE_02: "70.011",
						},
						{
							PACKAGE_ID: "PCK/50185664",
							OBJID: "50185664",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "7 Lights Ultra",
							DESCRIPTION:
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "S",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "54.090",
							VARIABLE_02: "84.212",
						},
						{
							PACKAGE_ID: "PCK/50185642",
							OBJID: "50185642",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "8 Smart TV",
							DESCRIPTION:
								"8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "F",
							STATUS: "S",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "00.000",
							VARIABLE_02: "20.070",
						},
						{
							PACKAGE_ID: "PCK/50185665",
							OBJID: "50185665",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "8 Motor 678",
							DESCRIPTION:
								"8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "U",
							STATUS: "",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "00.199",
							VARIABLE_02: "99.999",
						},
						{
							PACKAGE_ID: "PCK/50185643",
							OBJID: "50185643",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "9 Wooden platform",
							DESCRIPTION:
								"9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "U",
							STATUS: "E",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "48.888",
							VARIABLE_02: "99.999",
						},
						{
							PACKAGE_ID: "PCK/50185666",
							OBJID: "50185666",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "9 EN Si se conocen el lugar y el",
							DESCRIPTION:
								"9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "A",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "48.888",
							VARIABLE_02: "01.564",
						},
						{
							PACKAGE_ID: "PCK/50185644",
							OBJID: "50185644",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "00006120 Screws Unlimited",
							DESCRIPTION:
								"00006120 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "33.098",
							VARIABLE_02: "01.564",
						},
						{
							PACKAGE_ID: "PCK/50185667",
							OBJID: "50185667",
							ENTITY: "PCK",
							CREATEON: "/Date(1480291200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "00006120 ----",
							DESCRIPTION:
								"00006120 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "F",
							STATUS: "R",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1480291200000)/",
							PRIORITY: "",
							VARIABLE_01: "22.222",
							VARIABLE_02: "01.000",
						},
						{
							PACKAGE_ID: "PCK/50183705",
							OBJID: "50183705",
							ENTITY: "PCK",
							CREATEON: "/Date(1478044800000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "Live Thresholds",
							DESCRIPTION: "02.11.2016 Pruebas Thresholds",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "R",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1478044800000)/",
							PRIORITY: "",
							VARIABLE_01: "21.767",
							VARIABLE_02: "54.666",
						},
						{
							PACKAGE_ID: "PCK/50191539",
							OBJID: "50191539",
							ENTITY: "PCK",
							CREATEON: "/Date(1492646400000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "BEICF - Local 2",
							DESCRIPTION: "03.04.2017 BEICF Test - Local 2",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "N",
							STATUS: "",
							AGENT: "S",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1492646400000)/",
							PRIORITY: "",
							VARIABLE_01: "20.000",
							VARIABLE_02: "00.000",
						},
						{
							PACKAGE_ID: "PCK/50187081",
							OBJID: "50187081",
							ENTITY: "PCK",
							CREATEON: "/Date(1078531200000)/",
							VALIDTO: "/Date(253402214400000)/",
							PACKAGE_NAME: "Incidents per million transactions",
							DESCRIPTION:
								"1 Incidents per million transactions - 2 Incidents per million transactions - 3 Incidents per million transactions - 4 Incidents per million transactions - 5 Incidents per million transactions",
							ACTIVE: "Y",
							CALCULATION: "",
							TYPE_PACKAGE: "U",
							STATUS: "R",
							AGENT: "",
							STIME: "PT00H00M00S",
							CREATION_DATE: "/Date(1078531200000)/",
							PRIORITY: "",
							VARIABLE_01: "22.222",
							VARIABLE_02: "01.000",
						},
					],
				};
				return data;
			},
			onAfterRendering: function () {
				var oTable = this.getView().byId("sampleTable");
				var iCount = oTable.getBinding("rows").getLength();
				var oResourceBundle = this.getView()
					.getModel("i18n")
					.getResourceBundle();

				var sText = oResourceBundle.getText("Tentries", [iCount]);
				this.getView().byId("entriesCounter").setText(sText);
			},

			onAddProduct: function () {
				if (!this.oAddProductDialog) {
					this.oAddProductDialog = sap.ui.xmlfragment(
						this.getView().getId(),
						"com.myorg.myapp.view.AddPackage",
						this
					);
					this.getView().addDependent(this.oAddProductDialog);
				}
				this.oAddProductDialog.open();
			},
			onCloseDialog: function () {
				this.oAddProductDialog.close();
			},

			onDelete: function () {
				var oTable = this.getView().byId("sampleTable");
				var oModel = this.getView().getModel("data");
				var data = oModel.getData();

				var oItems = oTable.getSelectedIndices();
				var i, path, idx, item;
				var forbiddenItemEncountered = false; // Add a flag to track forbidden items

				for (i = oItems.length - 1; i >= 0; --i) {
					var id = oItems[i];

					path = oTable.getContextByIndex(id).sPath;
					idx = parseInt(path.substring(path.lastIndexOf("/") + 1));

					item = data.results[idx];
					console.log(item);
					if (item.STATUS === "R" || item.STATUS === "E") {
						console.log(item.STATUS);
						data.results.splice(idx, 1); // Remove the item if the STATUS is 'R' or 'E'
					} else {
						forbiddenItemEncountered = true;
						// Set the flag to true if a forbidden item is encountered
					}
				}

				// Display the MessageBox only once after the loop if a forbidden item was encountered
				if (forbiddenItemEncountered) {
					var oBundle = this.getView().getModel("i18n").getResourceBundle();
					var sMsg = oBundle.getText("errorDelete");
					console.log("aaaaaaaaaaaaaaaaa", oBundle);
					MessageBox.error(sMsg);
				}

				console.log(data);
				oModel.setData(data);
			},

			onClearFilters: function () {
				// Clear all the filters from the sapui5 table
				var oTable = this.getView().byId("sampleTable");
				oTable.getBinding("rows").filter([]);

				// Set every column's sorted and filtered attribute to false
				var aColumns = oTable.getColumns();
				for (var i = 0; i < aColumns.length; i++) {
					aColumns[i].setSorted(false);
					aColumns[i].setFiltered(false);
				}
			},

			onExport: function () {
				var oTable = this.getView().byId("sampleTable");
				var oModel = this.getView().getModel("data");
				var oData = oModel.getData();

				var aCols = this.createColumnConfig();

				var oSettings = {
					workbook: { columns: aCols },
					dataSource: oData.results,
					fileName: "TableExport.xlsx",
				};

				var oSheet = new Spreadsheet(oSettings);
				oSheet.build().finally(function () {
					oSheet.destroy();
				});
			},
			createColumnConfig: function () {
				var oResourceBundle = this.getView()
					.getModel("i18n")
					.getResourceBundle();

				var aCols = [];
				
				aCols.push({
					label: oResourceBundle.getText("Desc"),
					property: "DESCRIPTION",
					type: EdmType.String,
				});
				aCols.push({
					label: oResourceBundle.getText("PackageID"),
					property: "OBJID",
					type: EdmType.String,
				});
				aCols.push({
					label: oResourceBundle.getText("CreationDate"),
					property: "CREATION_DATE",
					type: EdmType.Date,
				});
				aCols.push({
					label: oResourceBundle.getText("TimeOn"),
					property: "STIME",
					type: EdmType.Time,
				});
				aCols.push({
					label: oResourceBundle.getText("State"),
					property: "STATUS",
					type: EdmType.String,
				});

				aCols.push({
					label: oResourceBundle.getText("Progress"),
					property: "VARIABLE_01",
					type: EdmType.Number,
					scale: 3,
				});

				aCols.push({
					label: oResourceBundle.getText("Amount"),
					property: "VARIABLE_02_float",
					type: EdmType.Number,
					scale: 3,
				});
				aCols.push({
					label: oResourceBundle.getText("type"),
					property: "TYPE_PACKAGE",
					type: EdmType.String,
				});
				aCols.push({
					label: oResourceBundle.getText("Priority"),
					property: "PRIORITY",
					type: EdmType.String,
				});

				return aCols;
			},
		});
	}
);
