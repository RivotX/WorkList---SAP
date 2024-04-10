sap.ui.define(["sap/ui/core/format/NumberFormat"], function (NumberFormat) {
	return {
		DateFormat: function (date) {
			if (date) {
				// Extract the timestamp from the string
				var timestamp = Number(date.match(/\d+/)[0]);
				var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
					pattern: "dd/MM/yyyy",
				});
				return oDateFormat.format(new Date(timestamp));
			} else {
				return "";
			}
		},
		TypeFormat: function (type) {
			const oResourceBundle = this.getOwnerComponent()
				.getModel("i18n")
				.getResourceBundle();
			// const oResourceBundle = sap.ui.getCore().getLibraryResourceBundle("com.myorg.myapp");
			// console.log("aa",oResourceBundle);

			if (type === "N") {
				return oResourceBundle.getText("typeN");
			} else if (type === "U") {
				return oResourceBundle.getText("typeU");
			} else if (type === "F") {
				return oResourceBundle.getText("typeF");
			} else {
				return "Unknown";
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

			var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				maxFractionDigits: 3,
				groupingEnabled: true,
			});
			var formattedNumber = oNumberFormat.format(number);
			return formattedNumber.replace(".", ",");
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
			var match = duration.match(/PT(\d+)?H(\d+)?M(\d+)?S/);

			match = match.slice(1).map(function (value) {
				if (value != null) {
					return parseInt(value);
				} else {
					return 0;
				}
			});
			console.log(match);

			var hours = match[0];
			var minutes = match[1];
			var seconds = match[2];

			// Pad the minutes and seconds with leading zeros if needed
			hours = hours.toString().padStart(2, "0");
			minutes = minutes.toString().padStart(2, "0");
			seconds = seconds.toString().padStart(2, "0");

			return hours + ":" + minutes + ":" + seconds;
		},
	};
});
