TrelloClone.Views.CardsShow = Backbone.View.extend({
	template: JST['cards/item'],
	className: "card-individual",
	tagName: "li",
	events: {
		"click button.destroy-card": "destroyCard"
		
	},
	
	destroyCard: function(event) {
		event.preventDefault();
		
		this.model.destroy();
	},
	
	render: function() {
		var content = this.template({ card: this.model });
		this.$el.html(content);
		return this;
	}
});