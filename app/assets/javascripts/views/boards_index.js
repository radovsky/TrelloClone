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
		var content = this.template({ board: this.model });
		this.$el.html(content);
		var $ul = this.$el.find('ul#boards');
		this.collection.each(function(board){
			var $li = $('<li>');
			$li.html(board.escape('title'));
			$ul.append($li);
		});
		
		
		var boardNewView = new TrelloClone.Views.BoardsNew({
			collection: this.collection
		})
		
		this.$el.append(boardNewView.render().$el);
		
		return this;
	}
});