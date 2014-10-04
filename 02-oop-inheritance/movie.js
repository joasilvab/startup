var movies = (function() {
  function movie(){
  this.observers = [],
  this.attributes = {};
  this.actors = [];
}
  movie.prototype =  {
    constructor : movie,
    set : function set(attr,value) {
      this.attributes[attr] = value;
    },
    get : function get(attr) {
      return this.attributes[attr];
    },
    play : function play() {
      var title = this.get('title');
      if (title) console.log('Playing ' + title);
      this.observers.forEach(
        function(item){

          //This is what the listener should do
          item.watch(title); 
        }
      );
    },
    stop : function stop() {
      var title = this.get('title');
      if (title) console.log(title+' has stopped.');
    },
    subscribe : function subscribe(obs) {
      this.observers.push(obs);
    },
    unsubscribe : function unsubscribe(obs) {
      this.observers.splice(this.observers.indexOf(obs),1);
    },
    addActor : function addActor(actor) {
      this.actors.push(actor);
    },
    removeActor : function removeActor(actor) {
      this.actors.splice(this.observers.indexOf(actor),1);
    }
  }
  asSocial.call(movie.prototype);

  function downloadableMovie() {
    Movie.call(this);
  }
  downloadableMovie.prototype = new movie();
  downloadableMovie.prototype.constructor = downloadableMovie;
  downloadableMovie.prototype.download = function download() {};
  return {
    movie : movie,
    downloadableMovie : downloadableMovie
  }
}());

var movieObserver = (function() {
  function movieObserver(name) {
    this.name = name;
  }
  return movieObserver;
}());

var actor = (function() {
  function actor(name) {
    this.name = name;
  }
  return actor;
}());

movieObserver.prototype = {
  constructor : movieObserver,
  watch : function watch(movieName) {
    console.log(this.name + ' is watching ' + movieName);
  }
}

var peli = new movies.movie(),
  joa = new movieObserver('Joaquín'),
  mati = new movieObserver('Matias'),
  act = new actor('actor1'),
  act2 = new actor('actor2'),
  term = new movies.movie();
peli.set('title', 'Sin City')

peli.subscribe(joa);
peli.subscribe(mati);
peli.play();
term.set('title', 'Terminator');

term.addActor(act);
term.addActor(act2);
console.log(term.actors);
term.removeActor(act);
console.log(term.actors);
