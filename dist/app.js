(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  this.health = 30;
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
  this.health = 15;
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
  this.health = -5;
  this.intelligence = 30;
  this.damage = 20;
};
BAPrincess.prototype = new PrincessClass();


let Pocahontas = function() {
  this.name = "Pocahontas";
  this.health = this.health -7;
  this.intelligence = this.intelligence + 10;
};
Pocahontas.prototype = new BAPrincess();

let Mulan = function() {
  this.name = "Mulan";
  this.health = this.health -6;
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

//CREATE PLAYER BASED ON USER SELECTION
var player;
  console.log(player);

$("#playerClass").on("change", function (evt) {
  var playerClass = $("#playerClass").val();
  console.log(playerClass);
  buildPlayerPrincess(playerClass);
});



//CREATE OPPONENT BASED ON USER SELECTION
var opponent;
  console.log(opponent);

$("#opponentClass").on("change", function (evt) {
  var opponentClass = $("#opponentClass").val();
  console.log(opponentClass);
  buildOpponentPrincess(opponentClass);
});


//DISPLAY PLAYER AND OPPONENT NAMES
let playerName = $("#playerName").val();
let opponentName = $("#opponentName").val();

$("#playerName").keyup(function(e) {
  console.log(playerName);
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code==13) {
        $("#displayPlayerName").html(`<h1>${playerName}</h1>`);
        console.log("playerName", playerName);
        // $("#playerName").hide();
    }
});

$("#opponentName").keyup(function(e) {
  console.log(opponentName);
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code==13) {
        $("#displayOpponentName").html(`<h1>${opponentName}</h1>`);
        console.log("opponentName", opponentName);
        // $("#opponentName").hide();
    }
});

//PLAYER SELECTION INHERITS HEALTH/INTELL/DAMAGE
function buildPlayerPrincess (princessName) {
  var princess;
  if (princessName === "Belle"){
    princess = new princessClasses.Belle();
    $("#playerPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/4/4a/Belle_2011.jpg/revision/latest?cb=20121220232742'/>");

  } else if (princessName === "Cinderella"){
    princess = new princessClasses.Cinderella();
    $("#playerPhoto").html("<img src='http://thefeministwire.com/wp-content/uploads/2014/03/Cinderella.jpg'/>");

  } else if (princessName === "Jasmine"){
    princess = new princessClasses.Jasmine();
    $("#playerPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/8/88/Jasmine_13.png/revision/latest?cb=20131219204418'/>");

  } else if (princessName === "Elsa"){
    princess = new princessClasses.Elsa();
    $("#playerPhoto").html("<img src='https://doxiequeen1.files.wordpress.com/2013/12/tumblr_mxk28po0ws1rayburo1_500.jpg'/>");

  } else if (princessName === "Rapunzel"){
    princess = new princessClasses.Rapunzel();
    $("#playerPhoto").html("<img src='http://vignette1.wikia.nocookie.net/p__/images/b/b3/Rapunzel_1_highres.jpg/revision/latest?cb=20120617190301&path-prefix=protagonist'/>");

  } else if (princessName === "Moana"){
    princess = new princessClasses.Moana();
    $("#playerPhoto").html("<img src='http://www.juliemag.com/files/1457575_10153549633612182_2820443791690045900_n.jpg'/>");

  } else if (princessName === "Pocahontas"){
    princess = new princessClasses.Pocahontas();
    $("#playerPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/236x/72/52/cb/7252cb729944eded00b82eafb0acbb3a.jpg'/>");

  } else if (princessName === "Mulan"){
    princess = new princessClasses.Mulan();
    $("#playerPhoto").html("<img src='http://static8.comicvine.com/uploads/original/11/111746/4352749-famulan.jpg'/>");

  } else if (princessName === "Merida"){
    princess = new princessClasses.Merida();
    $("#playerPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/564x/7b/83/13/7b831340cd7102907fd5c75a6f6ef7cb.jpg'/>");
  }
}

//OPPONENT SELECTION INHERITS HEALTH/INTELL/DAMAGE
function buildOpponentPrincess (princessName) {
  var opponent;
  if (princessName === "Belle"){
    opponent = new princessClasses.Belle();
    $("#playerPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/4/4a/Belle_2011.jpg/revision/latest?cb=20121220232742'/>");

  } else if (princessName === "Cinderella"){
    opponent = new princessClasses.Cinderella();
    $("#opponentPhoto").html("<img src='http://thefeministwire.com/wp-content/uploads/2014/03/Cinderella.jpg'/>");

  } else if (princessName === "Jasmine"){
    opponent = new princessClasses.Jasmine();
    $("#opponentPhoto").html("<img src='http://vignette2.wikia.nocookie.net/disney/images/8/88/Jasmine_13.png/revision/latest?cb=20131219204418'/>");

  } else if (princessName === "Elsa"){
    opponent = new princessClasses.Elsa();
    $("#opponentPhoto").html("<img src='https://doxiequeen1.files.wordpress.com/2013/12/tumblr_mxk28po0ws1rayburo1_500.jpg'/>");

  } else if (princessName === "Rapunzel"){
    opponent = new princessClasses.Rapunzel();
    $("#opponentPhoto").html("<img src='http://vignette1.wikia.nocookie.net/p__/images/b/b3/Rapunzel_1_highres.jpg/revision/latest?cb=20120617190301&path-prefix=protagonist'/>");

  } else if (princessName === "Moana"){
    opponent = new princessClasses.Moana();
    $("#opponentPhoto").html("<img src='http://www.juliemag.com/files/1457575_10153549633612182_2820443791690045900_n.jpg'/>");

  } else if (princessName === "Pocahontas"){
    opponent = new princessClasses.Pocahontas();
    $("#opponentPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/236x/72/52/cb/7252cb729944eded00b82eafb0acbb3a.jpg'/>");

  } else if (princessName === "Mulan"){
    opponent = new princessClasses.Mulan();
    $("#opponentPhoto").html("<img src='http://static8.comicvine.com/uploads/original/11/111746/4352749-famulan.jpg'/>");

  } else if (princessName === "Merida"){
    opponent = new princessClasses.Merida();
    $("#opponentPhoto").html("<img src='https://s-media-cache-ak0.pinimg.com/564x/7b/83/13/7b831340cd7102907fd5c75a6f6ef7cb.jpg'/>");
  }
}

function displayPlayerStats (princessName) {

}

function displayOpponentStats (princessName) {

}

module.exports = Princess;



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
