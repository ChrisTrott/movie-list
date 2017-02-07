class MovieStorage {
  addMovie(movie) {
    let movies = [];
    movies = this.getMovies();
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  removeMovie(index) {
    let movies = [];
    movies = this.getMovies();
    if (movies.length > 1) {
      movies = movies.splice(index, 1);
    } else {
      movies = [];
    }
    localStorage.setItem('movies', JSON.stringify(movies));
    return movies;
  }

  getMovies() {
    let movies = [];
    movies = JSON.parse(localStorage.getItem('movies'));
    return movies;
  }

  clearMovies() {
    localStorage.setItem('movies', JSON.stringify([]));
  }
}

export default MovieStorage;
