class MovieSort {
  sortByTitle(movies) {
    return movies.sort(this.compareTitle);
  }

  compareTitle(a, b) {
    if (a.Title < b.Title)
      return -1;
    if (a.Title > b.Title)
      return 1;
    return 0;
  }

  sortByRating(movies) {
    return movies.sort(this.compareRating);
  }

  compareRating(a, b) {
    let aRating = parseFloat(a.imdbRating);
    let bRating = parseFloat(b.imdbRating);
    return bRating - aRating;
  }

  sortByYear(movies) {
    return movies.sort(this.compareYear);
  }

  compareYear(a, b) {
    let aYear = parseInt(a.Year);
    let bYear = parseInt(b.Year);
    return aYear - bYear;
  }
}

export default MovieSort;
