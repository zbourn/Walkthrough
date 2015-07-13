sap.ui.define([], function() {
	"use strict";
	// Based on the language and region supplied from the browser, create a
	// Locale object from which a LocaleData object can then be created.
	//
	// * * * Warning * * *
	// It may not be safe to assume that you can determine the business
	// application's language based on the browser's default language.
	//
	// It is entirely possible that a user might have their browser set to
	// their native language (say French), but then perform all business
	// transactions in their company's business language (say English).
	//
	// In a real business scenario, the value held in variable sBrowserLocale
	// would typically be replaced with the application language supplied by
	// software such as your corporate identity provider or active directory
	// server.
	var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
	var oLocale = new sap.ui.core.Locale(sBrowserLocale);
	var oLocaleData = new sap.ui.core.LocaleData(oLocale);
	var oCurrency = new sap.ui.model.type.Currency(
			oLocaleData.mData.currencyFormat);

	// -------------------------------------------------------------------------
	var getStockValue = function(fUnitPrice, iStockLevel, sCurrCode) {
		return oCurrency.formatValue([ fUnitPrice * iStockLevel,
				getCurrencySymbol(sCurrCode) ], "string");
	};

	var getCurrencySymbol = function(pCurrCode) {
		// Return the correct currency symbol for the given currency code as
		// seen
		// from the perspective of the current locale.
		// If the currency code is not supplied, then default to Euros
		return oLocaleData.getCurrencySymbol(pCurrCode || "EUR");
	};
	var dateFormatter = function(pDoB, pInvalidDate) {
		var oDoB = pDoB || {};
		// The Date function will validate the parameters for us, so we can
		// arbitrarily
		// create a new date without needing to do any parameter validation
		// ourselves
		var dt = new Date(oDoB.year, oDoB.month - 1, oDoB.day);

		// If the Date function evaluates to "Invalid Date", then return the
		// resource bundle text received in parameter pInvalidDate, else return
		// the date formatted according to the current locale
		return (dt.toString() === "Invalid Date") ? pInvalidDate : dt
				.toLocaleDateString();
	};
	var getStatusText = function(sStatus) {
		// As long as the status code can be found in the array containing the
		// values
		// "A", "B" and "C" (we don't care where), then we know the status code
		// is valid
		// and can then be used to derive the i18n key name.
		// If not, we simply return the status code
		return ([ "A", "B", "C" ].indexOf(sStatus) > -1) ? this.getView()
				.getModel("i18n").getProperty("status" + sStatus) : sStatus;

	};
	return {
		dateFormatter : dateFormatter,
		getCurrencySymbol : getCurrencySymbol,
		getStatusText : getStatusText,
		getStockValue : getStockValue

	};
});