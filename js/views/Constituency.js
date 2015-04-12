var app = app || {}; 

app.ConstituencyView = Backbone.View.extend ({
	el: '#content', 

	loadingTemplate: _.template($('#loading-template').html()),

	initialize: function() {
		console.log('initialize!'); 
		console.log('this: ', this); 
		console.log('el: ', this.$el); 
		console.log('thisModel: ', this.model); 

		// this.listenTo(this.model, 'change', this.showCandidates); 

		// this.$el.click(this.getCandidates); 
		// console.log('thisModel: ', this.model); 
		// this.render(); 
	},

	events: {
		'click #getCandidates': 'showCandidates'
	}, 

	render: function(response) {
		console.log('render!'); 
		// this.$el.html('<p>the candidates</p>');
		// this.$el.children('#candidates').html(this.template({who: 'world!'}));
	
		// return this;

		console.log('model: ', this.model.changed); 

		var candidates = this.model.changed.result.memberships; 

		console.log('candidates: ', candidates); 

		this.$el.children('#candidates').html(JSON.stringify(this.model.changed.result.memberships));

		// console.log('response: ', response); 
	}, 

	/*
	clicked: function(e) {
		console.log('clicked!'); 
	}, 
	*/

	showCandidates: function(e) {
		console.log('showCandidates!'); 
		console.log('this: ', this); 

		this.$el.children('#candidates').html(this.loadingTemplate({category: 'all the candidates'}));

		/*
		this.model.parse({
			// console.log('parse!'); 
			response: function() {
				console.log('response: ', response)
			}
		});  
		*/

		/* make sure 'this' refers to this View in the success callback below
		 * don't really understand this!
		 * see: http://chilipepperdesign.com/2013/01/15/backbone-js-bind-callback-to-successful-model-fetch/
		**/
		// _.bindAll(this, 'render'); 

		this.model.fetch({
			// url: 'http://yournextmp.popit.mysociety.org/api/v0.1/posts/65575?embed=membership.person', 
			url: 'src/constituency.json', 
			// success: this.render // function(response) {
				// console.log('fetched!'); 
				// console.log('response: ', response.changed.result); 
				// this.render(response);  
			// } 
		}); 

		this.model.bind('change', this.render, this);

		// console.log('candidates: ', candidates); 

		// this.render(); 
		// this.$el.children('#candidates').html('<p>the candidates</p>');
	}, 

	/*
	showCandidates: function(e) {
		console.log('showCandidates!'); 
	}
	*/
}); 

// var constituencyView = new app.ConstituencyView(); 

/*
console.log('constituency: ', constituency); 

// constituencyView.render(); 
*/