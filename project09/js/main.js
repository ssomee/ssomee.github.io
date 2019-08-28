$(function () {
	initScene3();
	
	function initScene3(){
		var $container = $('#scene-3'),
			$masks = $container.find('.mask'),
			$lines = $masks.find('.line'),
			maskLength = $masks.length, // 4개
			maskData = [];
			$masks.each(function(i){
				maskData[i] = {left: 0} 
			});
			$container.on({
				mouseenter:function(){
					resizeMask($(this).index()); // resizeMask 사용자 정의 함수임
				}, 
				mouseleave:function(){
					resizeMask(-1);
				}
			},'.mask');
			resizeMask(-1);
			function resizeMask(active){
				var w = $container.width(),
				h = $container.height();
				$masks.each(function(i){
					var $this = $(this),
					l;
					// active = 마우스 오버된 마스크의 인덱스 0,1,2,3 임 -1이면 마우스가 컨테인 안에 안들어온거
					if(active === -1){ 
						l = w/maskLength*i; // (0, 400, 800, 1200) 균등분할
					}else if(active < i){
					// (0<0)960 (0<1)1120 (0<2)1280 (0<3)1440 접혀있는 부분 160의 넓이를 가짐
						l = w*(1-0.1*(maskLength-i));
					}else{
					// (3<0)0 (3<1)160 (3<2)320 (3<3)480
						l = w*0.1*i;
					}
					
					$(maskData[i]).stop(true).animate({left: l},{
						duration: 1000,
						easing: 'easeOutQuart',
						progress: function(){
							var now = this.left;
							$this.css({
								clip: 'rect(0px '+w+'px '+h+'px '+now+'px)'
							});
							$this.find($lines).css({left: now});
						}/* progress */
					});/* $(maskData[i]) */
				});/* $masks.each */
			}/* function resizeMask(active) */
	}/* function initScene3() */
	

	/* character_info Tabs */
	$('.character_info').each(function(){
		var $container = $(this),
		$highlight = $container.find('.tabs-highlight');
		$container.tabs({
			hide:{duration:250},
			show:{duration:125}, 
			// 처음 로드할때와 탭을 선택시에 하이라이트의 위치를 조정하는 사용자 정의 함수
			create:moveHighlight,
			activate:moveHighlight
		});
		
		function moveHighlight(event, ui){
			var $newTab = ui.newTab || ui.tab,
			left = $newTab.position().left;
			$highlight.animate({left:left},500,'easeOutExpo');
		}
		
	});	
	
	
	/* worldview slide */
	var mySlider = $('#worldview ul').bxSlider({
		mode:'horizontal', // 수평방향으로 이동
		speed: 300, // 이동속도
		pager: false, // 페이지 표시를 숨김
		moveSlides: 1, // 이동슬라이드 갯수
		slideWidth: 1100, // 한개 슬라이드 폭
		minSlides: 1, // 최소 노출 슬라이드 수
		maxSlides: 5, // 최대 노출 슬라이드 수
		slideMargin: 0, // 슬라이드 간의 간격
		auto: true, // 자동 슬라이드 여부
		autoHover: true, // 마우스 오버시 자동정지
		controls: false // 이전 다음 버튼 숨김(아래 함수로 따로 구현)
	});
	$('.prev_btn').on('click',function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.next_btn').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});		


	//  동영상
	
/* 	$('nav li').on('click',function(){
		$('nav li').removeClass();
		$(this).addClass('on');
	});
	
	$('nav li').eq(0).on('click',function(){
		$('#section3 figure').removeClass('block');
		$('#section3 figure').eq(0).addClass('block');
	}); */
	
	
});
