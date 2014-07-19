TrelloClone.Views.ListsNew = Backbone.View.extend({
	
	template: JST["lists/new"],
	
	events: {
		"submit form": "submit"
	},
	
	
	render: function() {
		var theBoard = this.model || {}
		var content = this.template({ board: theBoard });
		this.$el.html(content);
		return this;
	},
	
	submit: function(event) {
		var view = this;
		event.preventDefault();
		
		var params = $(event.currentTarget).serializeJSON();
		var newList = new TrelloClone.Models.List(params["list"]);
		newList.save({}, {
			success: function() {
				view.model.lists().add(newList);
				view.render();
			}
		});
	}
});