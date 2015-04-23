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
	}, 

	getPredictiveList: function(input) {
		console.log('getPredictiveList!'); 
		console.log('input: ', input); 

		// new app.PredictiveTextView(input); 

		// var predictiveTextWrapper = $('#predictiveText'); 

		// $(predictiveTextWrapper).html(''); 

		var predictiveTextList = [];  // new app.PredictiveTextCollection(); 

		app.constituencies.forEach(function(constituency) {
			if (constituency.name.toLowerCase().indexOf(input.toLowerCase()) != -1) {
				console.log('constituency: ', constituency); 

				// add to list of names
				predictiveTextList.push({
					'id': constituency.id, 
					'name': constituency.name, 
				}); 

				/*
				predictiveTextList.add({
					model: new app.PredictiveText({
						id: constituency.id, 
						name: constituency.name
					})
				}); 
				*/

				// console.log('constituency name added to list!'); 

				/*
				new app.PredictiveTextView({
					model: new app.PredictiveText()
					// constituency.name
				}); 
				*/

				// $(predictiveTextWrapper).append(view.render(constituency)); 
			}
		}); 

		console.log('predictiveTextList: ', predictiveTextList); 

		new app.PredictiveTextView(predictiveTextList); 
	}
});