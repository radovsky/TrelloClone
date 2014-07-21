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
			this.addList.bind(this)
		);
		
		
		this.listenTo(
			this.model,
			"sync",
			this.render
		);
		
		this.model.lists().each(this.addList.bind(this));
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
	
	// render: function() {
	// 	var content = this.template({ board: this.model });
	// 	this.$el.html(content);
	//
	// 	var $ul = this.$el.find('ul#lists');
	// 	this.model.lists().each(function(list) {
	// 		alert(list.escape('title'));
	// 		var $li = $('<li>');
	// 		$li.html(list.escape('title'));
	// 		$li.append($("<ul id='cards'></ul>"));
	// 		var $ul2 = $li.find('ul#cards');
	//
	// 		list.cards().each(function(card) {
	// 			var $li2 = $('<li>');
	// 			$li2.html(card.escape('title'));
	// 			$ul2.append($li2);
	// 		});
	//
	// 		$ul.append($li);
	// 	});
	//
	// 	var listNewView = new TrelloClone.Views.ListsNew({
	// 		model: this.model
	// 	});
	//
	// 	this.$el.append(listNewView.render().$el);
	//
	// 	return this;
	// },
	
});