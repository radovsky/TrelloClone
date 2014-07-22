TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	className: "list-show",
	
	initialize: function () {
		this.listenTo(
			this.model, 
			"sync", 
			this.render
		);
		
		this.listenTo(
			this.model.cards(),
			"add",
			this.addCard
		);
		
		this.listenTo(
			this.model.cards(),
			"remove",
			this.removeCard
		);
		
		var cardNewView = new TrelloClone.Views.CardsNew({
			model: this.model
		});
		
		this.addSubview(".cards-new", cardNewView);
		
		this.model.cards().each(this.addCard.bind(this));
		
		this.$el.attr('data-list-id', this.model.id);
	},
	
	events: {
		"click button.destroy": "destroyList"
	},
	
	removeCard: function(card){
		var subview = _.find(
			this.subviews(".cards"),
			function(subview) {
				return subview.model === card;
			}
		);
		this.removeSubview(".cards", subview)
	},
	
	addCard: function(card) {
		var cardsShow = new TrelloClone.Views.CardsShow({ model: card });
		this.addSubview(".cards", cardsShow);
	},
	
	destroyList: function(event) {
		event.preventDefault();
		this.model.destroy();
	},
	
	render: function() {
		var content = this.template({ list: this.model });
		this.$el.html(content);
		this.attachSubviews();

		return this;
	}
	
});