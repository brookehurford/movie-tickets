describe('ticketPrice', function() {
  it('will create a price with the following properties', function(){
    var testPrice = new ticketPrice("Star Wars", "11:00am", "adult", "$10");
    expect(testPrice.movieTitle).to.equal("Star Wars")
    expect(testPrice.times).to.eql("11:00am");
    expect(testPrice.age).to.equal("adult");
    expect(testPrice.price).to.equal("$10");
  });

  it('will provide a price based on ticket price object', function () {
    expect(testPrice.age("adult")).to.equal("$8");
  })

  // it('will show list of movie times based on movie choice', function () {
  //   expect ("select#sisters").to.eql(["11:00, 1:20pm, 5:30pm, 7:10pm"]);
  // })

});

// describe('calculatePrice', function(){
//   it('will calculate a price based on the following properties', function(){
//     var calculatePrice = new calculatePrice ("time", "age");
//     expect(calculatePrice.times).to.equal([11:10])
//     expect(calculate)
//   });
// });







// Movie Tickets //
//var ticketPrice =
//timeOfDay
//discountCitizen
//firstRunMovies



//it will show a ticket price with the following properties:
