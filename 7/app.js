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
	/*$('.box1').slideDown(10000,function() {
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '200px',
                'height': '100px'
            }).slideUp(5000);
        });*/
    /*$('.box1').mouseover(function(){
    	$('.box1').css('background-color', '#0000FF');
    });

    $('.box1').mouseout(function(){
    	$('.box1').css('background-color', '#FF0000');
    });*/

    /*$('.box1').mouseover(function(){
    	$('.box1').addClass('box1-ext');
    });*/

    /*$('.box1').mouseout(function(){
    	$('.box1').removeClass('box1-ext');
    });

    $('.box1').on('click', function(){
    	$('.box1').addClass('box1-ext');
    });*/
    /*
    $('.box1').on('click', function(){
        $(this).slideUp();
    });
    */
    /*
    $('.bg1').on('click', function(){
        $('.bg1').slideUp();
    });
    $('.bg2').on('click', function(){
        $('.bg2').slideUp();
    });
    $('.bg3').on('click', function(){
        $('.bg3').slideUp();
    });
    $('.bg4').on('click', function(){
        $('.bg4').slideUp();
    });
    */
    $('button').on('click', function(){
        $('ul').children().css('color', 'red');
    })

});