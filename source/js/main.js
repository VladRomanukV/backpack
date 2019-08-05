$(function() {
// is-hover
var w = $(window).outerWidth();

$('.advantages-center--one').hover(function() {
	$('.advantages-left--one').addClass('is-hover');
		if(w <= 1300){
			$('.advantages-left--one').addClass('is-activ');
		};
}, function(){
	$('.advantages-left--one').removeClass('is-hover')
		if(w <= 1300){
			$('.advantages-left--one').removeClass('is-activ');
		};
});
$('.advantages-center--two').hover(function() {
	$('.advantages-left--two').addClass('is-hover');
	if(w <= 1300){
			$('.advantages-left--two').addClass('is-activ');
		};
}, function(){
	$('.advantages-left--two').removeClass('is-hover');
	if(w <= 1300){
			$('.advantages-left--two').removeClass('is-activ');
		};
});
$('.advantages-center--three').hover(function() {
	$('.advantages-left--three').addClass('is-hover');
	if(w <= 1300){
			$('.advantages-left--three').addClass('is-activ');
		};
}, function(){
	$('.advantages-left--three').removeClass('is-hover');
	if(w <= 1300){
			$('.advantages-left--three').removeClass('is-activ');
		};
});

$('.advantages-center--fore').hover(function() {
	$('.advantages-right--four').addClass('is-hover');
	if(w <= 1300){
			$('.advantages-right--four').addClass('is-activ');
		};
}, function(){
	$('.advantages-right--four').removeClass('is-hover');
	if(w <= 1300){
			$('.advantages-right--four').removeClass('is-activ');
		};
});

$('.advantages-center--five').hover(function() {
	$('.advantages-right--five').addClass('is-hover');
	if(w <= 1300){
			$('.advantages-right--five').addClass('is-activ');
		};
}, function(){
	$('.advantages-right--five').removeClass('is-hover');
	if(w <= 1300){
			$('.advantages-right--five').removeClass('is-activ');
		};
});

$('.advantages-center--six').hover(function() {
	$('.advantages-right--six').addClass('is-hover');
	if(w <= 1300){
			$('.advantages-right--six').addClass('is-activ');
		};
}, function(){
	$('.advantages-right--six').removeClass('is-hover');
	if(w <= 1300){
			$('.advantages-right--six').removeClass('is-activ');
		};
});
// is-hover

// Modal window
	$('.js-btn').on('click', function() {
		$('.modal, .overley').addClass('is-modl');
		$('html, body').css('overflow-y', 'hidden');
	});

	$('.close, .overley').on('click', function() {
		$('.modal, .overley').removeClass('is-modl');
		$('html, body').css({'-webkit-overflow-y': 'initial', 'overflow-y': 'visible'});
	})
// Modal window
});