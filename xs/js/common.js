$(document).ready(function() {
	setTimeout(function () {
		$('.products').addClass("ready");
	}, 1000); 
	setTimeout(function () {
		$('.shadow').addClass("ready");
	}, 1100); 
	setTimeout(function () {
		$('.logo-xs').addClass("ready");
		$('.logo-xs').addClass("color");
	}, 2000); 

	setTimeout(function () {
		$('.frost').addClass("ready");
		$('#intro').addClass("ready");
	}, 3500); 
});

var tempIndex = 0;

$(".value").text(tempIndex);

$(".up").click(function(){
	var curIndex = $(this).parent().find(".value").text();
	curIndex  = parseInt(curIndex , 10);
	curIndex += 1;
	$(this).parent().find(".value").text(curIndex);
	if(curIndex > 0){
		$(this).parent().find(".down").css("display" , "block");
	}else{
		$(this).parent().find(".down").css("display" , "none");
	}
});

$(".down").click(function(){
	var curIndex = $(this).parent().find(".value").text();
	curIndex  = parseInt(curIndex , 10);
	curIndex -= 1;
	$(this).parent().find(".value").text(curIndex);
	if(curIndex > 0){
		$(this).parent().find(".down").css("display" , "block");
	}else{
		$(this).parent().find(".down").css("display" , "none");
	}
});


// var a = $(".counter .value").text();
// alert(a);

// $(".toggle_menu, .menu_item").click(function() {
//   $(".sandwich").toggleClass("active");
// });

// $(".toggle_menu").click(function(){
// 	if($(".top_menu").is(":visible")){
// 		$(".top_menu").fadeOut(600);
// 		$(".top_menu li").removeClass("fadeInUp animated");
// 		$(".top_menu li").addClass("fadeOutDown animated");
// 		$("h1, p, h3").removeClass("opacity");
// 		setTimeout(function () {
// 			$(".top_menu").removeClass("fadeOn")
// 		}, 600);
// 		} else {
// 			$(".top_menu").fadeIn(600);
// 			$(".top_menu").addClass("fadeOn")
// 			$(".top_menu li").removeClass("fadeOutDown animated");
// 			$(".top_menu li").addClass("fadeInUp animated");
// 			$("h1, p, h3").addClass("opacity");
// 		};
// });

// $(document).ready( function(){
//   $(".anim-down").addClass("fadeInDown animated");
//   $(".anim-up").addClass("fadeInUp animated");
// } );



// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//   	$(".sandwich").removeClass("active");
// 	$(".top_menu").fadeOut(600);
// 	setTimeout(function () {
// 		$(".top_menu").removeClass("fadeOn")
// 	}, 600);
// 	$(".top_menu li").removeClass("fadeInUp animated");
// 	$(".top_menu li").addClass("fadeOutDown animated");
// 	$("h1, p, h3").removeClass("opacity");
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });


// $(document).ready(function(){
//         $(window).scroll(function(){
//             var bo = $("body").scrollTop();
//             // $('#hid').text(bo);
// 			if ( bo > 50 ){ 
// 				$("header .menu").css("background", "#151521")
// 				$("header .menu").css("box-shadow", "rgb(21, 21, 33) 0px 2px 17px 1px")
// 			}
// 			else{
// 				$("header .menu").css("background", "transparent")
// 				$("header .menu").css("box-shadow", "none")
// 			};
//         })
//     })
