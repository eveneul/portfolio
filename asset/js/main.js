$(function () {
	gsap.to('.bg', {
		autoAlpha: 1,
		ease: 'power1.in',
		scrollTrigger: {
			trigger: '.sc-about',
			start: 'bottom bottom',
			end: 'bottom 100px',
			scrub: 1,
		},
	});

	const cursorW = 124;
	const cursorH = 124;

	$(window).mousemove(function (e) {
		const xVal = e.clientX;
		const yVal = e.clientY;

		gsap.to('.cursor', {
			x: xVal,
			y: yVal,
			width: cursorW,
			height: cursorH,
			xPercent: -50,
			yPercent: -50,
		});
	});

	$('span').mousemove(function (e) {
		if (
			$(e.target).parents('.info-area').length ||
			$(e.target).parents('.info-item').length ||
			$(e.target).parents('.title-area').length ||
			$(e.target).parents('.contact-title').length
		) {
			$('.cursor').addClass('gradient');
			$('.cursor').html('<span>scroll</span>');
		} else if ($(e.target).parents('.addr-box').length) {
			$('.cursor').addClass('gradient');
			$('.cursor').html('<span>contact me</span>');
		}
	});

	$('span').mouseout(function (e) {
		$('.cursor').removeClass('gradient');
		$('.cursor').html('<span>scroll</span>');
	});

	$('h1').mousemove(function (e) {
		$('.cursor').addClass('gradient');
		$('.cursor').html('<span>scroll</span>');
	});

	$('h1').mouseout(function (e) {
		$('.cursor').removeClass('gradient');
		$('.cursor').html('<span>scroll</span>');
	});

	$('a').mousemove(function (e) {
		if ($(e.target).parents('.works-item').length) {
			$('.cursor').addClass('fff');
			$('.cursor').html('<span>click</span>');
		} else if ($(e.target).parents('.addr-box').length) {
			$('.cursor').addClass('gradient');
			$('.cursor').html('<span>contact me</span>');
		} else if ($(e.target).parents('.link-box').length) {
			$('.cursor').addClass('gradient');
			$('.cursor').html('<span>click</span>');
		} else {
			$('.cursor').html('<span>scroll</span>');
		}
	});

	$('a').mouseout(function (e) {
		$('.cursor').removeClass('fff');
		$('.cursor').removeClass('gradient');
		$('.cursor').html('<span>scroll</span>');
	});

	var path = anime.path('.orbit-context path');
	var motionPath = anime({
		targets: '.square',
		easing: 'easeInQuad',
		translateX: path('x'),
		translateY: path('y'),
		rotate: path('angle'),
		duration: 8000,
		loop: true,
	});

	// i try to i learn a lot

	gsap.to('.orbit .text-area p', {
		backgroundPositionX: '0%',
		stagger: 1,
		scrollTrigger: {
			trigger: '.orbit .text-area p',
			scrub: 1,
			start: 'top center',
			end: 'bottom center',
		},
	});
	gsap.from('.sc-contact .title span', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-contact',
			start: 'top center',
		},
	});

	gsap.from('.sc-contact .contact-title span', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-contact',
			start: 'top center',
		},
	});

	gsap.from('.sc-contact .addr-box span', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-contact',
			start: 'top center',
		},
	});

	gsap.from('.phone-num', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-contact',
			start: 'top center',
		},
	});

	gsap.from('.sc-contact .link-box a', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-contact',
			start: 'top center',
		},
	});

	gsap.from('.sc-contact .info-item span', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-contact',
			start: 'top center',
		},
	});

	gsap.from('.sc-about .title-area span', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-about',
			start: 'top center',
		},
	});

	gsap.from('.sc-about .info-area span', {
		yPercent: 100,
		duration: 1,
		scrollTrigger: {
			trigger: '.sc-about',
			start: 'top center',
		},
	});

	//
});
