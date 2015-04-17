var app = app || {}; 

app.ConstituencyView = Backbone.View.extend ({
	el: '#content', 

	candidatesTemplate: _.template($('#candidates-template').html()),

	initialize: function() {
		// this.showCandidates(); 
	},

	render: function(response) {
		console.log('render!'); 
		console.log('response: ', response); 

		// var constituencyId = response.attributes.result.id; 

		this.$el.html(this.candidatesTemplate);
	
		var candidates = this.model.changed.result.memberships; 

		console.log('candidates: ', candidates); 

		// TODO: this should probably go in the model --
		var candidateIds = []; 

		candidates.forEach(function(candidate) {
			if (candidate.person_id.standing_in['2015']) {
				if (candidate.person_id.standing_in['2015'].post_id == candidate.post_id) {
					if (candidateIds.indexOf(candidate.person_id.id) == -1) {
						candidateIds.push(candidate.person_id.id); 

						var candidateView = new app.CandidateView({
							model: new app.Candidate()
						}); 

						$('#candidates').append(candidateView.render(candidate)); 
					}
				}
			}
		}); 
	}, 

	showCandidates: function(constituencyId) {
		console.log('showCandidates!'); 

		this.model.fetch({
			url: 'http://yournextmp.popit.mysociety.org/api/v0.1/posts/' + constituencyId + '?embed=membership.person', 
			// url: 'src/constituency.json'
		}); 

		this.model.bind('change', this.render, this);
	}
}); 