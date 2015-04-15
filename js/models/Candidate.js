var app = app || {}; 

app.Candidate = Backbone.Model.extend({
	// candidate: this.candidate, 

	initialize: function() {
		console.log('The Candidate Model has been intialized!'); 
		// console.log('candidate: ', this.candidate); 
	} 
});