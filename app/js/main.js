$(document).ready(function() {
	// настройки слайдера в шапке сайта 
	
	$('.slider-top').slick({
		accessibility:true,
		arrows: true,
		nextArrow: '<button class="next-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		prevArrow: '<button class="prev-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		//бесконечное перелистывание
		infinite: true,
		//скорость прокрутки
		autoplaySpeed: 2000,
		//сколько показывать слайдов
		slidesToShow: 1,
		//навигация в виде точек
		dots: false,
		//автоматическое перелистывание
		autoplay: true,
		//скорость прокрутки
		speed: 300,
		//Пауза автопроигрывания при наведении мыши
		pauseOnHover: true,
		//количество перелистываемых слайдов
		 slidesToScroll: 1
	});
});