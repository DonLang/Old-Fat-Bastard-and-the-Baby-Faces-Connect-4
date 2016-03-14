var dropPiece = function(column) {
  var columnNumber = 'col-'+(column);
  console.log(columnNumber);
  if (player % 2) {
    fatBastard();
    var position = $('.can-place.'+(columnNumber)).attr('id') - 7;
    $('.can-place.' + (columnNumber)).css('background-image', 'url(imgs/baby.png)').removeClass('can-place');
    $('#'+(position)).addClass('can-place')
    console.log($('#'+(position)));
  } else {
    baby();
    var position = $('.can-place.'+(columnNumber)).attr('id') - 7;
    $('.can-place.' + (columnNumber)).css('background-image', 'url(imgs/fat-bastard.png)').removeClass('can-place');
    $('#'+(position)).addClass('can-place')
    console.log($('#'+(position)));

  }
}

var baby = function() {
  $('.header-token').hover(function() {
      $(this).css('background-image', 'url(imgs/baby.png)');
    }, function() {
      $(this).css('background', '#FFF');
  }).click(function() {
    $(this).css('background', '#FFF');
  });
}

var fatBastard = function() {
  $('.header-token').hover(function() {
      $(this).css('background-image', 'url(imgs/fat-bastard.png)');
    }, function() {
      $(this).css('background', '#FFF');
  }).click(function() {
    $(this).css('background', '#FFF');
  });
}

var fatBastardWins = function() {
  $(document.body).css('background-color', '#000');
  $('.winner').prepend('<h1>Old Fat Bastard Wins!</h1>').css('height', '2000px');
  $('.winner').append('<iframe style="width: 100%; position: absolute; top: 175px; margin-left: -50%; left: 50%;" width="853" height="480" src="http://www.youtube.com/embed/LXekH_8vXnM?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1;" frameborder="0" allowfullscreen></iframe>');
  setTimeout(function() {
    $('.winner').fadeOut('slow');
    $('.board-wrapper').show();
    $('.reset').show();
  }, 10000);
  setTimeout(function() {
    $('.winner').find('iframe').remove();
    $(document.body).css('background-color', '#FFF');
  }, 10000);
}

var babyWins = function() {
  $(document.body).css('background-color', '#000');
  $('.winner').fadeIn('slow').prepend('<h1 class="baby">Baby Wins!</h1>').css('height', '2000px');
  $('.winner').append('<iframe style="width: 100%; position: absolute; top: 175px; margin-left: -50%; left: 50%;" src="https://player.vimeo.com/video/158847086?title=0&byline=0&portrait=0&amp;autoplay=1;" width="853" height="479" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  setTimeout(function() {
    $('.winner').fadeOut('slow');
    $('.board-wrapper').show();
    $('.reset').show();
  }, 17000);
  setTimeout(function() {
    $('.winner').find('iframe').remove();
    $(document.body).css('background-color', '#FFF');
  }, 17000);
}