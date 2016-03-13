var board = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
player = 1
$(document).ready(function(){

  $('#h1').on('click', function(e){
   addColor(0);
 })
  $('#h2').on('click', function(e){
   addColor(1);
 })
  $('#h3').on('click', function(e){
   addColor(2);
 })
  $('#h4').on('click', function(e){
   addColor(3);
 })
  $('#h5').on('click', function(e){
   addColor(4);
 })
  $('#h6').on('click', function(e){
   addColor(5);
 })
  $('#h7').on('click', function(e){
   addColor(6);
 })




})

var printEach = function(element){console.log(element);
}

var addColor=function(number){
  switchPlayer();
  var counter = 0;
  var i = false;
  do{
    if(board[number][counter]==0){board[number][counter]= letter;
      console.log("column: " + number);
      console.log("row: " + counter);
      i=true;
      player += 1;};
      var isVic = isVictory(board, number, counter);
      counter++;
      if(counter === 6){i = true;};
    }while (i != true)
    console.log('**********')
    board.forEach(printEach)
    if (isVic == true) { alert(letter + " Win!") };
  }





  var switchPlayer= function(){
    if(player % 2 === 0){letter = 'Fat'}
      else {letter = 'Baby'}
    }
