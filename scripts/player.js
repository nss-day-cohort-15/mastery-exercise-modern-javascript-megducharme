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


