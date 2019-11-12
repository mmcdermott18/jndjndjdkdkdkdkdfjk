$( document ).ready(function() {
  console.log( 'ready!' );
  $('p').click(function() {
    // $('p').css('font-size','10vw');
    $('p').toggleClass('grow');
  });
  // $('p').css('font-size','10vw');
});
