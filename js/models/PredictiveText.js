var app = app || {}; 

app.PredictiveText = Backbone.Model.extend({
	initialize: function() {
		console.log('The Predictive Text Model has been intialized!'); 
	}

	/*
	getNames: function(input) {
		console.log('input: ', input); 

		// app.validNames = []; 
		var validNames = []; 

		app.constituencies.forEach(function(constituency) {
			if (constituency.indexOf(input.toLowerCase()) != -1) {
				validNames.push(constituency); 
			}
		}); 

		return validNames; 
	}
	*/
}); 