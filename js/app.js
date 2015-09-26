$(document).foundation();

$(document).ready(function() {
  $('.songs li').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.music-by-type li').on('click', function() {
    $('.music-by-type li').removeClass('active');
    $(this).addClass('active');
  });

  $('#pokemonBlue').on('click', function() {
    $('#pokemon-panel').removeClass('hide');
  });

  $('#pokemonRed').on('click', function() {
    $('#pokemon-panel').addClass('hide');
  })
});
