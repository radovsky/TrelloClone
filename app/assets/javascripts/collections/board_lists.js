TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
	url: function() {
		return this.board.url() + "/lists";
	},
	
	model: TrelloClone.Models.List,
	
    initialize: function (options) {
      this.board = options.board;
    }
});