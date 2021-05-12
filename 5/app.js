/*$(document).ready(function () {
	$('body').html('<h1>Hello JQuery!!</h1>');
});*/
$(function() {
	/*$('.box1').css({
		'background-color': '#0000FF',
		'height': '100px'
	});*/
	/*$('.box1').slideDown();*/
	/*$('.box1').slideUp();*/
	/*$('.box1').show();
	$('.box1').css({'background-color': '#0000FF'});*/
	/*$('.box1').hide();*/
	$('.box1').slideDown(10000,function() {
		$('.box1').css({
			'background-color': '#0000FF',
			'width': '200px',
			'height': '100px'
		}).slideUp(5000);
	});
});