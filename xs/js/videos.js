$(document).ready(function() {

	var popVideo = [
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/ZGtqKQWcrJM" frameborder="0" allowfullscreen></iframe>',
	'<iframe  width="725" height="407" src="https://www.youtube.com/embed/ZV9mdFeC3fs" frameborder="0" allowfullscreen></iframe>',
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/fWEslKBO9-U" frameborder="0" allowfullscreen></iframe>',
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/hfqLzt3wcvc" frameborder="0" allowfullscreen></iframe>',
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/NGV8i-fp8MI" frameborder="0" allowfullscreen></iframe>',
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/NEmW5Mzqm2w" frameborder="0" allowfullscreen></iframe>',
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/V_5qgdlD_io" frameborder="0" allowfullscreen></iframe>',
	'<iframe width="725" height="407" src="https://www.youtube.com/embed/zjwQxp_kBJk" frameborder="0" allowfullscreen></iframe>'
	]

	$('.video').each(function(i){
		$(this).attr("data-index" , i);
	})	

	$('.page').each(function(i){
		$(this).attr("data-index" , i);
	})

	$('.video').click(function(){
		var maxLength = 0;
		maxLength = $('.page').length;
		var position = 0;
		var index = 0;
		index = $(this).attr('data-index');
		index = parseInt(index , 10);

		$('.popup').addClass("active-popup");
		$('.popup-body').css('display' , 'block');
		$('.page').css("display" , "none");
		$('.page[data-index="' + index + '"]').css("display" , "inline-flex");
		$('.page[data-index="' + index + '"]').append(popVideo[index]);
		position = ($(window).height() - $('.page[data-index="' + index + '"]').height()) / 2;
		$('.popup-body').css('padding-top' , position);

		$('.next').click(function(){
			$('iframe').remove();
			index += 1;
			if (index == maxLength){
				index = 0;
			};
			$('.page').css("display" , "none");
			$('.page[data-index="' + index + '"]').css("display" , "inline-flex");
			$('.page[data-index="' + index + '"]').append(popVideo[index]);
			position = ($(window).height() - $('.page[data-index="' + index + '"]').height()) / 2;
			$('.popup-body').css('padding-top' , position);

		})

		$('.prev').click(function(){
			$('iframe').remove();
			index -= 1;
			if (index < 0){
				index = maxLength - 1;
			};
			$('.page').css("display" , "none");
			$('.page[data-index="' + index + '"]').css("display" , "inline-flex");
			$('.page[data-index="' + index + '"]').append(popVideo[index]);
			position = ($(window).height() - $('.page[data-index="' + index + '"]').height()) / 2;
			$('.popup-body').css('padding-top' , position);

		})
	});

	$('.close-popup').click(function(){
		$('.popup-body').css('display' , 'none');
		$('.popup').removeClass("active-popup");
		$('iframe').remove();
	})

});

