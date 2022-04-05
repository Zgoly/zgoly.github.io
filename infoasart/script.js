$(document).on('scroll', function(){
	$('.header-img').css("bottom", Math.max(window.scrollY / 3) + "px");
	$('.center-all').css("transform", "translateY(" + -Math.max(window.scrollY * .05) + "px)");
})
