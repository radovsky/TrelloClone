TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
	className: 'boards',
	
	template: JST['boards/show'],
	
	url: "api/boards/:id",
	
	initialize: function() {
		this.listenTo(
			this.model,
			"all",
			this.render
		);
		
		this.listenTo(
			this.model.lists(),
			"add",
			this.addList
		);
		
		this.listenTo(
			this.model.lists(),
			"remove",
			this.removeList
		);
		
		var listNewView = new TrelloClone.Views.ListsNew({
			model: this.model
		});
		
		this.addSubview(".lists-new", listNewView);
        
        this.model.lists().each(this.addList.bind(this));
	},
	
	removeList: function(list){
		var subview = _.find(
			this.subviews(".lists"),
			function(subview) {
				return subview.model === list;
			}
		);
		this.removeSubview(".lists", subview);
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
        
        $("body").removeClass('rootpage');
		
		this.$el.html(content);
		this.attachSubviews();
		var that = this;
		$(".lists").sortable({
			forcePlaceholderSize: true,
			handle: '.list-title',
			
			update: function(event, ui) {
				var data = $(this).sortable('serialize');
				$.ajax({
					data: data,
					type: 'PATCH',
					url: "api/boards/16"
				});
			}
		});
		
		$(".cards").sortable({
			connectWith: ".cards",
			forcePlaceholderSize: true,
			handle: '.card-title',
			update: function( event, ui ) {
				console.log('uhhh');
			}
		});
		
		return this;
	}
});