var app = app || {}; 

app.ConstituencyView = Backbone.View.extend ({
	el: '#content', 

	template: _.template("<h3>Hello <%= who %></h3>"),

	initialize: function() {
		console.log('initialize!'); 
		console.log('this: ', this); 
		console.log('el: ', this.$el); 

		// this.listenTo(app.Constituency, 'click', this.getCandidates); 
		// this.$el.click(this.getCandidates); 
		// console.log('thisModel: ', this.model); 
		// this.render(); 
	},

	events: {
		'click #getCandidates': 'loadCandidates'
	}, 

	render: function() {
		console.log('render!'); 
		// this.$el.html('<p>the candidates</p>');
		this.$el.children('#candidates').html(this.template({who: 'world!'}));
	
		return this;
	}, 

	/*
	clicked: function(e) {
		console.log('clicked!'); 
	}, 
	*/

	loadCandidates: function(e) {
		console.log('loadCandidates!'); 
		console.log('this: ', this); 

		this.render(); 
		// this.$el.children('#candidates').html('<p>the candidates</p>');
	}
}); 

// var constituencyView = new app.ConstituencyView(); 

/*
console.log('constituency: ', constituency); 

// constituencyView.render(); 
*/