TrelloClone.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "boardsIndex"
	},
	
	initialize: function($rootEl) {
		this.$rootEl = $rootEl;
	},
	
    _swapView: function(newView) {
        if(this.currentView) {
            this.currentView.remove();
        }
        $('#content').html(newView.render().$el);
        this.currentView = newView;
    },
	
	boardsIndex: function() {
		var boardsIndexView = new TrelloClone.Views.BoardsIndex({
			collection: TrelloClone.boards
		});
		TrelloClone.boards.fetch();
		this._swapView(boardsIndexView);
	}
});