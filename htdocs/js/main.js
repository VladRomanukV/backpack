(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])