jQuery(document).ready(function(){
	$('input').on('click',function(){
		$('#sub2').animate({top: '180px'},500);
		return false;
		//$('body').animate({opacity: '.8'},300);
		//return false;
	});
	$('#sub2>a, #sub2>.cancel>a').on('click',function(){
		$('#sub2').animate({top: '-300px'},500);//.css('top','-500px');
		return false;
	});
	
	
	//배경색 opacity
	
	$('#title div').each(function(){
		//$(this).css('background-color',$(this).text());
		$(this).css({'opacity':'0.3','backgroundColor':'black'});
	});
	
	$('input').click(function(){
		$('section, #title').animate({'opacity': '0.3','backgroundColor':'black'},1000);
		$('body').animate({'backgroundColor':'black'},1000);
		
	});
	
	$('#sub2>a, #sub2>.cancel>a').click(function(){
		$('section, #title').animate({'opacity':'1','backgroundColor':'#ffffff'},1000);
	});
	
		
	
	
	//favorite
	$('.log > img').on({
		'click':function(){
			var src = ($(this).attr('src') ==='../img/heart_on.png')
				? '../img/heart.png'
				: '../img/heart_on.png';
			$(this).attr('src',src);
		}
	});

	
	$('.log1 > img').on({
		'click':function(){
			var src = ($(this).attr('src') ==='../img/heart_on.png')
				? '../img/heart.png'
				: '../img/heart_on.png';
			$(this).attr('src',src);
		}
	});

	
	$('.log2 > img').on({
		'click':function(){
			var src = ($(this).attr('src') ==='../img/heart_on.png')
				? '../img/heart.png'
				: '../img/heart_on.png';
			$(this).attr('src',src);
		}
	});

	
	
		$('.log3 > img').on({
		'click':function(){
			var src = ($(this).attr('src') ==='../img/heart_on.png')
				? '../img/heart.png'
				: '../img/heart_on.png';
			$(this).attr('src',src);
		}
	});

	$('.log4 > img').on({
		'click':function(){
			var src = ($(this).attr('src') ==='../img/heart_on.png')
				? '../img/heart.png'
				: '../img/heart_on.png';
			$(this).attr('src',src);
		}
	});

	
	$('.log5 > img').on({
		'click':function(){
			var src = ($(this).attr('src') ==='../img/heart_on.png')
				? '../img/heart.png'
				: '../img/heart_on.png';
			$(this).attr('src',src);
		}
	});

});
