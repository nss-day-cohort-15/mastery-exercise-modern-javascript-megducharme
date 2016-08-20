

Talent = function() {
  this.damage = 1;
};

ApplyingMakeup = function() {
  this.name = "Applying Makeup";
  this.damage = 3;
};
ApplyingMakeup.prototype = new Talent();

BuildingAFire = function() {
  this.name = "Building A Fire";
  this.damage = 4;
};
BuildingAFire.prototype = new Talent();

TalkingToAnimals = function() {
  this.name = "Talking To Animals";
  this.damage = 8;
};
TalkingToAnimals.prototype = new Talent();

