TrelloClone.Views.CardsNew = Backbone.View.extend({
	template: JST["cards/new"],
	
	events: {
		"submit form": "submit"
	},
	
	render: function() {
		var theList = this.model || {};
		var content = this.template({ list: theList });
		this.$el.html(content);
		return this;
	},
	
	submit: function(event) {
		var view = this;
		event.preventDefault();
		
		var params = $(event.currentTarget).serializeJSON();
		var newCard = new TrelloClone.Models.Card(params["card"]);
		newCard.save({}, {
			success: function() {
				view.model.cards().add(newCard);
				view.render();
                document.getElementById("cardName").reset();
			}
		});
	}
});