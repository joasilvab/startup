var peli = new movie(),
  joa = new movieObserver('Joaquín'),
  mati = new movieObserver('Matias'),
  act = new actor('actor1'),
  act2 = new actor('actor2'),
  term = new movie();
peli.set('title', 'Sin City');
peli.subscribe(joa)
  .subscribe(mati)
  .play();
term.set('title', 'Terminator');
term.addActor(act)
  .addActor(act2);
console.log(term.actors);
term.removeActor(act);
console.log(term.actors);
