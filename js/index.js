window.onload = function() {
	var mySwiper = new Swiper('.lunbo', {
		autoplay: 2000,
		loop: true,
		pagination: ".swiper-pagination",
		effect: "fade",
		speed: 1000,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
	});
	var mySwiper2 = new Swiper('.mingxing-con', {
		autoplay: 10000,
		loop: true,
		slidesPerView: 4,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
	});
	var mySwiper3 = new Swiper('.neirong-con', {
		loop: true,
		pagination: ".swiper-pagination",
	});
};