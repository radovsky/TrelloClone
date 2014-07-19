TrelloClone.Views.BoardsShow = Backbone.View.extend({
	
	template: JST['boards/show'],
	
	initialize: function() {
		this.listenTo(
			this.model.lists(),
			"sync add delete",
			this.render
		);
	},
	
	render: function() {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		
		var $ul = this.$el.find('ul#lists');
		this.model.lists().each(function(list) {
			var $li = $('<li>');
			$li.html(list.escape('title'));
			$ul.append($li);
		});
		
		var listNewView = new TrelloClone.Views.ListsNew({
			model: this.model
		});
		
		this.$el.append(listNewView.render().$el);
		
		return this;
	},
	
});