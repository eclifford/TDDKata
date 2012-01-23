App.Views.EncyclopediaListView = Backbone.View.extend({
	tagName: "ul",

	className: "encyclopedia",
	
	initialize: function() {
		_.bindAll(this, "render", "addOne");
		if(this.collection) {
			this.collection.bind("add", this.render);
			this.collection.bind("reset", this.render);
			this.collection.bind("change", this.render);		
		}
	},

	render: function() {
		this.addAll();
	},

	addAll: function() {
		$(this.el).html('');
		_this = this;
		_.each(this.collection.models, function(encyclopedia) {
			_this.addOne(encyclopedia);
		});
	},
	
	addOne: function(encyclopedia) {
		var view = new App.Views.EncyclopediaView({
			model: encyclopedia
		});
		$(this.el).append(view.render().el);
	}
});