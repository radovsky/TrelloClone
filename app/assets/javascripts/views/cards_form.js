TrelloClone.Views.CardsForm = Backbone.View.extend({
	template: JST["cards/form"],
	
	render: function() {
		var content = this.template({ card: this.model });
		this.$el.html(content);
		return this;
	}
});