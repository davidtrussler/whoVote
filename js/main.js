// var app = app || {}; 

$(document).ready(function() {
	var homeModel = new app.Home(); 
	// var constituencyModel = new app.Constituency(); 

	console.log('model:', homeModel); 

	var homeView = new app.HomeView({
	// var view = new app.ConstituencyView({
		model: homeModel
		// model: constituencyModel
	}); 

	console.log('homeView: ', homeView); 
});