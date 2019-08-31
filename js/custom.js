$(document).ready(function(){
// Can also be used with $(document).ready()

<!--owl-carouse slider-->
$('.owl-carousel').owlCarousel({
    items:1,
	//animateOut: 'fadeOut',
    lazyLoad:true,
    loop:true,
	autoplay:true,
	autoplayTimeout:4000,
	autoplayHoverPause:false,
    margin:0
});
<!--owl-carouse slider-->

<!--scrollTop-->
$(document).ready(function(){ 
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
 
		});
<!--scrollTop-->
});
 




















