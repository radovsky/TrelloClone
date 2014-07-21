TrelloClone.Views.BoardsIndex = Backbone.View.extend({
	
	template: JST["boards/index"],
	tagName: "ul",

	initialize: function(options) {
		this.collection = options.collection;
		this.listenTo(
			this.collection,
			"sync",
			this.render
		);
		
		
		
	},
	
	render: function() {
		var that = this;
		var boardsCollection = this.collection || [];
		var content = this.template({ 
			boards: boardsCollection 
		});
		this.$el.html(content);

		var boardNewView = new TrelloClone.Views.BoardsNew({
			collection: this.collection
		});
		
		this.$el.append(boardNewView.render().$el);
		
		return this;
	}
});