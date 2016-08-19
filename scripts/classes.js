console.log("script tags are good")

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
}
Belle.prototype = new OriginalPrincess();


let Jasmine = function() {
  this.name = "Jasmine";
  this.healthBonus = this.healthBonus + 7;
  this.intelligenceBonus = this.intelligenceBonus + 3;
}
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



var Meg = new Pocahontas();
console.log(Meg)














