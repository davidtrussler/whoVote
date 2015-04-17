var app = app || {}; 

app.Home = Backbone.Model.extend({
	initialize: function() {
		this.getConstituencies(); 
	}, 

	getConstituencies: function() {
		console.log('getConstituencies!');

		// var url = 'http://mapit.mysociety.org/areas/WMC'; 
		var url = 'src/constituencies.json'; 
		app.constituencies = []; 

		$.ajax({
			// dataType: 'jsonp', 
			url: url, 
			success: function(response) {
				console.log('success!'); 
				// console.log('response: ', response); 

				for (var prop in response) {
					// console.log('response.' + prop + ' = ' + response[prop]);
					app.constituencies.push(response[prop]); 
				}

				console.log('constituencies: ', app.constituencies); 

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
	}, 

	getNames: function(input) {
		console.log('getNames!'); 
		console.log('input: ', input); 

		var predictiveTextWrapper = $('#predictiveText'); 

		$(predictiveTextWrapper).html(''); 

		app.constituencies.forEach(function(constituency) {
			if (constituency.name.toLowerCase().indexOf(input.toLowerCase()) != -1) {
				// add to list of names
				var view = new app.PredictiveTextView({
					model: new app.PredictiveText()
				}); 

				$(predictiveTextWrapper).append(view.render(constituency)); 
			}
		}); 
	}
});

// 02477952030