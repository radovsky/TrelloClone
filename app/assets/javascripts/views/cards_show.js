TrelloClone.Views.CardsShow = Backbone.CompositeView.extend({
	template: JST['cards/item'],
	
	className: "card-individual",
	
	tagName: "li",
	
	events: {
		"click button.destroy-card": "destroyCard",
		"click link.card-title-link": "renderModal"
	},
	
	renderModal: function() {
		var cardFormView = new TrelloClone.Views.CardsForm({
			model: this.model
		});
		
		this.addSubview(".card-form", cardFormView);
	},
	
 
	
	destroyCard: function(event) {
		event.preventDefault();
		
		this.model.destroy();
	},
	
	render: function() {
		var content = this.template({
			card: this.model
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});