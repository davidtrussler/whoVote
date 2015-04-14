var app = app || {
	// constituencies: []
}; 

app.HomeView = Backbone.View.extend ({
	// app parent dom element
	el: '#content', 

	// template for main initial display
	homeTemplate: _.template($('#home-template').html()),

	initialize: function() {
		this.render(); 
	},

	events: {
		// 'focus input[name="constituency"]': 'predictiveTextDisplay'
		'keyup input[name="constituency"]': 'predictText', 
		'click #predictiveText': 'setName', 
	}, 

	// update value of input with constituency name
	setName: function(e) {
		console.log('setName!'); 

		var form = this.$el.children('form')[0]; 

		$(form).children('input')[0].value = $(e.target).attr('data-value'); 
	}, 

	// show the initial main content
	render: function(response) {
		this.$el.html(this.homeTemplate);
		this.setPosition(); 
	}, 

	// get the valid names for the predictive text 
	predictText: function(e) {
		console.log('predictText!'); 

		// var validNames = this.model.getNames(e.target.value); 
		this.model.getNames(e.target.value); 

		// console.log('validNames: ', validNames); 
	}, 

	// set the position of the predictive text list based on position of input
	setPosition: function() {
		console.log('setPosition!');

		var input = this.$el.find('input')[0]; 
		
		$('#predictiveText').css({
			'left': $(input).position().left,
			'top': $(input).position().top + $(input).height(), 
			'width': $(input).width()
		}); 
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