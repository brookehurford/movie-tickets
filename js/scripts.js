// Business Logic //
function Ticket(movieTitle, times, age, ticketPrice) {
  this.movieTitle = movieTitle;
  this.times = times;
  this.age = age;
  this.ticketPrice = ticketPrice;
}

Ticket.prototype.price = function() {

  if ((this.age === "adult") && (this.times === "matinee")) {
    return this.ticketPrice = 8;
  }
  else if ((this.age === "honoredCitizen") && (this.times === "evening")) {
    return this.ticketPrice = 5;
  }
  else if ((this.age === "honoredCitizen") && (this.times ==="matinee")) {
    return this.ticketPrice = 4;
  }
  else {
    return this.ticketPrice = 10;
  }
};


$(document).ready(function(){
  $("form#movie").submit(function(event){

  var movieName = $("#movie-name").val();
  var movieTime = $("#movie-time").val();
  var patronAge = $("#patron-age").val();

  var ticket = new Ticket(movieName, movieTime, patronAge);

  var ticketPrice = ticket.price();

  $(".price").text(ticketPrice);


  event.preventDefault();
  });







});
