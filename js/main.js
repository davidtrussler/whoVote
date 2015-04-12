/*
var app = app || {
	constituencies: []
}; 
*/

$(document).ready(function() {
	// var homeModel = new app.Home(); 

	// console.log('model:', homeModel); 

	var homeView = new app.HomeView({
		// model: homeModel
		model: new app.Home()
	}); 

	// console.log('homeView: ', homeView); 
});