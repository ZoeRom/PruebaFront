
$.when( $.ready ).then(function() {
	// Document is ready.

	/*Mostrar Menu en Movil*/
	$('.Menu-btn').on("click",function() {
		$('.Menu').slideToggle();
		$( this ).toggleClass("change");
	});

	//SLIDER
	$('.Slider-container').owlCarousel({
		items: 1,
		loop: true,
		dotsContainer: '#carousel-custom-dots',
		autoplay: true,
		autoplaySpeed:1000,
		smartSpeed:1500,
		autoPlayHoverPause: true
	});

	$(".Filter").owlCarousel({
		loop: false,
		nav: false,
		dots: false,
		autoWidth:true,
	});
});
