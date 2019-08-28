$(function(){
    $(".menu li").on("click", function(e) {
        e.preventDefault();
        if($(this).hasClass("pdf")) {
            window.open("image/portfolio.pdf");
        } else {
                var top = $(this).data("top") + 1;
                $('html, body').animate({
                    scrollTop: top
                }, 400);

        }

    });

    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        var tops = $(".menu li");

        $.each(tops, function(idx, item) {
            if(sc >= $(item).data("top") && sc < $(tops).eq(idx+1).data("top")) {
                $(tops).removeClass("on");
                $(item).addClass("on");
            }

        });

    });
    
    $('.move').DB_springMove({
		key:'e24102',                //라이센스키
		dir:'y',               //방향축('x','y')
		mirror:1,              //반대방향이동(1,-1)
		radius:10,             //반경
		motionSpeed:0.08       //속도(0~1)
	})
});