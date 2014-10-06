define(['movie'], function(movie) {
  function director(name, quotes) {
    this.name = name;
    this.quotes = quotes;
  }
  director.prototype.speak = function() {
  	return this.name + ' says :\n' + this.quotes.join('\n');
  	//return this;
  }

  director.prototype.set = function(attr, value) {
  	this[attr] = value;
  	return this;
  }

  return director;
}
);