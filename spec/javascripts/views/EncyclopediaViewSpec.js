describe("EncyclopediaView", function() {
  beforeEach(function() {
    this.model = new Backbone.Model({
    	id: 'Encyclopedia Britannica',
    	name: 'Encyclopedia Britannica',
    	year: '2012',
    	count: 1,
    	dateCreated: 'October 13, 1940 11:13:00'
    });
    this.view = new App.Views.EncyclopediaView({model: this.model});
    setFixtures('<ul class="encyclopedia"></ul>');
  });

  describe("Rendering", function() {
    it("returns the view object", function() {
      expect(this.view.render()).toEqual(this.view);
    });

    describe("Template", function() {
      beforeEach(function() {
        $('.encyclopedia').append(this.view.render().el);
      });

      it("has the correct name", function() {
        expect($('.encyclopedia').find('h1')).toHaveText('Encyclopedia Britannica');
      });

      it("has the correct year", function() {
      	expect($('.encyclopedia').find('.year')).toHaveText('Year Published:2012');
      });

      it("has the correct count", function() {
        expect($('.encyclopedia').find('.count')).toHaveText('count:(1)');
      });
    });
  });
});