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
		'keyup input[name="constituencyName"]': 'predictText', 
		'click #predictiveText': 'setName', 
		'submit form[name="constituencySearch"]': 'getCandidates'
	}, 

	// update value of input with constituency name
	setName: function(e) {
		console.log('setName!'); 

		var form = this.$el.children('form')[0]; 

		console.log('target: ', e.target); 

		$(form).children('input[name="constituencyName"]')[0].value = e.target.textContent.trim(); 
		$(form).children('input[name="constituencyId"]')[0].value = e.target.dataset.id; 
	}, 

	// show the initial main content
	render: function(response) {
		this.$el.html(this.homeTemplate);
		// this.setPosition(); 
	}, 

	// get the valid names for the predictive text 
	predictText: function(e) {
		console.log('predictText!'); 

		this.model.getNames(e.target.value); 

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
			model: new app.Constituency()
		}); 

		view.showCandidates(constituencyId); 

		e.preventDefault(); 
	}
});