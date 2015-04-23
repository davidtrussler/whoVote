var app = app || {}; 

app.Constituency = Backbone.Model.extend({
	initialize: function(constituencyId) {
		console.log('The Constituency Model has been intialized!'); 
		console.log('constituencyId: ', constituencyId); 
		// console.log('view', this.view); 

		// app.ConstituencyView.render(constituencyId); 
	}
}); 