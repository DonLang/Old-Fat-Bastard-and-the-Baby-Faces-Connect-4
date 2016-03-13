var board = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
  ]

player = 1

// $('.button-color-2').hover(function() {
// dosmth();
// $(this).unbind('mouseenter mouseleave')
// });

$(document).ready(function(){

  // baby(function() {
  //   $(this).unbind('mouseenter mouseleave')
  // })

  $('.header-token').one('hover', baby());

  $('#h1').on('click', function(){
   dropPiece(1);
   addColor(0);
 })

  $('#h2').on('click', function(){
   dropPiece(2);
   addColor(1);
 })
  $('#h3').on('click', function(){
   dropPiece(3);
   addColor(2);
 })
  $('#h4').on('click', function(){
   dropPiece(4);
   addColor(3);
 })
  $('#h5').on('click', function(){
   dropPiece(5);
   addColor(4);
 })
  $('#h6').on('click', function(){
   dropPiece(6);
   addColor(5);
 })
  $('#h7').on('click', function(){
   dropPiece(7, player);
   addColor(6);
 })

  $('button').on('click', function() {
    location.reload(true);
  })

})

var printEach = function(element) {
  console.log(element);
}

var addColor = function(number) {
  switchPlayer();
  var counter = 0;
  var i = false;

  do{
    if(board[number][counter]==0){board[number][counter]= letter;
      console.log("column: " + number);
      console.log("row: " + counter);
      i=true;
      player += 1;
      };
      var isVic = isVictory(board, number, counter);
      counter++;
      if(counter === 6){i = true;};
    }while (i != true)
    console.log('**********')
    board.forEach(printEach);
    if (isVic == true) { 
      $('.board-wrapper').hide();
      $('.winner').show().css('height', '800px');
      if (player % 2) {
        fatBastardWins();
      } else {
        babyWins();
      }
    };
  }

var switchPlayer = function() {
  if (player % 2) {
    letter = 'Baby';
  } else {
    letter = 'Fat';
  }
}

