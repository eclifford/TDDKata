App.Models.Book = Backbone.Model.extend({
	id: "",
	name: "",
	dateCreated: "",
	count: 0,

	defaults: {
		id: "",
		name: "",
		dateCreated: Date(),
		count: 1
	},
	
	validate: function(attrs) {
		if (!attrs.name) {
			return "name is a required field";
		}
	}
});

