var app = app || {}; 

app.Constituency = Backbone.Model.extend({
	initialize: function(constituencyId) {
		console.log('The Constituency Model has been intialized!'); 
		console.log('constituencyId: ', constituencyId); 
		// console.log('view', this.view); 

		// var view = new app.ConstituencyView(constituencyId); 

		// console.log('view: ', view); 

		// app.ConstituencyView.render(constituencyId); 
	}, 

	getCandidates: function(constituencyId) {
		console.log('getCandidates!'); 
		console.log('constituencyId: ', constituencyId); 

		$.ajax({
			// dataType: 'jsonp', 
			url: url, 
			success: function(response) {
				console.log('success!'); 
				// console.log('response: ', response); 

				/*
				for (var prop in response) {
					// console.log('response.' + prop + ' = ' + response[prop]);
					app.constituencies.push(response[prop]); 
				}
				*/

				// console.log('constituencies: ', app.constituencies); 

				/*
				response.forEach(function(constituency) {
					app.constituencies.push(constituency.name.toLowerCase()); 
				});
				*/
			}, 
			error: function(jqXHR, textStatus, errorThrown) {
				console.log('error!'); 
				console.log('jqXHR: ', jqXHR); 
				console.log('textStatus: ', textStatus); 
				console.log('errorThrown: ', errorThrown); 
			}
		});	
	}
}); 