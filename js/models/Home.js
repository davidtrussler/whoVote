var app = app || {
	// constituencies: []
}; 

app.Home = Backbone.Model.extend({
	initialize: function() {
		// console.log('The Home Model has been intialized!'); 

		this.getConstituencies(); 
	}, 

	getConstituencies: function() {
		console.log('getConstituencies!');

		// var url = 'http://www.theyworkforyou.com/api/getConstituencies?key=AvizXSBnS6eXAP8bu7EvtKpk'; 
		var url = 'src/constituencies.json'; 
		app.constituencies = []; 

		$.ajax({
			// dataType: 'jsonp', 
			url: url, 
			success: function(response){
				response.forEach(function(constituency) {
					app.constituencies.push(constituency.name.toLowerCase()); 
				});
			}
		});	
	}, 

	getNames: function(input) {
		console.log('input: ', input); 

		// var validNames = []; 
		var predictiveTextWrapper = $('#predictiveText'); 

		$(predictiveTextWrapper).html(''); 

		app.constituencies.forEach(function(constituency) {
			if (constituency.indexOf(input.toLowerCase()) != -1) {
				// validNames.push(constituency); 

				// add to list of names
				var view = new app.PredictiveTextView({
					model: new app.PredictiveText()
				}); 

				$(predictiveTextWrapper).append(view.render(constituency)); 
			}
		}); 

		// return validNames; 
		// TODO: pass this array to predictiveText view and populate the list
	}
});