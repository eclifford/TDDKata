App.Views.EncyclopediaView = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {
		_.bindAll(this, "render");
		this.template = '<h1><%= name %></h1>' +
		'<div class="count">count:(<%= count %>)</div>' +
		'<div class="year">Year Published:<%= year %></div>' +
		'<div class="dateCreated">Date Created: <%= dateCreated %></div>';
	},

	render: function() {
		var output = _.template(this.template, this.model.toJSON());
		$(this.el).html(output);
		return this;
	}
});