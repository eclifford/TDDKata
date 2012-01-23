App.Routes.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index"
	},

	index: function() {
		FormView = new App.Views.FormView({
		 el: 'div#bookForm'
		});	

		Books = new App.Collections.BooksCollection();
		Encyclopedias = new App.Collections.EncyclopediaCollection();

		encyclopediaListView = new App.Views.EncyclopediaListView({
			el: 'ul.encyclopedia',
			collection: Encyclopedias
		});	
	}
})