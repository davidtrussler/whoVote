var app = app || {}; 

app.HomeCollection = Backbone.Collection.extend({
	model: app.Home
}); 

var homeModels = new app.HomeCollection(); 

// constituencyModels.add(app.Constituency);

console.log('homeModels: ', homeModels); 