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
		$('#intro, #videos').addClass("ready");
	}, 3500); 

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

});
