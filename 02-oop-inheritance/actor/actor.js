!function(global) {
  'use strict';

  var previousActor = global.actor;

  function actor(name) {
    this.name = name;
  }

  actor.noConflict = function noConflict() {
  	global.actor = previousActor;
  	return actor;
  };

  global.actor = actor;
}(this);
