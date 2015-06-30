sap.ui.controller("rowrepeater.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf rowrepeater.main
*/
	onInit: function() {
		//Add model to core
		//create test data
		var dataObject = {
			data: [{
					index: 0,
					level: "Warning",
					description: "HAL: I'm sorry, Dave. I'm afraid I can't do that."
				},
				{
					index: 1,
					level: "Warning",
					description: "Windows Boot Manager has encountered a problem."
				},
				{
					index: 2,
					level: "Error",
					description: "Failwhale: Twitter is over capacity"
				},
				{
					index: 3,
					level: "Success",
					description: "Jun 25 12:20:47 pc1h kernel: lp0 on fire"
				},
				{
					index: 4,
					level: "Error",
					description: "Software failure. Press left mouse button to continue. Guru Meditation #00000004,#0000AACB."
				},
				{
					index: 5,
					level: "Error",
					description: "[root@localhost root]# Kernel Panic"
				},
				{
					index: 6,
					level: "Error",
					description: "That does not compute."
				},
				{
					index: 7,
					level: "Warning",
					description: "404 File not found. Stop messing with the URL."
				},
				{
					index: 8,
					level: "Success",
					description: "Blue Screen of Death."
				}
]
		};

		//create JSON model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(dataObject);
		sap.ui.getCore().setModel(oModel);

		//create the template control that will be repeated and will display the data
		var oRowTemplate = new sap.ui.commons.Message("rowTemplate", {
			text: "{description}",
			type: "{level}"
		});
		//debugger;
		// add row to matrix
				//this.byId("id1").addRow(oRowTemplate);

		//attach data to the RowRepeater
		// 		oRowRepeater.bindRows("/data", oRowTemplate);
		//debugger;
		this.byId("id1").bindRows("/data", oRowTemplate);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf rowrepeater.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf rowrepeater.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf rowrepeater.main
*/
//	onExit: function() {
//
//	}

});