var app = app || {}; 

app.ConstituencyCollection = Backbone.Collection.extend({
	model: app.Constituency
}); 

// var constituencyModels = new app.ConstituencyCollection(); 

// constituencyModels.add(app.Constituency);

// console.log('constituencyModels: ', constituencyModels); 