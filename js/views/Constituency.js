var app = app || {}; 

app.ConstituencyView = Backbone.View.extend ({
	el: '#content', 

	candidatesTemplate: _.template($('#candidates-template').html()),

	initialize: function() {
		this.showCandidates(); 
	},

	render: function(response) {
		console.log('render!'); 

		this.$el.html(this.candidatesTemplate);
	
		var candidates = this.model.changed.result.memberships; 

		candidates.forEach(function(candidate) {
			if (candidate.person_id.party_memberships['2015']) {
				var candidateView = new app.CandidateView({
					model: new app.Candidate()
				}); 

				$('#candidates').append(candidateView.render(candidate)); 
			}
		}); 
	}, 

	showCandidates: function(e) {
		console.log('showCandidates!'); 

		this.model.fetch({
			// url: 'http://yournextmp.popit.mysociety.org/api/v0.1/posts/65575?embed=membership.person', 
			url: 'src/constituency.json'
		}); 

		this.model.bind('change', this.render, this);
	}
}); 