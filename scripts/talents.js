"use strict";

var Talent = function() {
  this.damage = 1;
};

var ApplyingMakeup = function() {
  this.name = "Applying Makeup";
  this.damage = 3;
};
ApplyingMakeup.prototype = new Talent();

var BuildingAFire = function() {
  this.name = "Building A Fire";
  this.damage = 4;
};
BuildingAFire.prototype = new Talent();

var TalkingToAnimals = function() {
  this.name = "Talking To Animals";
  this.damage = 8;
};
TalkingToAnimals.prototype = new Talent();

module.exports = {Talent, ApplyingMakeup, BuildingAFire, TalkingToAnimals};
