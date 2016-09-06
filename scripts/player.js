"use strict";

var princessTalents = require("./talents.js"),
    princessClasses = require("./classes.js"),
    buildPrincess = require("./buildPrincess.js");

var Princess = function (name) {
  this.class = null;
  this.talent = null;
  this.health = null;

  this.playerName = name || "no-named princess";
  this.intelligence = 0;

  this.toString = function () {
    var output = [this.playerName,
    " aka ",
    this.class,
    "is showing off her ability to ",
    this.talent,
    "has ",
    this.health,
    "health!"
    ].join("");
    return output;
  };
};

///////////CREATE PLAYER CLASS BASED ON USER SELECTION
var player;
  console.log(player);

$("#playerClass").on("change", function (evt) {
  var playerClass = $("#playerClass").val();
  console.log(playerClass);
  buildPrincess.buildPlayerPrincess(playerClass);
});


//////////CREATE OPPONENT CLASS BASED ON USER SELECTION
var opponent;
  console.log(opponent);

$("#opponentClass").on("change", function (evt) {
  var opponentClass = $("#opponentClass").val();
  buildPrincess.buildOpponentPrincess(opponentClass);
});


//////////DISPLAY PLAYER AND OPPONENT NAMES
let playerName = $("#playerName").val();
let opponentName = $("#opponentName").val();

$("#playerName").keyup(function(e) {
  console.log(playerName);
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code==13) {
    playerName = $("#playerName").val();
    $("#displayPlayerName").html(`<h1>${playerName}</h1>`);
    console.log("playerName", playerName);
    $("#playerName").hide();
    }
});


$("#opponentName").keyup(function(e) {
  console.log(opponentName);
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code==13) {
    opponentName = $("#opponentName").val();
    $("#displayOpponentName").html(`<h1>${opponentName}</h1>`);
    console.log("opponentName", opponentName);
    $("#opponentName").hide();
    }
});


//////////DETERMINE THE BETTER PRINCESS (AKA ATTACK FUNCTION)

// function determineBetterPrincess (player, opponent) {

// }


module.exports = {Princess};


