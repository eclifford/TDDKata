describe("Book model", function() {
  describe("when created", function() {

  	beforeEach(function() {
  	  this.book = new App.Models.Book();
  	});

    it("dateCreated should default to todays date", function() {
      expect(this.book.get('dateCreated')).toEqual(Date());
    });

    it("should not save when name is empty", function() {
      this.spy = sinon.spy();
      this.book.bind("error", this.spy);
      this.book.save({"name": ""});
      expect(this.spy).toHaveBeenCalledOnce();
      expect(this.spy).toHaveBeenCalledWith(
      	this.book,
      	"name is a required field"
      )
    });
  });
});