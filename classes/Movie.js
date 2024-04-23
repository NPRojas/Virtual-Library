// import the Media class:
const Media = require (`./Media.js`)
// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static longestMovie(movies) {
        let longestMovie = movies[0]
        
        for(let i=0; i<movies.length; i++){
            
            if(movies[i].duration>longestMovie.duration){
                longestMovie=movies[i]
            }
        }

        return longestMovie;
    }
}
// don't change below
module.exports = Movie;

/*
1. In `Movie.js`, create a `Movie` class. The `Movie` class should be a subclass of `Media`. Import `Media` into the `Movie.js` file using `require`. 
2. `Music` should have the following properties and methods:
    - `director`: the director of the movie (string)
    - `duration`: the duration of the movie in minutes (number)
    - `rating`: the average rating of the movie (number between 1-5)
    - `summary()`: a method that returns a summary of the movie, including the director, duration, and rating (string) as `"Title: <TITTLE>, Director: <DIRECTOR>, Year: <YEAR>, Genre: <GENRE>, Duration: <DURATION>, Rating: <RATING>"`
3. The `Movie` class should have a static method `longestMovie` that takes an array of `Movie` objects and returns the `Movie` with the longest duration.
4. Export the `Movie` class using `module.exports`.
5. In `index.js`, import `Movie` using `require`.
*/