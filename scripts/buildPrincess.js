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
