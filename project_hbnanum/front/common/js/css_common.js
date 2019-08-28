$(document).ajaxStart(function(){
	$("body").addClass("wait");
	$(".bg-bx-wh").addClass("open"); 
	$(".bg-bx-wh").addClass("fadein");
});

$(document).ajaxStop(function(){
	$("body").removeClass("wait");
	$(".bg-bx-wh").removeClass("open"); 
	$(".bg-bx-wh").removeClass("fadein");
});

function fnLoadingOpen(){
	$("body").addClass("wait");
	$(".bg-bx-wh").addClass("open"); 
	$(".bg-bx-wh").addClass("fadein");
}
 
function fnLoadingClose(){
	$("body").removeClass("wait");
	$(".bg-bx-wh").removeClass("open"); 
	$(".bg-bx-wh").removeClass("fadein");
}

$(document).ready(function () {
 	$(".lab-st-1 input").click( function() {
		$(this).attr("checked", "checked");
 		$(".lab-st-1").find("label").removeClass("on");
 		$(this).parent().find("label").addClass("on");
	});
	
	$(".sec-header .btn-menu").click(function() { 
		$(".bg-bx-wh").addClass("open"); 
		$(".sec-aside").addClass("open");
		$("html").addClass("back");
		$("body").addClass("back");
	});
	
	$(".btn-aside-close").click(function() { 
		$(".bg-bx-wh").removeClass("open"); 
		$(".sec-aside").removeClass("open");
		$("html").removeClass("back");
		$("body").removeClass("back");
	});

	$(".sec-menu-li>a").click(function(){
		var submenu = $(this).next("ul");
		if( submenu.is(":visible") ){
			submenu.slideUp();
			$(".sec-menu-li>a").removeClass("on");
		}else{
			//$(".sec-menu-li>.hide").slideUp(500, function(){
				submenu.slideDown();
				$(this).addClass("on");
			//});
		}
	}).mouseover(function(){
		//$(this).next("ul").slideDown();
	});
	$( ".tab_js>li>a" ).click(function() {
		$(this).parent().addClass("on").siblings().removeClass("on");
		return false;
	});
	$(".hd-btn-category").click( function() {
		$(".sec-cat-list").toggleClass( "open" );
		//$(".sec-cat-list").removeClass("open"); 
		//$(".sec-cat-list").addClass("open"); 
	});

	$(".sbj-ques").click( function() {
		$(this).parent().next().find("td").toggleClass( "open" );
 	});
	




});
