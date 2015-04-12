var app = app || {}; 

app.PredictiveTextView = Backbone.View.extend ({
	// el: '#content', 

	predictiveTextTemplate: _.template($('#predictiveText-template').html()),

	/*
	initialize: function() {
		this.render(); 
	},
	*/

	/*
	events: {
		// 'keyup input[name="constituency"]': 'predictText', 
	}, 
	*/

	render: function(constituency) {
		return this.predictiveTextTemplate({name: constituency}); 
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