(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// is-hover
$('.advantages-center--one').hover(function() {
	$('.advantages-left--one').addClass('is-hover')
}, function(){
	$('.advantages-left--one').removeClass('is-hover')
});
$('.advantages-center--two').hover(function() {
	$('.advantages-left--two').addClass('is-hover')
}, function(){
	$('.advantages-left--two').removeClass('is-hover')
});
$('.advantages-center--three').hover(function() {
	$('.advantages-left--three').addClass('is-hover')
}, function(){
	$('.advantages-left--three').removeClass('is-hover')
});

$('.advantages-center--fore').hover(function() {
	$('.advantages-right--four').addClass('is-hover')
}, function(){
	$('.advantages-right--four').removeClass('is-hover')
});

$('.advantages-center--five').hover(function() {
	$('.advantages-right--five').addClass('is-hover')
}, function(){
	$('.advantages-right--five').removeClass('is-hover')
});

$('.advantages-center--six').hover(function() {
	$('.advantages-right--six').addClass('is-hover')
}, function(){
	$('.advantages-right--six').removeClass('is-hover')
});
// is-hover
},{}]},{},[1])