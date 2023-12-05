// Class - Movie
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG() {
    return `The Movie Rating Is ${this.rating}`;
  }
}
var movieData1 = new Movie("Casino Royale", "Eon Productions", "PG13");
var movieData2 = new Movie(
  "The Dark Knight Rises",
  "Warner Bros. Pictures, Legendary Pictures, DC Entertainment, Syncopy Inc.",
  "PG"
);
//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “P.­13”
console.log(movieData1);
console.log(movieData2);
console.log(movieData1.getPG());
console.log(movieData2.getPG());
