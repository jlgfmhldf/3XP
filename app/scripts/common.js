$(function () {

	'use strict';

	var
		$scrollBtn = $('.js-scroll-to');

	$scrollBtn.on('click', function (event) {
		var scrollId = $(this).attr('href');

		$.scrollTo(scrollId, 1000, {
			offset: {
				top: -150
			}
		});

		event.preventDefault()
	});

});
