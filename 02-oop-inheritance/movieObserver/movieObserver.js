!function(global) {
  'use strict';

  var previousMovieObserver = global.movieObserver;

  function movieObserver(name) {
    this.name = name;
  }

  movieObserver.prototype.watch = function watch(movieName) {
    console.log(this.name + ' is watching ' + movieName);
    return this;
  }

  movieObserver.noConflict = function noConflict() {
  	global.movieObserver = previousMovieObserver;
  	return movieObserver;
  };

  global.movieObserver = movieObserver;
}(this);
