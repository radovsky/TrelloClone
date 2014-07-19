TrelloClone.Collections.ListCards = Backbone.Collection.extend({
	url: function() {
		return this.list.url() + "/cards";
	},
	
	model: TrelloClone.Models.Card,
	
    initialize: function (options) {
      this.list = options.list;
    }
});