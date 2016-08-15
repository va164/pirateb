var a = 0;
var q = [
  'Do ye like yer drinks strong?',
  'Do ye like it with a salty tang?',
  'Are ye a lubber who likes it bitter?',
  'Would ye like a bit of sweetness with yer poison?',
  'Are ye one for a fruity finish?',
];

function Choice(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
};
var strong = new Choice('Glug of Rum', 'Slug of Whisky', 'Splash of Gin');
var salty = new Choice('Olive on a Stick', 'Salt-dusted Rim', 'Rasher of Bacon');
var bitter = new Choice('Shake of Bitters', 'Splash of Tonic', 'Twist of Lemon Peel');
var sweet = new Choice('Sugar cube', 'Spoonful of Honey', 'Splash of Cola');
var fruity = new Choice('Slice of Orange', 'Dash of Cassis', 'Cherry on Top');

var dOptions = [
  strong,
  salty,
  bitter,
  sweet,
  fruity,
];

var options = [
  'aaye',
  'g\'yaar',
  'naye',
]

var html = q[a]+'<ul class="cList"><li class="cA">'+options[0]+'</li><li class="cB">'+options[1]+'</li><li class="cC">'+options[2]+'</li></ul>';



$('document').ready(function(){
  $('.imageBox').hide().fadeIn(200);
  $('.titleBox').hide().fadeIn(1000);
  $('.question').hide();
  $('.app').hide().fadeIn(1500);
  $('.question').fadeIn(2000);

  $('.question').html(html);
  $('ul').hide().fadeIn(3000);
  console.log(a);

// Function for next question
$('.question').on('click', 'li', function(event) {
  event.preventDefault();
  if (a<4) {a += 1;
  var html = q[a]+'<ul class="cList"><li class="cA">'+options[0]+'</li><li class="cB">'+options[1]+'</li><li class="cC">'+options[2]+'</li></ul>';
  console.log(a);
  $('.question').html(html);
  $('.question').hide().fadeIn(1000);
  $('ul').hide().fadeIn(2000);
  };
});


});
