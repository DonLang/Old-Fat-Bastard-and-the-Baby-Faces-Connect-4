var dropPiece = function(column) {
  var columnNumber = 'col-'+(column);
  console.log(columnNumber);
  if (player % 2) {
    var position = $('.can-place.'+(columnNumber)).attr('id') - 7;
    $('.can-place.' + (columnNumber)).css('background-image', 'url(imgs/baby.png)').removeClass('can-place');
    $('#'+(position)).addClass('can-place')
    console.log($('#'+(position)));
  } else {
    var position = $('.can-place.'+(columnNumber)).attr('id') - 7;
    $('.can-place.' + (columnNumber)).css('background-image', 'url(imgs/fat-bastard.png)').removeClass('can-place');
    $('#'+(position)).addClass('can-place')
    console.log($('#'+(position)));
  }
}
