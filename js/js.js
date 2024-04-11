  //for inner pages 
  $(document).ready(function(){
    $('.menubar').click(function(){
      $('.inner-pages').addClass('active');
    });
    $('.close-menu').click(function(){
      $('.inner-pages').removeClass('active');
    });
  });
