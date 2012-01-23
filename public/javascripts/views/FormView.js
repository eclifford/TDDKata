App.Views.FormView = Backbone.View.extend({
	initialize: function() {
		_.bindAll(this, 'render', 'save');
		this.template = _.template('<form><label for="cbEncyclopedia">Is Encyclopedia</label>' +
		  '<input type="checkbox" name="cbEncyclopedia" checked>' +
		  '<label for="tbName">Name:</label>' +
			'<input type="text" name="tbName" id="tbName" value="" />' +
			'<label for="tbYear">Year:</label><input type="text" name="tbYear" value="" />' +
			'<input type="submit" name="btnSubmit" value="Add"></form>');
		this.render();
	},

	events: {
		"submit form": "save",
		"click input[name='cbEncyclopedia']": "toggleBookEncyclopedia"
	},

	render: function() {
		$(this.el).html(this.template({}));
		return this;
	},

	toggleBookEncyclopedia: function() {
		$("input[name='tbYear']").toggleClass("hidden");
		$("label[for='tbYear']").toggleClass("hidden");
	},

	validate: function() {
		if($("input[name='cbEncyclopedia']").is(':checked')) {
			var name = $("input[name='tbName']", this.el).val();
			var year = $("input[name='tbYear']", this.el).val();

			if(name === "" || year == "")
			{
				$("body").addClass("red");
				return false;
			}	else {
				$("body").removeClass("red");
				return true;
			}
		}
		else {
			if($("input[name='tbName']", this.el).val() == "")
			{
				$("body").addClass("red");
				return false;
			}	else {
				$("body").removeClass("red");
				return true;
			}
		}
	},

	save: function() {
		event.preventDefault();
		if(this.validate()) {
			if($("input[name='cbEncyclopedia']").is(':checked')) {
				var name = $("input[name='tbName']").val();
				var year = $("input[name='tbYear']").val();

				var model = Encyclopedias.get(name);
				if(model) {
					var _count = model.get('count');
					var success = model.set({count: _count+1}, {silent: true});
					model.change();
				}
				else
					Encyclopedias.add(new App.Models.Encyclopedia({id: name, name: name, year: year}));
			}
			else {
				var name = $("input[name='tbName']").val();
				Books.add(new App.Models.Book({name: name}));
			}	
		}
	}
});
