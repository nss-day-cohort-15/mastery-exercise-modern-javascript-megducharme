"use strict";

var princessTalents = require("./talents.js"),
    princessClasses = require("./classes.js"),
    buildPrincess = require("./buildPrincess.js");


///////////CREATE PLAYER CLASS BASED ON USER SELECTION
var player;

$("#playerClass").on("change", function (evt) {
  var playerClass = $("#playerClass").val();
  // console.log(playerClass);
  player = buildPrincess.buildPlayerPrincess(playerClass);
console.log("player selected", player);
});


//////////CREATE OPPONENT CLASS BASED ON USER SELECTION
var opponent;

$("#opponentClass").on("change", function (evt) {
  var opponentClass = $("#opponentClass").val();
  opponent = buildPrincess.buildOpponentPrincess(opponentClass);
console.log("opponent selected", opponent);
});


//////////DISPLAY PLAYER AND OPPONENT NAMES
let playerName = $("#playerName").val();
let opponentName = $("#opponentName").val();

$("#playerName").keyup(function(e) {
  // console.log(playerName);
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code==13) {
    playerName = $("#playerName").val();
    $("#displayPlayerName").html(`<h1>${playerName}</h1>`);
    // console.log("playerName", playerName);
    $("#playerName").hide();
    }
});


$("#opponentName").keyup(function(e) {
  // console.log(opponentName);
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code==13 || code===9) {
    opponentName = $("#opponentName").val();
    $("#displayOpponentName").html(`<h1>${opponentName}</h1>`);
    // console.log("opponentName", opponentName);
    $("#opponentName").hide();
    }
});


//////////DETERMINE THE BETTER PRINCESS (AKA ATTACK FUNCTION)

  $("#determineBetterPrincess").click(function (evt){
  let playerDamage = player.intelligence + player.damage;
  let opponentDamage = opponent.intelligence + opponent.damage;
  $("#playerWins").addClass("hidden");
  $("#opponentWins").addClass("hidden");
  $("#playerClass").hide();
  $("#opponentClass").hide();
  $("#yourPrincess").html("Your Princess");
  $("#opponentPrincess").html("The other Princess");

  player.health = player.health - opponentDamage;
  opponent.health = opponent.health - playerDamage;

  $("#displayPlayerStats").html(`<h4>${player.name}'s health is currently ${player.health}</h4>`);

  $("#displayOpponentStats").html(`<h4>${opponent.name}'s health is currently ${opponent.health}</h4>`);

    console.log("player health", player.health);
    console.log("opponent damage", opponentDamage);
    console.log("player intelligence", player.intelligence);
    console.log("player health after fight", player.health);

    if(player.health <= 0) {
      $("#determineBetterPrincess").hide();
      $("#playerClass").hide();
      $("#opponentClass").hide();
      $("#displayOpponentName").hide();
      $("#displayPlayerName").hide();
      $("#opponentWins").removeClass("hidden");
    } else if (opponent.health <= 0){
      $("#determineBetterPrincess").hide();
      $("#playerClass").hide();
      $("#opponentClass").hide();
      $("#displayOpponentName").hide();
      $("#displayPlayerName").hide();
      $("#playerWins").removeClass("hidden");
    }
  });

