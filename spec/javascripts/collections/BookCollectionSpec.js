describe("Books Collection", function() {
  beforeEach(function() {
    this.book1 = new Backbone.Model({
    	id: 1,
    	name: 'All Quiet on the Western Front',
    	dateCreated: "October 13, 1940 11:13:00"
    });

    this.book2 = new Backbone.Model({
    	id: 2,
    	name: 'Dune',
    	dateCreated: "August 13, 1975 11:13:00"
    });
    this.book3 = new Backbone.Model({
    	id: 3,
    	title: 'Lord of the Rings',
    	dateCreated: "October 13, 1955 11:13:00"
    });

    this.books = new App.Collections.BooksCollection();
    this.bookStub = sinon.stub(App.Models, "Book");
  });

  afterEach(function() {
    this.bookStub.restore();
  });

  describe("when new item added", function() {
 		beforeEach(function() {
 			this.model = new Backbone.Model({
	    	id: 5,
	    	name: "Foo"
	    });
	    this.bookStub.returns(this.model);  
	    this.books.model = App.Models.Book;
	    this.books.add({id:5, name:'Foo'});     
 		});   

 		it("should add a book", function() {
    	expect(this.books.length).toEqual(1);
  	});
  });

  describe("when fetching items in collection", function() {
  	beforeEach(function() {
 			this.books.model = App.Models.Book;
  		this.books.add([this.book1, this.book2, this.book3]);
  	});

  	afterEach(function() {

  	});

    it("oldest dateCreated should be last", function() {
      expect(this.books.at(2)).toBe(this.book1);
    });

    it("newest dateCreated should be first", function() {
    	expect(this.books.at(0)).toBe(this.book2);
    });
  });


});