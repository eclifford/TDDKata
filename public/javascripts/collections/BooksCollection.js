App.Collections.BooksCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: 'books',
	comparator: function(book) {
		var timestamp = Date.parse(book.get('dateCreated'))*1000;
	  return -timestamp;
	}
});