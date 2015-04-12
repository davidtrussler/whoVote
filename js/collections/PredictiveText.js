var app = app || {}; 

app.PredictiveTextList = Backbone.Collection.extend ({
	model: app.PredictiveText, 

	// el: '#content', 

	// predictiveTextTemplate: _.template($('#predictiveText-template').html()),

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

	/*
	render: function(response) {
		this.$el.append(this.predictiveTextTemplate);
	}, 
	*/

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