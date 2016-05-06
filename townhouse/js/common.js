$(document).ready(function(){
	$('.full-size').css("height" , $(window).height());
	$('.bg').css("opacity" , "1");
	setTimeout(function() {
		$('.title-outer').addClass('animated fadeIn wow');
	}, 500);
	$('.butn.light').addClass('wow fadeInLeft');
	$('.butn.dark').addClass('wow fadeInRight');

})