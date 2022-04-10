$(document).on('scroll', function(){
	if (window.scrollY > 100) $('.navbar').addClass('show')
	else $('.navbar').removeClass('show')
	$('.header-img').css("bottom", Math.max(window.scrollY / 3) + "px");
	$('.center-all').css("transform", "translateY(" + -Math.max(window.scrollY * .05) + "px)");
})
