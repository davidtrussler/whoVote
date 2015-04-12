var app = app || {
	// constituencies: []
}; 

app.HomeView = Backbone.View.extend ({
	el: '#content', 

	homeTemplate: _.template($('#home-template').html()),

	initialize: function() {
		this.render(); 
	},

	events: {
		// 'focus input[name="constituency"]': 'predictiveTextDisplay'
		'keyup input[name="constituency"]': 'predictText', 
	}, 

	render: function(response) {
		this.$el.html(this.homeTemplate);
	}, 

	predictText: function(e) {
		console.log('predictText!'); 

		// var validNames = this.model.getNames(e.target.value); 
		this.model.getNames(e.target.value); 

		// console.log('validNames: ', validNames); 
	}, 

	/*
	predictiveTextDisplay: function() {
		console.log('predictiveTextDisplay!'); 

		new app.PredictiveTextView({
			model: new app.PredictiveText()
		}); 
	}
	*/
});