$(document).ready(function() {
	$('.logo-xs').addClass("color");
///////////////////////////////INDEX////////////////////////////////
$(".heroes .hero").each(function(i){
	$(this).attr("data-index" , i);
})
///////////////////////////////VIDEO////////////////////////////////
var video = [
	'<iframe class="video-play" width="800" height="450" src="https://www.youtube.com/embed/k1dlfFu35Y0?autoplay=1" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video-play" width="800" height="450" src="https://www.youtube.com/embed/6FktasofS04?autoplay=1" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video-play" width="800" height="450" src="https://www.youtube.com/embed/mffP2sGUOS0?autoplay=1" frameborder="0" allowfullscreen></iframe>',
	'<iframe class="video-play" width="800" height="450" src="https://www.youtube.com/embed/f8YSOhnrROQ?autoplay=1" frameborder="0" allowfullscreen></iframe>'
]
///////////////////////////////VARIABLES////////////////////////////////
var tempInd = 0;
var curStr = $('.hero[data-index="'+ tempInd +'"] .description-wrap p');
var maxValue = $(".heroes .hero").length;
///////////////////////////////FUNCTION////////////////////////////////
function animateBiker(tempInd){
	setTimeout(function () {
	$('.hero[data-index="'+ tempInd +'"] .man0').addClass('go');
	setTimeout(function () {
		$('.hero[data-index="'+ tempInd +'"] .man03').addClass('ready');
	}, 400); 
	setTimeout(function () {
		$('.hero[data-index="'+ tempInd +'"] .man02').addClass('ready');
	}, 200); 
	setTimeout(function () {
		$('.hero[data-index="'+ tempInd +'"] .man01').addClass('ready');
	}, 0); 
	setTimeout(function () {
		setTimeout(function () {
			$('.hero[data-index="'+ tempInd +'"] .man01').addClass('disabled');
		}, 1100); 
		setTimeout(function () {
			$('.hero[data-index="'+ tempInd +'"] .man02').addClass('disabled');
		}, 1300); 
		setTimeout(function () {
			$('.hero[data-index="'+ tempInd +'"] .man03').addClass('disabled');
		}, 1500); 
	}, 800); 
}, 100);
} 

function animateBikerOff(){
	$('.man0').removeClass('go');
	$('.man01').removeClass('ready');
	$('.man01').removeClass('disabled');
	$('.man02').removeClass('ready');
	$('.man02').removeClass('disabled');
	$('.man03').removeClass('ready');
	$('.man03').removeClass('disabled');
}

function accordion(curStr){
	var firstStr = "";
	var secondStr = "";
	var maxWords = 39;
	var threeDots = '...';
	var count = 1;
	var string = curStr.text();
	var space = " ";
	var temp = 0;

	for (var i = 0; i < string.length; i++) {
		if (space == string[i]){
			count +=1;
			if (count == maxWords){
				var from = 0;
				var to = i;
				firstStr = string.substring(from,to) + threeDots;
				temp = to;
			}
		} 
		if (i == string.length - 1){
			secondStr = string.substring(temp,string.length);
		};
	};
	$(curStr).text(firstStr);

	if (count < maxWords){
		$(curStr).text(string);
		// $('.read-more').css("display" , "none");
	}else{
		$('.read-more').click(function(){
			firstStr = firstStr.substring(0 , firstStr.length - threeDots.length);
			$(curStr).text(firstStr + secondStr);
			$(this).parent().find('.close').css("display" , "inline-block");
			$(this).css("display" , "none");
		})

		$('.close').click(function(){
			firstStr += threeDots;
			$(curStr).text(firstStr);
			$(this).parent().find('.read-more').css("display" , "inline-block");
			$(this).css("display" , "none");
		})
	}
}

////////////////////////////////////////SWITC////////////////////////////////////////
function Switch(tempInd){
		switch(tempInd) {
		case 0: 
			animateBikerOff();
			animateBiker(tempInd);
			$('.bg-heroes').css("background" , "fixed url(../img/bg-forest.jpg) no-repeat");
			curStr = $('#amirKabani .description-wrap p');
			accordion(curStr);
			break;
		case 1: 
			animateBikerOff();
			animateBiker(tempInd);
			$('.bg-heroes').css("background" , "fixed url(../img/bg-sea.jpg) no-repeat");
			curStr = $('#marioRowald .description-wrap p');
			accordion(curStr);
			break;
		case 2: 
			animateBikerOff();
			animateBiker(tempInd);
			$('.bg-heroes').css("background" , "fixed url(../img/bg-night-ocean.jpg) no-repeat");
			curStr = $('#alexPastor .description-wrap p');
			accordion(curStr);
			break;
		case 3: 
			animateBikerOff();
			animateBiker(tempInd);
			$('.bg-heroes').css("background" , "fixed url(../img/bg-parkour.jpg) no-repeat");
			curStr = $('#urbanSense .description-wrap p');
			accordion(curStr);
			break;
	}
}
//////////////////////NEW PAGE//////////////////
function newPage(){
	$('.read-more').parent().find('.read-more').css("display" , "inline-block");
	$('.close').css("display" , "none");
	$('.previev-video').css("display" , "block");
	$('.video .video-play').remove();
}
///////////////////////////////////////////////BUTTONS///////////////////////////////////////////////
$('.next').click(function(){
	tempInd += 1; 
	if(tempInd == maxValue){
		tempInd = 0;
		$('.hero').css("display" , "none");
		$('.hero[data-index = "'+ tempInd +'"]').css("display" , "block");
	}
	Switch(tempInd);
	newPage();
	$('.hero').css("display" , "none");
	$('.hero[data-index = "'+ tempInd +'"]').css("display" , "block");

})

$('.prev').click(function(){
	tempInd -= 1; 
	if(tempInd == -1){
		tempInd = maxValue - 1;
		$('.hero').css("display" , "none");
		$('.hero[data-index = "'+ tempInd +'"]').css("display" , "block");
	}
	Switch(tempInd);
	newPage();
	$('.hero').css("display" , "none");
	$('.hero[data-index = "'+ tempInd +'"]').css("display" , "block");

})
///////////////////////////////////////////////BUTTONS///////////////////////////////////////////////

/////////////////////////////////////////////VIDEO PLAY////////////////////////////////////////////
$('.hero .previev-video').click(function(){
	console.log(tempInd);
	$(this).parent().append(video[tempInd]);
	$(this).css("display" , "none");
})
/////////////////////////////////////////////VIDEO PLAY////////////////////////////////////////////


animateBiker(tempInd);
$('.hero').css("display" , "none");
$('.hero[data-index = "0"]').css("display" , "block");
accordion(curStr);


});

