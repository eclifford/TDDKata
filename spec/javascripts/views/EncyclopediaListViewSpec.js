describe("EncyclopediaListView", function() {
  beforeEach(function() {
    this.view = new App.Views.EncyclopediaListView();
  });

  describe("Rendering", function() {
    beforeEach(function() {
      this.encyclopediaView = new Backbone.View();
      this.encyclopediaRenderSpy = new sinon.spy(this.encyclopediaView, "render");
      this.encyclopediaViewStub = sinon.stub(App.Views, "EncyclopediaView").returns(this.encyclopediaView);

      this.encyclopedia1 = new Backbone.Model({id: 'book1', name: 'book1', year: '1999'});

      this.view.collection = new Backbone.Collection([this.encyclopedia1]);
      this.view.render();
    });

    afterEach(function() {
      App.Views.EncyclopediaView.restore();
    }); 

    it("should create a EncyclopediaView for each item", function() {
      expect(this.encyclopediaViewStub).toHaveBeenCalledOnce();
      expect(this.encyclopediaViewStub).toHaveBeenCalledWith({model: this.encyclopedia1});
    });

    it("should render each EncyclopediaView item", function() {
      expect(this.encyclopediaRenderSpy).toHaveBeenCalledOnce();
    });

    it("appends the EncyclopediaView to the EncyclopediaListView", function() {
      	expect($(this.view.el).children().length).toEqual(1);
    });
  });
});