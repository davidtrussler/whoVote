var app = app || {}; 

app.PredictiveTextView = Backbone.View.extend ({
	el: '#predictiveText', 

	predictiveTextTemplate: _.template($('#predictiveText-template').html()),

	initialize: function(predictiveTextList) {
		this.collection = new app.PredictiveTextCollection(predictiveTextList); 

		this.render(); 

		// console.log('PredictiveTextView intialised!'); 
	},

	render: function() {
		console.log('app.PredictiveTextView: render!'); 
		// console.log('app.PredictiveTextCollection: ', app.PredictiveTextCollection); 
		// console.log('constituencyName: ', constituencyName); 

		this.$el.html(''); 

		this.collection.each(function(item) {
			this.renderPredictiveTextItem(item); 
		}, this); 

		/*
		return this.predictiveTextTemplate({
			name: constituency.name, 
			id: constituency.id
		}); 
		*/
	}, 

	renderPredictiveTextItem: function(item) {
		console.log('renderPredictiveTextItem!'); 
		console.log('item: ', item); 
		// console.log('input: ', input); 

		this.$el.append(this.predictiveTextTemplate({
			id: item.attributes.id, 
			name: item.attributes.name
		})); 
	}

	/* set the position of the predictive text list based on position of input
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