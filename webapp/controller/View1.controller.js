sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/m/Popover",
	"sap/m/Button",
	"sap/m/library"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,Device,Popover,Button,library) {
		"use strict";
        var ButtonType = library.ButtonType,
		PlacementType = library.PlacementType;

		return Controller.extend("dynamicpageheader.controller.View1", {
            _bExpanded: true,
            onInit: function () {
                this._setToggleButtonTooltip(!Device.system.desktop);
              
		},

        handleUserNamePress: function (event) {
			var oPopover = new Popover({
				showHeader: false,
				placement: PlacementType.Bottom,
				content: [
					new Button({
						text: 'Feedback',
						type: ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			oPopover.openBy(event.getSource());
		},
        onSideNavButtonPress: function () {
			var oToolPage = this.byId("toolPage");
			var bSideExpanded = oToolPage.getSideExpanded();

			this._setToggleButtonTooltip(bSideExpanded);

			oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
		},

		_setToggleButtonTooltip: function (bLarge) {
			var oToggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				oToggleButton.setTooltip('Large Size Navigation');
			} else {
				oToggleButton.setTooltip('Small Size Navigation');
			}
		},

        onPressLocalCatalog: function () {
            this.getView().byId("LabelId").setVisible(true);
            this.getView().byId("panelCSSGrid").setVisible(false);
        },
        onPressGlobalCatalog: function () {
            this.getView().byId("LabelId").setVisible(false);
            this.getView().byId("panelCSSGrid").setVisible(true);
        }
          
            
		});
	});
