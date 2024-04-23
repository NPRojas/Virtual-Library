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
