var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	spaceBetween: 20,
	observer: true,
	observeParents: true
});

var swiper = new Swiper('#swiper', {
	autoplay: 3000,
	speed: 1000,
	autoplayDisableOnInteraction: false,
	loop: true,
	centeredSlides: true,
	slidesPerView: 2,
	paginationClickable: true,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	onInit: function(swiper) {
		swiper.slides[2].className = "swiper-slide swiper-slide-active"; //第一次打开不要动画
	},
	breakpoints: {
		668: {
			slidesPerView: 1,
		}
	}
});
$(function() {
	$(".body5 input[type=email]").click(function(e) {
		$('#dzyj').stop().animate({
			'top': '-3rem',
			'left': '3rem',
			'font-size': '1.5rem',
		}, 300);
		$('#dzyj').css("color", "red");
		e.stopPropagation();
	})
	$("html,body").click(function(e) {
		$('#dzyj').stop().animate({
			'top': '1rem',
			'left': '2rem',
			'font-size': '2rem',
		}, 300);
		$('#dzyj').css("color", "#666");
	})
})

$(function() {
	$(".body6 #dy1").click(function(e) {
		$('#dy').animate({
			'top': '-2rem',
			'left': '3rem',
			'font-size': '1.5rem',
		}, 300);
		$('#dy').css("color", "red");
		e.stopPropagation();
	})
	$("html,body").click(function(e) {
		$('#dy').stop().animate({
			'top': '1rem',
			'left': '2rem',
			'font-size': '1.5rem',
		}, 300);
		$('#dy').css("color", "#000");
	})
})

$(function() {
	$(".body6 #xk1").click(function(e) {
		$('#xk').animate({
			'top': '-2rem',
			'left': '3rem',
			'font-size': '1.5rem',
		}, 300);
		$('#xk').css("color", "red");
		e.stopPropagation();
	})
	$("html,body").click(function(e) {
		$('#xk').stop().animate({
			'top': '1rem',
			'left': '2rem',
			'font-size': '1.5rem',
		}, 300);
		$('#xk').css("color", "#000");
	})
})

$(function() {
	$(".body6 #yx1").click(function(e) {
		$('#yx').animate({
			'top': '-2rem',
			'left': '3rem',
			'font-size': '1.5rem',
		}, 300);
		$('#yx').css("color", "red");
		e.stopPropagation();
	})
	$("html,body").click(function(e) {
		$('#yx').stop().animate({
			'top': '1rem',
			'left': '2rem',
			'font-size': '1.5rem',
		}, 300);
		$('#yx').css("color", "#000");
	})
})

$('.bd').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	return false;
});

$(function() {
	$(".toLogin").click(function(e) {
		e.stopPropagation();
		$("#modal").fadeIn(500);
		$(".login-box").fadeIn(500);
	})
	$(".toClose").click(function() {
		$("#modal").fadeOut(500);
		$(".login-box").fadeOut(500);
	})
	$("#modal").click(function() {
		$("#modal").fadeOut(500);
		$(".login-box").fadeOut(500);
	})
})