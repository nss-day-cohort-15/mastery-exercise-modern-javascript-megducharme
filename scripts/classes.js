"use strict";

console.log("script tags are good");

var Talents = require("./talents.js"),
    Princess = require("./player.js");

let PrincessClass = function () {
  this.name = "Disney Princess";
  this.health = 0;
  this.intelligence = 0;
};

// ORIGINAL PRINCESSES

let OriginalPrincess = function() {
  this.health = parseInt(Math.random()*(40-90)+40);
  this.intelligence = 0;
  this.damage = 10;
};
OriginalPrincess.prototype = new PrincessClass();


let Cinderella = function() {
  this.name = "Cinderella";
  this.health = this.health + 3;
  this.intelligence = this.intelligence + 7;
};
Cinderella.prototype = new OriginalPrincess();


let Belle = function() {
  this.name = "Belle";
  this.health = this.health + 7;
  this.intelligence = this.intelligence + 3;
};
Belle.prototype = new OriginalPrincess();


let Jasmine = function() {
  this.name = "Jasmine";
  this.health = this.health + 7;
  this.intelligence = this.intelligence + 3;
};
Jasmine.prototype = new OriginalPrincess();


// NEW PRINCESSES

let NewPrincess = function () {
  this.health = parseInt(Math.random()*(40-70)+40);
  this.intelligence = 20;
  this.damage = 15;
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


let Moana = function() {
  this.name = "Moana";
};
Moana.prototype = new NewPrincess();


//BA PRINCESSES

let BAPrincess = function () {
  this.health = parseInt(Math.random()*(60-90)+60);
  this.intelligence = 30;
  this.damage = 20;
};
BAPrincess.prototype = new PrincessClass();


let Pocahontas = function() {
  this.name = "Pocahontas";
  this.health = this.health - 7;
  this.intelligence = this.intelligence + 10;
};
Pocahontas.prototype = new BAPrincess();

let Mulan = function() {
  this.name = "Mulan";
  this.health = this.health - 6;
  this.intelligence = this.intelligence + 5;
};
Mulan.prototype = new BAPrincess();

let Merida = function() {
  this.name = "Merida";
  this.health = this.health -3;
  this.intelligence = this.intelligence + 3;
};
Merida.prototype = new BAPrincess();


module.exports = {PrincessClass, BAPrincess, Pocahontas, Mulan, Merida, Moana, Rapunzel, Elsa, NewPrincess, OriginalPrincess, Cinderella, Belle, Jasmine};


