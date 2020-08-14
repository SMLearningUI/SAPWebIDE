sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.purchase.puchaseorderapp.controller.View1", {
		onInit: function () {

		},
		// INSERT IN STEP 2 OF THE NEXT TUTORIAL
		onClickPO: function (oEvent) {
			var oApp = this.getView().getContent()[0].getApp();
			var sBindingPath = oEvent.getSource().getBindingContext().getPath();
			var oDetailsPage = oApp.getPages()[1].bindElement(sBindingPath);
			oApp.to(oDetailsPage.getId());
		},
		onNavButtonPress: function (oEvent) {
			var oApp = this.getView().getContent()[0].getApp();
			var oStartPage = oApp.getPages()[0];
			oApp.back(oStartPage.getId());
		},
		getPOFilter: function () {
			debugger;
		}
	});
});