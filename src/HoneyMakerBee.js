class HoneyMakerBee extends Bee {
  constructor() {
  	super();
  	this.age: 10;
  	this.food: 'make honey';
  	this.honeyPot: 0;
  }
  makeHoney(){
  	this.honeyPot++;
  }
  giveHoney(){
  	this.honeyPot--;
  }
  // TODO..

};
