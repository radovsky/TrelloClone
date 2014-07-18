window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  TrelloClone.boards = new TrelloClone.Collections.Boards();

	  var $rootEl = $('#content');
	  new TrelloClone.Routers.AppRouter($rootEl);
	  Backbone.history.start();
  }
};