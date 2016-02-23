$(document).ready(function() {
	function sizeDetect(){
		$(".main_head").css("height", $(window).height())
	};

	sizeDetect();

	$(window).resize(function(){
		sizeDetect();
	})
});

$(window).load(function() { 
	$(".oader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

$(".toggle_menu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".toggle_menu").click(function(){
	if($(".top_menu").is(":visible")){
		$(".top_menu").fadeOut(600);
		$(".top_menu li").removeClass("fadeInUp animated");
		$(".top_menu li").addClass("fadeOutDown animated");
		$("h1, p, h3").removeClass("opacity");
		} else {
			$(".top_menu").fadeIn(600);
			$(".top_menu li").removeClass("fadeOutDown animated");
			$(".top_menu li").addClass("fadeInUp animated");
			$("h1, p, h3").addClass("opacity");
		};
});

$(document).ready( function(){
  $("h1").addClass("fadeInDown animated");
  $("header p").addClass("fadeInUp animated");
} );

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
	$(".top_menu").fadeOut(600);
	$(".top_menu li").removeClass("fadeInUp animated");
	$(".top_menu li").addClass("fadeOutDown animated");
	$("h1, p, h3").removeClass("opacity");
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

