$(document).ready(function(){
	$(".match-height-media").matchHeight();

	 $('.navbar li a').click(function(e) {

        $('.navbar li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        // e.preventDefault();
    });

	/**
		var tempLink = "http://via.placeholder.com/640x420";

	 $('#bridal').on('click', function(){
		 $("#image-1").attr("src", tempLink);
		 $("#image-2").attr("src", tempLink);
		 $("#image-3").attr("src", tempLink);
		// 	$("#image-1").attr("src", "images/bride1.jpg");
		// 	$("#image-2").attr("src", "images/bride2.jpg");
		// 	$("#image-3").attr("src", "images/bride3.jpg");
	 });



	 $('#fx').on('click', function(){
		 $("#image-1").attr("src", tempLink);
		 $("#image-2").attr("src", tempLink);
		 $("#image-3").attr("src", tempLink);

		// 	$("#image-1").attr("src", "images/fx1.jpg");
		// 	$("#image-2").attr("src", "images/fx2.jpg");
		// 	$("#image-3").attr("src", "images/fx2.jpg");
	 });

	 startCarousel();


	function startCarousel(){

		$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  wrapAround: true,
	  autoPlay: true

	}
	**/

});
