!function(global){
  'use strict';

  var previousdownloadableMovie = global.downloadableMovie;

  function downloadableMovie() {
    movie.call(this);
  }

  downloadableMovie.prototype = new movie();
  downloadableMovie.prototype.constructor = downloadableMovie;
  downloadableMovie.prototype.download = function download() {
  	return this;
  }

    downloadableMovie.noConflict = function noConflict() {
  	global.downloadableMovie = previousdownloadableMovie;
  	return downloadableMovie;
  };

  global.downloadableMovie = downloadableMovie;
}(this);
