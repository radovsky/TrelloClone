TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	
	initialize: function () {
		this.listenTo(
			this.model, 
			"sync", 
			this.render
		);
		
		this.listenTo(
			this.model.cards(),
			"add",
			this.addCard.bind(this)
		);
		
		this.model.cards().each(this.addCard.bind(this));
	},
	
	addCard: function(card) {
		var cardsShow = new TrelloClone.Views.CardsShow({ model: card });
		this.addSubview(".cards", cardsShow);
	},
	
	render: function() {
		var content = this.template({ list: this.model });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
	
});