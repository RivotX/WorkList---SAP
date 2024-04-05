sap.ui.define(function () {
	"use strict";

	return {
		DateFormat: function (date) {
			if (date) {
				var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
					pattern: "dd/MM/yyyy",
				});
				return oDateFormat.format(new Date(date));
			} else {
				return date;
			}
		},
	};
});
