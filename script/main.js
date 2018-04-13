(function($){
    $(function(){
  
      $('.sidenav').sidenav();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space


  $(document).ready(function(){
    $('.carousel').carousel();
  });

  var elem = document.querySelector('.fixed-action-btn');
  var instance = M.FloatingActionButton.init(elem, {
    hoverEnabled: false
  });


  $('.control').click( function(){
    $('body').addClass('search-active');
    $('.input-search').focus();
  });
  
  $('.icon-close').click( function(){
    $('body').removeClass('search-active');
  });

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });


