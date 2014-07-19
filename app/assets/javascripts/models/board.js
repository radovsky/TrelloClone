TrelloClone.Models.Board = Backbone.Model.extend({
	urlRoot: "/api/boards",
	
	parse: function(jsonResp) {
		if (jsonResp.lists) {
			this.lists().set(jsonResp.lists, { parse: true });
			delete jsonResp.lists;
		}
		if (jsonResp.members) {
			this.members().set(jsonResp.members, { parse: true });
			delete jsonResp.members;
		}
		return jsonResp;
	},
	
	lists: function() {
		this._lists = this._lists ||
		new TrelloClone.Collections.BoardLists({ board: this });
		return this._lists;
	},
	
	members: function() {
		this._members = this._members ||
		new TrelloClone.Collections.BoardMembers({ board: this });
		return this._members;
	}
});