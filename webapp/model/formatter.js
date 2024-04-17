sap.ui.define(
	["sap/ui/core/format/NumberFormat", "sap/ui/core/format/DateFormat"],
	function (NumberFormat, DateFormat) {
		return {
			DateFormat: function (date) {
				if (date) {
					// Extract the timestamp from the string
					var timestamp = Number(date.match(/\d+/)[0]);
					var oDateFormat = DateFormat.getDateTimeInstance({
						pattern: "dd/MM/yyyy",
					});
					return oDateFormat.format(new Date(timestamp));
				} else {
					return "";
				}
			},
			TypeFormat: function (type) {
				if (type) {
					// const oResourceBundle = this.getOwnerComponent()
					// 	.getModel("i18n")
					// 	.getResourceBundle();
					var oResourceBundle = sap.ui
						.getCore()
						.getModel("i18n")
						.getResourceBundle();
					if (type === "N") {
						return oResourceBundle.getText("typeN");
					} else if (type === "U") {
						return oResourceBundle.getText("typeU");
					} else if (type === "F") {
						return oResourceBundle.getText("typeF");
					} else {
						return "Unknown";
					}
				} else {
					return "unknown";
				}
			},

			PriorityFormat: function (priority) {
				if (priority === "X") {
					return "sap-icon://alert";
				}
			},

			StatusFormat: function (status) {
				if (status === "S") {
					return "#6cd331";
				} else if (status === "E") {
					return "gray";
				} else if (status === "A") {
					return "rgb(230, 197, 52)";
				} else if (status === "R") {
					return "red";
				} else {
					return "transparent";
				}
			},

			NumberFormatt: function (number) {
				//format to …nn,ddd (3 decimals and ‘,’)
				number = parseFloat(number).toFixed(3);

				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					maxFractionDigits: 3,
					groupingEnabled: true,
				});
				var formattedNumber = oNumberFormat.format(number);
				formattedNumber = formattedNumber.replace(".", ",");

				// Remove leading zeros

				return formattedNumber;
			},
			NumberFormat2: function (number) {
				var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
					maxFractionDigits: 2,
					groupingEnabled: true,
				});
				var formattedNumber = oNumberFormat.format(number) + "%";
				return formattedNumber.replace(".", ",");
			},
			TimeOnFormat: function (duration) {
				if (duration !== null && duration !== undefined) {
					var match = duration.match(/PT(\d+)?H(\d+)?M(\d+)?S/);

					match = match.slice(1).map(function (value) {
						if (value != null) {
							return parseInt(value);
						} else {
							return 0;
						}
					});

					var hours = match[0];
					var minutes = match[1];
					var seconds = match[2];

					// Pad the minutes and seconds with leading zeros if needed
					hours = hours.toString().padStart(2, "0");
					minutes = minutes.toString().padStart(2, "0");
					seconds = seconds.toString().padStart(2, "0");

					return hours + ":" + minutes + ":" + seconds;
				} else {
					return "notime";
				}
			},

			isStatus: function (sStatus, sExpectedStatus) {
				console.log("formateando isStatus");
				return sStatus === sExpectedStatus;
			},
		};
	}
);
