App.Models.Encyclopedia = App.Models.Book.extend({
	year: '',

	defaults: {
		name: "",
		dateCreated: Date(),
		count: 1,
		year: Date()
	}
});

