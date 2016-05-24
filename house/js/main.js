$(document).ready(function(){
	$('select option:selected').css('height' , "30px");

	$('.callback').parent().addClass('menu-callback')

setTimeout(function(){
	$('.row .img-block:first .img-container').css('left' , '0');
	$('.row .img-block:first .text-block').css('right' , '0');
}, 1000);

setTimeout(function(){
	$('.row .img-block:first h2').css('opacity' , '1');
}, 1600);

setTimeout(function(){
	$('.row .img-block:first h2').css('transition' , 'none');
	$('.row .img-block:first .img-container').css('transition' , 'none');
	$('.row .img-block:first .text-block').css('transition' , 'none');
}, 2000);

var i = 0;

setTimeout(function(){

	$('.default .text-block').each(function(){
		var indent = parseInt($(this).css('padding') , 10);
		console.log(indent);
		$(this).css('bottom' , ($(this).height() + (2 * indent)) / 2);
		$(this).parent().css('height' , $(this).parent().height() - (($(this).height() + (2 * indent)) / 2));
	})

	$('.big .img-container').each(function(){
		$(this).css('top' , ($(this).parent().height() - $(this).height()) / 2);
	})

	$('.big .text-block').each(function(){
		$(this).css('bottom' , 'auto');
	})

}, 500);


setTimeout(function(){
	$('.contacts-block').addClass('border-width');
}, 500);

setTimeout(function(){
	$('.contacts-block').addClass('border-height');
}, 1000);

setTimeout(function(){
	$('.border-contacts').addClass('border-width');
}, 1500);

setTimeout(function(){
	$('.border-contacts').addClass('border-height');
}, 2000);

$('.contacts-block').css('background' , 'rgba(0,0,0,.8)');

$('.content h1').css('opacity' , '1');

setTimeout(function(){
	$('.content p').css('right' , '0');
}, 100);

setTimeout(function(){
	$('.content h2').css('left' , '30px');
}, 500);



// 	setTimeout(function(){
// 		$('.hover-logo').css("opacity" , "1");
// 	}, 1000)
// 	setTimeout(function(){
// 		$('.hover-logo').css("opacity" , "0");
// 	}, 1500)

// $('ul li a').css("color" , "#008dff");

// setTimeout(function(){
// 	$('ul li:first').css("opacity" , "1");
// 	$('ul li:last').css("opacity" , "1");
// },500)
// setTimeout(function(){
// 	$('ul li:first').next().css("opacity" , "1");
// 	$('ul li:last').prev().css("opacity" , "1");
// },700)

// setTimeout(function(){
// 	$('li.logo-item').css("opacity" , "1");
// },900)

// setTimeout(function(){
// 	$('ul li a').css("color" , "#fff");
// },1500)


// 	$('ul li').each(function(){
// 		// setTimeout(function(){
// 			// $('ul li').css("opacity" , "0");
// 			$(this).css("opacity" , "1");
// 		// }, 0);
// 	})



// function second(){
// 	if(условие){
// 		действие необходимое
// 	}else{
// 	setTimeot('first()',100) \\можно вторую задержку не писать,а сразу вызывать функцию
// 	}
// }

// function first(){
// 	setTimeout('second()',100)
// }
// first();


});