TrelloClone.Views.CardsShow = Backbone.View.extend({
	template: JST['cards/item'],
	
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