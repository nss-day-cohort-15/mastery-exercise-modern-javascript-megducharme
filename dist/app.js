(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("script tags are good");

var Talents = require("./talents.js"),
    Princess = require("./player.js");

let PrincessClass = function () {
  this.name = "Disney Princess";
  this.healthBonus = 0;
  this.intelligenceBonus = 0;
};

// ORIGINAL PRINCESSES

let OriginalPrincess = function() {
  this.healthBonus = 30;
  this.intelligenceBonus = 0;
};
OriginalPrincess.prototype = new PrincessClass();


let Cinderella = function() {
  this.name = "Cinderella";
  this.healthBonus = this.healthBonus + 3;
  this.intelligenceBonus = this.intelligenceBonus + 7;
};
Cinderella.prototype = new OriginalPrincess();


let Belle = function() {
  this.name = "Belle";
  this.healthBonus = this.healthBonus + 7;
  this.intelligenceBonus = this.intelligenceBonus + 3;
};
Belle.prototype = new OriginalPrincess();


let Jasmine = function() {
  this.name = "Jasmine";
  this.healthBonus = this.healthBonus + 7;
  this.intelligenceBonus = this.intelligenceBonus + 3;
};
Jasmine.prototype = new OriginalPrincess();


// NEW PRINCESSES

let NewPrincess = function () {
  this.healthBonus = 15;
  this.intelligenceBonus = 20;
};
NewPrincess.prototype = new PrincessClass();


let Elsa = function() {
  this.name = "Elsa";
};
Elsa.prototype = new NewPrincess();


let Rapunzel = function() {
  this.name = "Rapunzel";
};
Rapunzel.prototype = new NewPrincess();


let Mona = function() {
  this.name = "Mona";
};
Mona.prototype = new NewPrincess();


//BA PRINCESSES

let BAPrincess = function () {
  this.healthBonus = -5;
  this.intelligenceBonus = 30;
};
BAPrincess.prototype = new PrincessClass();


let Pocahontas = function() {
  this.name = "Pocahontas";
  this.healthBonus = this.healthBonus -7;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Pocahontas.prototype = new BAPrincess();

let Mulan = function() {
  this.name = "Mulan";
  this.healthBonus = this.healthBonus -6;
  this.intelligenceBonus = this.intelligence + 5;
};
Mulan.prototype = new BAPrincess();

let Merida = function() {
  this.name = "Merida";
  this.healthBonus = this.healthBonus -3;
  this.intelligenceBonus = this.intelligence + 3;
};
Merida.prototype = new BAPrincess();






module.exports = {BAPrincess, Pocahontas, Mulan, Merida, Mona, Rapunzel, Elsa, NewPrincess, OriginalPrincess, Cinderella, Belle, Jasmine};













},{"./player.js":2,"./talents.js":3}],2:[function(require,module,exports){
"use strict";

var princessTalents = require("./talents.js"),
    princessClasses = require("./classes.js");

var Princess = function (name) {
  this.class = null;
  this.talent = null;
  this.health = null;

  this.playerName = name || "no-named princess";
  this.intelligence = 0;
};


module.exports = Princess;


var Debbie = new princessClasses.Mulan();
console.log(Debbie)

},{"./classes.js":1,"./talents.js":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
