sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("db.data_binding.controller.S0", {
		onInit: function(){
			var oPessoa = {
				nome      : 'Carlos',
				sobrenome : 'Conceição Silva',
				endereco  : {
					cidade: 'Salvador',
					estado: 'BA' 
				},
				skills: [
					{id: "1",  nome:'ABAP'},
					{id: "2",  nome:'Fiori'},
					{id: "3",  nome:'Java'}
					]
			};
			
			var oModel = new sap.ui.model.json.JSONModel(oPessoa);
			this.getView().setModel(oModel);
			
			var oCreateModel = new sap.ui.model.json.JSONModel({
				chaveSelecionada : ""
			});
			this.getView().setModel(oCreateModel, "create");
			
			var oTextSobrenome = this.byId('sobrenome'); 
			// DOIS TIPOS DE BINDING PELO CONTROLE DO ELEMENTO
			oTextSobrenome.bindText({
				path: "/sobrenome"
			});
			
			oTextSobrenome.bindProperty('text', {
				path: '/sobrenome'
			}); 
			
			
			
			
		},
		
		convertUpper: function(sValue){
			return sValue.toUpperCase();
		}
	});
});