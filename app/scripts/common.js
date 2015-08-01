$(function () {

	'use strict';

	var
		$scrollBtn = $('.js-scroll-to'),
		$langBtn = $('.js-lang-btn');

	$scrollBtn.on('click', function (event) {
		var scrollId = $(this).attr('href');

		$.scrollTo(scrollId, 1000, {
			offset: {
				top: -90
			}
		});

		event.preventDefault()
	});

	$langBtn.on('click', function () {
		var
			$this = $(this),
			value = $this.attr('data-lang'),
			activeClass = 'lang_state_active';

		$('html').attr('lang', value);

		$langBtn.removeClass(activeClass);
		$this.addClass(activeClass);
	});

});
