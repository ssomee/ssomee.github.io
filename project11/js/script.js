jQuery(document).ready(function(){
	$('#btn1').toggle(function(){
		$('#content').css('display','block');
	},function(){
		$('#content').css('display','none');
		
	});
	//주소창 없어지는 script
	        // <![CDATA[
        try {
            window.addEventListener('load', function() {
                setTimeout(scrollTo, 0, 0, 1); 
            }, false);
        } catch(e) {}
        // ]]>
	
	
		//Initialize Swiper
	var swiper_auto = new Swiper('#top_auto .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0, <!-- marginright -->
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
		loop: true
    });

	var swiper_bestlist = new Swiper('#info .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 20,
        freeMode: true,
		loop: true
    });	


	var swiper_bestlist = new Swiper('#around .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 20,
        freeMode: true,
		loop: true
    });	
		
		
	$(document).ready(function(){
		var height =  $(".notice").height();
		var num = $(".rolling li").length;
		var max = height * num;
		var move = 0;
		function noticeRolling(){
			move += height;
			$(".rolling").animate({"top":-move},2000,function(){
				if( move >= max ){
					$(this).css("top",0);
					move = 0;
				};
			});
		};
		var noticeRollingOff = setInterval(noticeRolling,3000);
		$(".rolling").append($(".rolling li").first().clone());
		
		
		
		
		$(".rolling").hover(
			function(){
				clearInterval(noticeRollingOff);
			},
			function(){
				noticeRollingOff = setInterval(noticeRolling,3000);
			}
		);	

		

	//	$(".rolling_start").click(function(){
		//	noticeRollingOff = setInterval(noticeRolling,0);
		//});
	});		
});
