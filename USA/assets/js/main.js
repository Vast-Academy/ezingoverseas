/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Sticky Header Js
03. one page Header Js
04. Header Hight Js
05. Header Class Add Js
06. One Page Scroll Js
07. Common Js
08. Hum burger Js
09. Menu Style Js
09. Search Js
10. Search Js
11. Offcanvas Js
12. cart mini Js
13. Body overlay Js
14. Nice Select Js
15. Back To Top Js
16. Hover to Active
17. Ecommerce js
18. Price Filter Js
19. Wow Js
20. Counter Js
****************************************************/

(function ($) {
	"use strict";


	var windowOn = $(window);


	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


		////////////////////////////////////////////////////
		// 02. sticky header
		function tp_pinned_header(){
			var lastScrollTop = 0;

			windowOn.on('scroll',function() {
					var currentScrollTop = $(this).scrollTop();

					if(currentScrollTop > lastScrollTop) {
							$('.tp-int-menu').removeClass('tp-header-pinned');
					}else if($(this).scrollTop() <= 500){
						$('.tp-int-menu').removeClass('tp-header-pinned');
					}else {
							// Scrolling up, remove the class
							$('.tp-int-menu').addClass('tp-header-pinned');
					}
					lastScrollTop = currentScrollTop;
			});
		}
		tp_pinned_header();


		// 03. one page Header Js
		windowOn.on('scroll', function () {
			var scroll = $(window).scrollTop();	
			if (scroll < 200) {
				$("#header-sticky").removeClass("tp-header-onepage");
			} else {
				$("#header-sticky").addClass("tp-header-onepage");
			}

		});


		////////////////////////////////////////////////////
		// 04.Header Hight Js
		if ($('.tp-header-height').length > 0) {
			var headerHeight = document.querySelector(".tp-header-height");
					
			var setHeaderHeight = headerHeight.offsetHeight;
					
			$(".tp-header-height").each(function () {
				$(this).css({
					'height' : setHeaderHeight + 'px'
				});
			});
		}


		////////////////////////////////////////////////////
		// 05. Header Class Add Js
		$('.tp-main-menu ul li a').each(function(){
			$(this).wrapInner("<span></span>");
		});


		////////////////////////////////////////////////////
		// 06. One Page Scroll Js
		function scrollNav() {
			$('.tp-onepage-menu li a').click(function(){
				$(".tp-onepage-menu li a.active").removeClass("active");     
				$(this).addClass("active");
				
				$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 100
				}, 300);
				return false;
			});
		}
		scrollNav();


		////////////////////////////////////////////////////
		// 07. Common Js
		$("[data-background").each(function () {
			$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
		});

		$("[data-bg-color]").each(function () {
			$(this).css("background-color", $(this).attr("data-bg-color"));
		});

		$("[data-width]").each(function () {
			$(this).css("width", $(this).attr("data-width"));
		});


		////////////////////////////////////////////////////
		// 08. Hum burger Js
		$('.tp-hamburger-toggle').on('click', function(){
			$('.tp-header-side-menu').slideToggle('tp-header-side-menu');
		});


		////////////////////////////////////////////////////
		// 09. Menu Style Js
		if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
			let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
			let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
			mobileNavContainer.innerHTML = navContent;
		
		
			let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
		
			arrow.each(function () {
				let self = $(this);
				let arrowBtn = document.createElement("BUTTON");
				arrowBtn.classList.add("dropdown-toggle-btn");
				arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
		
				self.append(function () {
					return arrowBtn;
				});
		
				self.find("button").on("click", function (e) {
					e.preventDefault();
					let self = $(this);
					self.toggleClass("dropdown-opened");
					self.parent().toggleClass("expanded");
					self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
					self.parent().parent().children(".submenu").slideToggle();
					
		
				});
		
				});
		}


		////////////////////////////////////////////////////
		// 10. Search Js
		$(".search-open-btn").on("click", function () {
			$(".search-area").addClass("search-opened");
			$(".search-overlay").addClass("opened");
		});
		$(".search-close-btn").on("click", function () {
			$(".search-area").removeClass("search-opened");
			$(".search-overlay").removeClass("opened");
		});


		////////////////////////////////////////////////////
		// 11. Offcanvas Js
		$(".offcanvas-open-btn").on("click", function () {
			$(".offcanvas__area").addClass("offcanvas-opened");
			$(".body-overlay").addClass("opened");
		});
		$(".offcanvas-close-btn ,.tp-main-menu-mobile .tp-onepage-menu li a  > *:not(button)").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".body-overlay").removeClass("opened");
		});



		////////////////////////////////////////////////////
		// 12. cart mini Js
		$(".cartmini-open-btn").on("click", function () {
			$(".cartmini__area").addClass("cartmini-opened");
			$(".body-overlay").addClass("opened");
		});
		$(".cartmini-close-btn").on("click", function () {
			$(".cartmini__area").removeClass("cartmini-opened");
			$(".body-overlay").removeClass("opened");
		});



		////////////////////////////////////////////////////
		// 13. Body overlay Js
		$(".body-overlay").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".tp-search-area").removeClass("opened");
			$(".cartmini__area").removeClass("cartmini-opened");
			$(".body-overlay").removeClass("opened");
		});


		////////////////////////////////////////////////////
		// 14. Nice Select Js
		$('select').niceSelect();
		$('.tp-header-search-category select').niceSelect();


		////////////////////////////////////////////////////
		// 15. Back To Top Js
		function back_to_top() {
			var btn = $('#back_to_top');
			var btn_wrapper = $('.back-to-top-wrapper');

			windowOn.scroll(function () {
				if (windowOn.scrollTop() > 300) {
					btn_wrapper.addClass('back-to-top-btn-show');
				} else {
					btn_wrapper.removeClass('back-to-top-btn-show');
				}
			});

			btn.on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: 0 }, '300');
			});
		}
		back_to_top();


		//////////////////////////////////////////////////
		// 16. Hover to Active
		$('.tp-work-item , .tp-features-3-item').on('mouseenter', function () {
			$(this).addClass('active').parent().siblings().find('.tp-work-item , .tp-features-3-item').removeClass('active');
		});

		
		////////////////////////////////////////////////////
		// Jquery Appear raidel
		if (typeof ($.fn.knob) != 'undefined') {
			$('.knob').each(function () {
			var $this = $(this),
			knobVal = $this.attr('data-rel');

			$this.knob({
			'draw': function () {
				$(this.i).val(this.cv + '%')
			}
			});

			$this.appear(function () {
			$({
				value: 0
			}).animate({
				value: knobVal
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
				$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
			}, {
			accX: 0,
			accY: -150
			});
		});
		}


		////////////////////////////////////////////////////
		// Hero Active
		if ($('.tp-hero-active').length > 0) {
			var slider = new Swiper('.tp-hero-active', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				effect: 'fade',
				autoplay: {
					delay: 5000,
				},
				// pagination
				pagination: {
					el: ".tp-hero-pagination",
					clickable: true
					},
				});
			}


		////////////////////////////////////////////////////
		// Hero Active 3
		if ($('.tp-hero-3-active').length > 0) {
			var slider = new Swiper('.tp-hero-3-active', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				effect: 'fade',
				autoplay: {
					delay: 5000,
				},
				// pagination
				pagination: {
					el: ".tp-hero-3-pagination",
					clickable: true
					},
				});
			}


		////////////////////////////////////////////////////
		// Hero Active 4
		if ($('.tp-hero-4-active').length > 0) {
			var slider = new Swiper('.tp-hero-4-active', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				effect: 'fade',
				autoplay: {
					delay: 5000,
				},
				// pagination
				pagination: {
					el: ".tp-hero-4-pagination",
					clickable: true
					},
				});
			}


		////////////////////////////////////////////////////
		// Countries Active 4
		if ($('.tp-countries-4-active').length > 0) {
			var slider = new Swiper('.tp-countries-4-active', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				effect: 'fade',
				autoplay: {
					delay: 5000,
				},
					// Navigation arrows
					navigation: {
						nextEl: ".countries-button-next-1",
						prevEl: ".countries-button-prev-1",
					},
				});
			}


		////////////////////////////////////////////////////
		// Service Active
		if ($('.tp-service-active').length > 0) {
			var slider = new Swiper('.tp-service-active', {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				breakpoints: {
					'1700':{
						slidesPerView:4,
					},
					'1400':{
						slidesPerView:4,
					},
					'1200':{
						slidesPerView:4,
					},
					'992':{
						slidesPerView:3,
					},
					'766': {
						slidesPerView:3,
					},
					'576': {
						slidesPerView:1,
					},
					'0': {
						slidesPerView:1,
					},
					},
					// Navigation arrows
					navigation: {
						nextEl: ".service-button-next-1",
						prevEl: ".service-button-prev-1",
					},
				});
			}


		////////////////////////////////////////////////////
		// testimonial Active
		if ($('.tp-testimonial-active').length > 0) {
			var slider = new Swiper('.tp-testimonial-active', {
				slidesPerView: 2,
				spaceBetween: 30,
				loop: true,
				breakpoints: {
					'1700':{
						slidesPerView:2,
					},
					'1400':{
						slidesPerView:2,
					},
					'1200':{
						slidesPerView:2,
					},
					'767': {
						slidesPerView:2,
					},
					'576': {
						slidesPerView:1,
					},
					'0': {
						slidesPerView:1,
					},
					},
				});
			}


		////////////////////////////////////////////////////
		// countries Active
		if ($('.tp-countries-active').length > 0) {
			var slider = new Swiper('.tp-countries-active', {
				speed:500,
				slidesPerView: 5,
				spaceBetween: 5,
				loop: true,
				autoplay:true,
				arrow:false,
				breakpoints: {
					'1700':{
						slidesPerView:5,
					},
					'1400':{
						slidesPerView:5,
					},
					'1200':{
						slidesPerView:4,
					},
					'767': {
						slidesPerView:3,
					},
					'576': {
						slidesPerView:2,
					},
					'0': {
						slidesPerView:1,
					},
					},
				});
			}


		////////////////////////////////////////////////////
		// countries Active 3
		if ($('.tp-countries-3-active').length > 0) {
			var slider = new Swiper('.tp-countries-3-active', {
				speed:500,
				slidesPerView: 5,
				spaceBetween: 35,
				loop: true,
				autoplay:true,
				arrow:false,
				breakpoints: {
					'1700':{
						slidesPerView:5,
					},
					'1400':{
						slidesPerView:5,
					},
					'1200':{
						slidesPerView:4,
					},
					'767': {
						slidesPerView:3,
					},
					'576': {
						slidesPerView:2,
					},
					'0': {
						slidesPerView:1,
					},
					},
				});
			}


		////////////////////////////////////////////////////
		// brand Active
		if ($('.tp-brand-active').length > 0) {
			var slider = new Swiper('.tp-brand-active', {
				speed:300,
				slidesPerView: 5,
				spaceBetween: 5,
				loop: true,
				autoplay:true,
				centeredSlides: true,
				arrow:false,
				breakpoints: {
					'1700':{
						slidesPerView:5,
					},
					'1400':{
						slidesPerView:5,
					},
					'1200':{
						slidesPerView:4,
					},
					'992':{
						slidesPerView:4,
					},
					'767': {
						slidesPerView:3,
					},
					'576': {
						slidesPerView:2,
					},
					'360':{
						slidesPerView:2
					},
					'0': {
						slidesPerView:1,
					},
					},
				});
			}


		////////////////////////////////////////////////////
		// instagram Active
		if ($('.tp-instagram-active').length > 0) {
			var slider = new Swiper('.tp-instagram-active', {
				slidesPerView: 5,
				spaceBetween: 10,
				loop: true,
				arrow:false,
				breakpoints: {
					'1700':{
						slidesPerView:5,
					},
					'1400':{
						slidesPerView:5,
					},
					'1200':{
						slidesPerView:4,
					},
					'767': {
						slidesPerView:3,
					},
					'576': {
						slidesPerView:2,
					},
					'360':{
						slidesPerView:2
					},
					'0': {
						slidesPerView:1,
					},
					},
				});
			}


		////////////////////////////////////////////////////
		// team Active
		if ($('.tp-team-active').length > 0) {
			var slider = new Swiper('.tp-team-active', {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				breakpoints: {
					'1700':{
						slidesPerView:3,
					},
					'1400':{
						slidesPerView:3,
					},
					'1200':{
						slidesPerView:3,
					},
					'992':{
						slidesPerView:3,
					},
					'767': {
						slidesPerView:2,
					},
					'576': {
						slidesPerView:2,
					},
					'0': {
						slidesPerView:1,
					},
					},
				});
			}


		////////////////////////////////////////////////////
		// team Active
		if ($('.tp-blog-post-active').length > 0) {
			var slider = new Swiper('.tp-blog-post-active', {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				// Navigation arrows
				navigation: {
					nextEl: ".tp-blog-next-1",
					prevEl: ".tp-blog-prev-1",
				},
				});
			}


		////////////////////////////////////////////
		// 17. Ecommerce js
		function tp_ecommerce() {
			$('.tp-cart-minus').on('click', function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
		
			$('.tp-cart-plus').on('click', function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
	
	
	
			$('.cart-minus').on('click', function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
		
			$('.cart-plus').on('click', function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		
		
			////////////////////////////////////////////////////
			// 17. Show Login Toggle Js
			$('#showlogin').on('click', function () {
				$('#checkout-login').slideToggle(900);
			});
		
			////////////////////////////////////////////////////
			// 18. Show Coupon Toggle Js
			$('#showcoupon').on('click', function () {
				$('#checkout_coupon').slideToggle(900);
			});
		
			////////////////////////////////////////////////////
			// 19. Create An Account Toggle Js
			$('#cbox').on('click', function () {
				$('#cbox_info').slideToggle(900);
			});
		
			////////////////////////////////////////////////////
			// 20. Shipping Box Toggle Js
			$('#ship-box').on('click', function () {
				$('#ship-box-info').slideToggle(1000);
			});
		}
		tp_ecommerce();


		///////////////////////////////////////////////////
		//// tab line
		if ($('#marker').length > 0) {
		function tp_tab_line(){
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.tp-tab-menu button');
			var itemActive = document.querySelector('.tp-tab-menu .nav-link.active');

			// rtl settings
			var tp_rtl = localStorage.getItem('tp_dir');
			let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('click', (e)=>{
					indicator(e.target);
				});
			});
			
			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-tab-menu button').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line();
		}

		////////////////////////////////////////////////////
		// 18. Price Filter Js
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 200,
			values: [20, 150],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));


		/* magnificPopup img view */
		$('.popup-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.popup-image-footer').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* magnificPopup video view */
		$(".popup-video").magnificPopup({
			type: "iframe",
		});

		////////////////////////////////////////////////
		// 19. Wow Js
		new WOW().init();
		

		////////////////////////////////////////////////
		// 20. Counter Js
		new PureCounter();


})(jQuery);