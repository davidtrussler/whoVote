var app = app || {}; 

app.CandidateView = Backbone.View.extend ({
	candidateTemplate: _.template($('#candidate-template').html()),

	initialize: function() {
		console.log('initialize CandidateView!'); 
	},

	render: function(candidate) {
		console.log('render!'); 

		return this.candidateTemplate({
			candidateName: candidate.person_id.name,
			partyName: candidate.person_id.party_memberships['2015'].name
		}); 
	}
});