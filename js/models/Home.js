var app = app || {}; 

app.Home = Backbone.Model.extend({
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

		console.log('The Home Model has been intialized!'); 

		this.getConstituencies(); 
	}, 

	getConstituencies: function() {
		console.log('getConstituencies!');

		// var url = 'http://www.theyworkforyou.com/api/getConstituencies?key=AvizXSBnS6eXAP8bu7EvtKpk'; 
		var url = 'src/constituencies.json'; 
		var constituencies = []; 

		$.ajax({
			// dataType: 'jsonp', 
			url: url, 
			success: function(response){
				response.forEach(function(constituency) {
					constituencies.push(constituency.name); 
				}); 

				console.log('constituencies: ', constituencies);
			}
		});		
	}

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