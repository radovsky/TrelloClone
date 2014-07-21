TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
	
	template: JST['boards/show'],
	
	initialize: function() {
		this.listenTo(
			this.model.lists(),
			"sync delete",
			this.render
		);
		
		this.listenTo(
			this.model.lists(),
			"add",
			this.addList
		);
		
		this.listenTo(
			this.model,
			"sync",
			this.render
		);
		
		var listNewView = new TrelloClone.Views.ListsNew({
			model: this.model
		});
		
		this.addSubview(".lists-new", listNewView);
	},
	
	addList: function(list) {
		var listsShow = new TrelloClone.Views.ListsShow({
			model: list
		});
		this.addSubview(".lists", listsShow);
	},
	
	render: function() {
		var content = this.template({
			board: this.model
		});
		
		this.$el.html(content);
		this.attachSubviews();
		
		return this;
	}
	
});