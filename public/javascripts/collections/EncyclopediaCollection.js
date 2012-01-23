App.Collections.EncyclopediaCollection = Backbone.Collection.extend({
	model: App.Models.Encyclopedia,
	comparator: function(book) {
		var timestamp = Date.parse(book.get('dateCreated'))*1000;
	  return -timestamp;
	}
});