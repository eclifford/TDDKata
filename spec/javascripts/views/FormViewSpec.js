describe("FormView", function() {
  beforeEach(function() {
    this.view = new App.Views.FormView();
    setFixtures('<form id=bookForm></form>');
  });

  describe("Creation", function() {
    it("should create a form element", function() {
      expect(this.view.el).t
    });
  });
});