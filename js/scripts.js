//allows user to click an animal type and scroll to the page with one click.
$("a").on('click', function(event) {


    if (this.hash !== "") {
      
      event.preventDefault();
     
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

 
        window.location.hash = hash;
      });
    } 
  });

$("#initially-showing").click(function() {
  $("#hidden").slideToggle();
});

