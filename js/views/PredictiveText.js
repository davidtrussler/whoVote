var app = app || {}; 

app.PredictiveTextView = Backbone.View.extend ({
	// el: '#content', 

	predictiveTextTemplate: _.template($('#predictiveText-template').html()),

	/*
	initialize: function() {
		this.render(); 
	},
	*/

	render: function(constituency) {
		return this.predictiveTextTemplate({
			name: constituency.name, 
			id: constituency.id
		}); 
	}, 

	/*
	predictText: function(e) {
		console.log('predictText!'); 

		var validNames = this.model.getNames(e.target.value); 

		console.log('validNames: ', validNames); 
	}
	*/

	/*
	predictiveTextDisplay: function() {
		console.log('predictiveTextDisplay!'); 
	}
	*/
});