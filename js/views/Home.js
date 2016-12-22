var app = app || {}; 

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
		'keyup input[name="constituencyName"]': 'getPredictiveText', 
		'click #predictiveText': 'setName', 
		'submit form[name="constituencySearch"]': 'getCandidates'
	}, 

	// update value of input with constituency name
	setName: function(e) {
		console.log('setName!'); 

		var form = this.$el.children('form')[0]; 

		console.log('target: ', e.target.dataset.id); 

		$(form).children('input[name="constituencyName"]')[0].value = e.target.textContent.trim(); 
		$(form).children('input[name="constituencyId"]')[0].value = e.target.dataset.id; 
	}, 

	// show the initial main content
	render: function(response) {
		this.$el.html(this.homeTemplate);
		// this.setPosition(); 
	}, 

	// get the valid names for the predictive text 
	getPredictiveText: function(e) {
		console.log('getPredictiveText!'); 

		this.model.getPredictiveList(e.target.value); 

		// the view for the collection of predictive text suggestions
		// TODO: breaks here!
		// Renders each individual <li> within parent <ul>
		// new app.PredictiveTextView(); 

		this.setPosition(); 
	},

	// set the position of the predictive text list based on position of input
	setPosition: function() {
		console.log('setPosition!');

		var input = this.$el.find('input[name="constituencyName"]'); 
		
		$('#predictiveText')
			.css({
				'left': $(input).position().left,
				'top': $(input).position().top + $(input).height(), 
				'width': $(input).width()
			})
			.removeClass('hidden'); 
	}, 

	getCandidates: function(e) {
		console.log('getCandidates!'); 

		var form = $('form[name="constituencySearch"]')[0]; 

		// console.log('form data: ', $(form).serializeArray()); 

		var constituencyId = $(form).children('input[name=constituencyId]').val(); 

		console.log('constituencyId: ', constituencyId); 

		var view = new app.ConstituencyView({
			model: new app.Constituency(constituencyId)
		}); 

		view.showCandidates(constituencyId); 

		e.preventDefault(); 
	}
});