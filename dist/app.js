(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var princessClasses = require("./classes.js");

let princess;
let opponent;


//PLAYER SELECTION INHERITS HEALTH/INTELL/DAMAGE
function buildPlayerPrincess (princessName) {
  if (princessName === "Belle"){
    princess = new princessClasses.Belle();
    // console.log(princess.health);
    $("#playerPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/4/4a/Belle_2011.jpg/revision/latest?cb=20121220232742'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is ${princess.health}.`);
    // console.log(princess);
    return princess;

  } else if (princessName === "Cinderella"){
    princess = new princessClasses.Cinderella();
    $("#playerPhoto").html("<img src='http://thefeministwire.com/wp-content/uploads/2014/03/Cinderella.jpg'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is ${princess.health}.`);

    return princess;

  } else if (princessName === "Jasmine"){
    princess = new princessClasses.Jasmine();
    $("#playerPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/8/88/Jasmine_13.png/revision/latest?cb=20131219204418'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;

  } else if (princessName === "Elsa"){
    princess = new princessClasses.Elsa();
    $("#playerPhoto").html("<img src='https://doxiequeen1.files.wordpress.com/2013/12/tumblr_mxk28po0ws1rayburo1_500.jpg'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;

  } else if (princessName === "Rapunzel"){
    princess = new princessClasses.Rapunzel();
    $("#playerPhoto").html("<img src='http://vignette1.wikia.nocookie.net/p__/images/b/b3/Rapunzel_1_highres.jpg/revision/latest?cb=20120617190301&path-prefix=protagonist'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;

  } else if (princessName === "Moana"){
    princess = new princessClasses.Moana();
    $("#playerPhoto").html("<img src='http://www.juliemag.com/files/1457575_10153549633612182_2820443791690045900_n.jpg'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;

  } else if (princessName === "Pocahontas"){
    princess = new princessClasses.Pocahontas();
    $("#playerPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/236x/72/52/cb/7252cb729944eded00b82eafb0acbb3a.jpg'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;

  } else if (princessName === "Mulan"){
    princess = new princessClasses.Mulan();
    $("#playerPhoto").html("<img src='http://static8.comicvine.com/uploads/original/11/111746/4352749-famulan.jpg'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;

  } else if (princessName === "Merida"){
    princess = new princessClasses.Merida();
    $("#playerPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/564x/7b/83/13/7b831340cd7102907fd5c75a6f6ef7cb.jpg'/>");
    $("#displayPlayerStats").html(`<h4>${princessName}'s health is starting at ${princess.health}</h4>`);
    return princess;
  }
}

//OPPONENT SELECTION INHERITS HEALTH/INTELL/DAMAGE
function buildOpponentPrincess (princessName) {
  if (princessName === "Belle"){
    opponent = new princessClasses.Belle();
    $("#opponentPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/4/4a/Belle_2011.jpg/revision/latest?cb=20121220232742'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    // console.log(opponent.health);
    // console.log("opponent", opponent);
    return opponent;

  } else if (princessName === "Cinderella"){
    opponent = new princessClasses.Cinderella();
    $("#opponentPhoto").html("<img src='http://thefeministwire.com/wp-content/uploads/2014/03/Cinderella.jpg'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
      // console.log("opponent", opponent);
    return opponent;

  } else if (princessName === "Jasmine"){
    opponent = new princessClasses.Jasmine();
    $("#opponentPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/8/88/Jasmine_13.png/revision/latest?cb=20131219204418'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;

  } else if (princessName === "Elsa"){
    opponent = new princessClasses.Elsa();
    $("#opponentPhoto").html("<img src='https://doxiequeen1.files.wordpress.com/2013/12/tumblr_mxk28po0ws1rayburo1_500.jpg'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;

  } else if (princessName === "Rapunzel"){
    opponent = new princessClasses.Rapunzel();
    $("#opponentPhoto").html("<img src='http://vignette1.wikia.nocookie.net/p__/images/b/b3/Rapunzel_1_highres.jpg/revision/latest?cb=20120617190301&path-prefix=protagonist'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;

  } else if (princessName === "Moana"){
    opponent = new princessClasses.Moana();
    $("#opponentPhoto").html("<img src='http://www.juliemag.com/files/1457575_10153549633612182_2820443791690045900_n.jpg'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;

  } else if (princessName === "Pocahontas"){
    opponent = new princessClasses.Pocahontas();
    $("#opponentPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/236x/72/52/cb/7252cb729944eded00b82eafb0acbb3a.jpg'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;

  } else if (princessName === "Mulan"){
    opponent = new princessClasses.Mulan();
    $("#opponentPhoto").html("<img src='http://static8.comicvine.com/uploads/original/11/111746/4352749-famulan.jpg'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;

  } else if (princessName === "Merida"){
    opponent = new princessClasses.Merida();
    $("#opponentPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/564x/7b/83/13/7b831340cd7102907fd5c75a6f6ef7cb.jpg'/>");
    $("#displayOpponentStats").html(`<h4>${princessName}'s health is starting at ${opponent.health}</h4>`);
    return opponent;
  }
}


module.exports = {buildOpponentPrincess, buildPlayerPrincess};

},{"./classes.js":2}],2:[function(require,module,exports){
"use strict";

console.log("script tags are good");

var Talents = require("./talents.js"),
    Princess = require("./player.js");

let PrincessClass = function () {
  this.name = "Disney Princess";
  this.health = 0;
  this.intelligence = 0;
};

////// ORIGINAL PRINCESSES

let OriginalPrincess = function() {
  this.health = parseInt(Math.random()*(90-40)+40);
  this.intelligence = 0;
  this.damage = 10;
};
OriginalPrincess.prototype = new PrincessClass();


let Cinderella = function() {
  this.name = "Cinderella";
  this.health = this.health + 3;
  this.intelligence = this.intelligence + 4;
};
Cinderella.prototype = new OriginalPrincess();


let Belle = function() {
  this.name = "Belle";
  this.health = this.health + 7;
  this.intelligence = this.intelligence + 1;
};
Belle.prototype = new OriginalPrincess();


let Jasmine = function() {
  this.name = "Jasmine";
  this.health = this.health + 7;
  this.intelligence = this.intelligence + 1;
};
Jasmine.prototype = new OriginalPrincess();


////// NEW PRINCESSES

let NewPrincess = function () {
  this.health = parseInt(Math.random()*(70-40)+40);
  this.intelligence = 7;
  this.damage = 13;
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


//////BA PRINCESSES

let BAPrincess = function () {
  this.health = parseInt(Math.random()*(90-60)+60);
  this.intelligence = 12;
  this.damage = 16;
};
BAPrincess.prototype = new PrincessClass();


let Pocahontas = function() {
  this.name = "Pocahontas";
  this.health = this.health - 7;
  this.intelligence = this.intelligence + 7;
};
Pocahontas.prototype = new BAPrincess();

let Mulan = function() {
  this.name = "Mulan";
  this.health = this.health - 6;
  this.intelligence = this.intelligence + 6;
};
Mulan.prototype = new BAPrincess();

let Merida = function() {
  this.name = "Merida";
  this.health = this.health -3;
  this.intelligence = this.intelligence + 5;
};
Merida.prototype = new BAPrincess();


module.exports = {PrincessClass, BAPrincess, Pocahontas, Mulan, Merida, Moana, Rapunzel, Elsa, NewPrincess, OriginalPrincess, Cinderella, Belle, Jasmine};



},{"./player.js":3,"./talents.js":4}],3:[function(require,module,exports){
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


},{"./buildPrincess.js":1,"./classes.js":2,"./talents.js":4}],4:[function(require,module,exports){
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

},{}]},{},[3]);
