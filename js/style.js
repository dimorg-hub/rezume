$(document).ready(function () {
	$('.buttons__btn').on("click", function () {
		$('.content__inner, .buttons__btn').removeClass('active');
		$(this).addClass("active");
	});
	$('.personal--btn').on("click", function () {
		$('.personal').addClass('active');
	});
	$('.skills--btn').on("click", function () {
		$('.skills').addClass('active');
	});
	$('.work--btn').on("click", function () {
		$('.work').addClass('active');
	});
	$('.certificat--btn').on("click", function () {
		$('.certificat').addClass('active');
	});
	$('.biography--btn').on("click", function () {
		$('.biography').addClass('active');
	});
	$('.contacts--btn').on("click", function () {
		$('.contacts').addClass('active');
	});
});

$('[data-fancybox="images"]').fancybox({
	afterLoad: function (instance, current) {
		var pixelRatio = window.devicePixelRatio || 1;

		if (pixelRatio > 1.5) {
			current.width = current.width / pixelRatio;
			current.height = current.height / pixelRatio;
		}
	}
});
