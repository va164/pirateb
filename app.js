var a = 0; // counter
var q = [  // array for questions
  'Do ye like yer drinks strong?',
  'Do ye like it with a salty tang?',
  'Are ye a lubber who likes it bitter?',
  'Would ye like a bit of sweetness with yer poison?',
  'Are ye one for a fruity finish?',
];
var inventory = {  // inventory of ingredients
  strong: ['Glug of Rum', 'Slug of Whisky', 'Splash of Gin'],
  salty: ['Olive on a Stick', 'Salt-dusted Rim', 'Rasher of Bacon'],
  bitter: ['Shake of Bitters', 'Splash of Tonic', 'Twist of Lemon Peel'],
  sweet: ['Sugar cube', 'Spoonful of Honey', 'Splash of Cola'],
  fruity: ['Slice of Orange', 'Dash of Cassis', 'Cherry on Top'],
};

var gRandom = function (min,max) {  // function to generate a random number
  var rNumber = Math.floor(Math.random() * (max-min+1)) + min;
  return rNumber;
};

var Order = function (orderVal) { // creating an object with taste preferences
  this.strong = orderVal[0];
  this.salty = orderVal[1];
  this.bitter = orderVal[2];
  this.sweet = orderVal[3];
  this.fruity = orderVal[4];
};

var Cocktail = function(inventory, drinkOrder) { // selection of ingredients based in preferences
  var iNumber = []; // serial number of ingredient within a taste category
  var iArray = [];  // array of served drink items

  for (var i in drinkOrder) { /////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    iNumber = gRandom(0,2);
    if (drinkOrder[i]) {
      iArray.push(inventory[i][iNumber]);
    }
  }
  return iArray;
};

var options = [
  'aaye',
  'naye',
];
var html = q[a]+'<ul class="cList"><li class="cA" value="yes">'+options[0]+'</li><li class="cB" value="no">'+options[1]+'</li></ul>';

// Document Ready Function
$('document').ready(function(){
  var orderVal = [];
  // Fade in elemts
  $('.imageBox').hide().fadeIn(200);
  $('.titleBox').hide().fadeIn(1000);
  $('.question').hide();
  $('.app').hide().fadeIn(1500);
  $('.question').fadeIn(2000);
  var form = '<form><input class="button" type="submit" value="Aaye"/><input class ="button" type="submit" value="Naye"></form>';
  var html = q[a]+form;
  $('.question').html(html);
  $('ul').hide().fadeIn(3000);

  // Get user's preferences
  $('.button').each( function() {
    $(this).on('click', function(){
    if (a<5 && $(this).val() === 'Aaye') {
                 orderVal.push(true);
             } else {
                 orderVal.push(false);
             }
   });
 });

// Function for next question
$('.question').on('click', 'form', function(event) {
  event.preventDefault();
  if (a<5) { a += 1;
  var form = '<form><input class="button" type="submit" value="Aaye"/><input class ="button" type="submit" value="Naye"></form>';
  var html = q[a]+form;
  $('.question').html(html);
  $('.question').hide().fadeIn(1000);
  $('ul').hide().fadeIn(2000);
  };

  $('.button').each( function() {
    $(this).on('click', function(){

    if (a<5 && $(this).val() === 'Aaye') {
                 orderVal.push(true);
             } else {
                 orderVal.push(false);
             }
   });
 });

 drinkOrder = new Order(orderVal);
 console.info(drinkOrder);
 uDrink = new Cocktail(inventory, drinkOrder);
 console.info(uDrink);

if (a == 5) {$('.question').hide();
var finalDrink = uDrink.join(" . ");
$('.app').html('<div class="question">Here be yer drink<br> <div class="served">'+ finalDrink +'</div></div>');
};
});

drinkOrder = new Order(orderVal);
console.info(drinkOrder);
uDrink = new Cocktail(inventory, drinkOrder);
console.info(uDrink);
});
