jQuery(document).ready(function(){
	
var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

	
	//chat  close 
	$('.close_chat').click(
		function(){
			$('.chat').css('display','none');
		}
	);
	
	
	
 $(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}
 
function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  '안녕하세요. 커피와 책이 함께하는 부키입니다. 근처 북카페와 연계하여 커피를 주문하시면서 원하는 도서도 같이 보실 수 있어요 카페와 관련된 사항은 해당 카페에 문의해주시면 됩니다^^부키에 궁금하신 점을 알려주세요',
  '부키는 근처 북카페를 검색하고 커피를 주문하면서 책을 보실 수 있습니다',
  '커피를 주문하시면서 같이 도서 목록을 검색해보세요 ',
  '카페 목록을 검색해보세요',
  '카페 목록에서 음료를 주문하시고 도서를 검색해보시면 됩니다^^',
  '도서는 대여중일수도 있습니다^^',
  '책과 커피와 함께 힐링하세요^^',
  '즐거운 시간되세요^^'

]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../images/bookee.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar(); //로딩중 아바타 이미지?

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="../images/bookee.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}	
	
});

