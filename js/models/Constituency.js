var app = app || {}; 

app.Constituency = Backbone.Model.extend({
	/*
	defaults: {
		title: 'They Work!', 
		completed: false
	}, 
	*/

	initialize: function() {
		/*
		this.on('change', function() {
			console.log('the model has changed!'); 
			console.log('changed: ', this.changed)
		}); 
		*/

		// console.log('The Constituency Model has been intialized!'); 
	}, 

	/*
	validate: function(attrs) {
		console.log('validate: ', attrs); 
	},
	*/

	/*
	getCandidates: function() {
		console.log('getCandidates!');

		$.ajax({url: 'http://yournextmp.popit.mysociety.org/api/v0.1/posts/65575?embed=membership.person', 
			success: function(response){
				console.log('response: ', response);
				return response; 
			}
		});		
	} 
	*/	
}); 

// var constituency = new app.Constituency(); 

// constituency.set('title', 'The new title', {validate: true}); 

// console.log('constituency: ', JSON.stringify(constituency)); 
// console.log('title: ', constituency.get('title')); 
// console.log('attributes: ', constituency.attributes); 

// constituency.getCandidates(); 

// constituency.sync('put', this, {url: 'http://localhost'}); 
// constituency.save(); 