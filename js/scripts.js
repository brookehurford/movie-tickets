// Business Logic //

function Ticket(movieTitle, times, age) {
  this.movieTitle = movieTitle;
  this.times = times;
  this.age = age;
}

Ticket.prototype.price = function() {
  debugger;
  if ((this.age === "adult") && (this.times === "1:00pm")) {
    return 8;
  }
  else if ((this.age === "honoredCitizen") && (this.times === "5:00pm")) {
    return 5;
  }
  else {
    return 10;
  }
};
