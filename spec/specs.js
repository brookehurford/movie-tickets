describe('Ticket', function() {
  it('will create a price with the following properties', function(){
    var testTicket = new Ticket("Star Wars", "11:00am", "adult");
    expect(testTicket.movieTitle).to.equal("Star Wars")
    expect(testTicket.times).to.equal("11:00am");
    expect(testTicket.age).to.equal("adult");
  });

  it("will show a $8 ticket price for adults seeing a matinee", function(){
    var testTicket = new Ticket("Star Wars", "1:00pm", "adult");
    expect(testTicket.price()).to.equal(8);
  });

  it ("will show a $5 ticket price for an honored citizen seeing an evening movie", function() {
    var testTicket = new Ticket("Star Wars", "5:00pm", "honoredCitizen");
    expect(testTicket.price()).to.equal(5);
  });

  it("will show a $4 ticket price for an honored citizen seeing a matinee", function(){
    var testTicket = new Ticket("Star Wars", "11:00am", "honoredCitizen");
    expect(testTicket.price()).to.equal(4);
  });

});

// describe('calculatePrice', function(){
//   it('will calculate a price based on the following properties', function(){
//     var testPrice = new Movie("Star Wars", "11:00am", "adult");
//     expect(testPrice.price()).to.equal(10)
//   });
// });







// Movie Tickets //
//var ticketPrice =
//timeOfDay
//discountCitizen
//firstRunMovies



//it will show a ticket price with the following properties:
