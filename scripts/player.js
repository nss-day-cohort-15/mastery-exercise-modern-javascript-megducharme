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
