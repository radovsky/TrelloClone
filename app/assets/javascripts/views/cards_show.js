TrelloClone.Views.CardsShow = Backbone.View.extend({
	template: JST['cards/item'],
	
	render: function() {
		var content = this.template({ card: this.model });
		this.$el.html(content);
		return this;
	}
});