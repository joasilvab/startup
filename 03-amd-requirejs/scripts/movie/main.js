define(function() {

  function movie(){
    this.observers = [],
    this.attributes = {};
    this.actors = [];
    this.director;
  }

  //It's the same as this.observer for example
  movie.prototype.set = function set(attr,value) {
    this[attr] = value;
    return this;
  }
  movie.prototype.get = function get(attr) {
    return this[attr];
  }
  movie.prototype.play = function play() {
    var title = this.get('title');
    if (title) console.log('Playing ' + title);
    this.observers.forEach(
      function(item){

        //This is what the listener should do
        item.watch(title); 
      }
    );
    return this;
  }
  movie.prototype.stop = function stop() {
    var title = this.get('title');
    if (title) console.log(title+' has stopped.');
    return this;
  }
  movie.prototype.subscribe = function subscribe(obs) {
    this.observers.push(obs);
    return this;
  }
  movie.prototype.unsubscribe = function unsubscribe(obs) {
      this.observers.splice(this.observers.indexOf(obs),1);
      return this;
  }
  movie.prototype.addActor = function addActor(actor) {
    this.actors.push(actor);
    return this;
  }
  movie.prototype.removeActor = function removeActor(actor) {
    this.actors.splice(this.observers.indexOf(actor),1);
    return this;
  }
  
  //asSocial.call(movie.prototype);

  return movie;
});
