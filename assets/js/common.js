$(document).ready(function($) {

  stopPosSet();
  stopPos = $("footer").height();
  $('.showup').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('upview');
    }
  });
  $('.showdown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('downview');
    }
  });
  $('.showleft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('leftview');
    }
  });
  $('.showright').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('rightview');
    }
  });
  
/*------------------------------------------------------------
  ページトップ、追従ナビ
------------------------------------------------------------*/

  var topBtn = $('#page-top');
  var scroll = 0;
  var footer = 0;
  topBtn.hide();

  stopPos = $("#footer_content").height() - 30;


  $(window).scroll(function () {

  
      if ($(this).scrollTop() > 150) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
      
      if ($(this).scrollTop() > 700 && !$('header').hasClass('scroll')) {
          $('header').addClass('scroll');
      } else if( $(this).scrollTop() < 200 && $('header').hasClass('scroll')) {
          $('header').removeClass('scroll');
      }



      var bottomPos = $(document).height() - $(window).height();
      var nowPos = bottomPos - $(this).scrollTop();
  
      //スクロールが要素の上まで来たら表示
      if (nowPos <= stopPos ) {
        topBtn.addClass('stop');
      }else{
        topBtn.removeClass('stop');
      }
    /*
      if ($(this).scrollTop() <= stopPos ) {
        topBtn.addClass('stop');
      } else {
        topBtn.removeClass('stop');
      }
*/
	});

	topBtn.on('click', function() {
		$('html, body').animate({ scrollTop: 0}, 600, 'swing');
		return false;

  });


/*------------------------------------------------------------
  スマホメニュー
------------------------------------------------------------*/
function handleResponsiveMenu() {
  if (window.matchMedia('(max-width: 1000px)').matches) {
    // Apply small screen behavior
    $('header .open').off('click').on('click', function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $('.fnav').fadeOut(500); // Apply fadeOut for small screens
        $('body').removeClass('open');
        $("#js_opentxt").html("MENU");
      } else {
        $(this).addClass("active");
        $('.fnav').fadeIn(500); // Apply fadeIn for small screens
        $('body').addClass('open');
        $("#js_opentxt").html("Close");
      }
    });

    // Sub-menu toggle
    $('.open__menu').off('click').on('click', function () {
      $(this).next().slideToggle('normal');
    });
  } else {
    // Reset styles and behavior for larger screens
    $('header .open').off('click').removeClass('active');
    $('.fnav').stop(true, true).css('display', ''); // Reset display without fadeIn or fadeOut
    $('body').removeClass('open');
    $("#js_opentxt").html("MENU");

    // Ensure submenus are visible
    $('.open__menu').off('click').next().css('display', '');
  }
}

// Run on page load and window resize
$(document).ready(handleResponsiveMenu);
$(window).on('resize', handleResponsiveMenu);

// End max-width : 1000px;
/*------------------------------------------------------------
  ローディング
------------------------------------------------------------*/
  $(".animsition").animsition({
  inClass               :   'fade-in',
  outClass              :   'fade-out',
  inDuration            :    800,
  outDuration           :    400,
  linkElement           :   '.al',
  loading               :    true,
  loadingClass          :   'animsition-loading',
  unSupportCss          : [ 'animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
              ],
  overlay               :   false,
  overlayClass          :   'animsition-overlay-slide',
  });


});
$(window).on('load resize',function(){
  var ua = navigator.userAgent.toLowerCase();
  var isiPhone = (ua.indexOf('iphone') > -1);
  var isiPad = (ua.indexOf('ipad') > -1);
  var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
  var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);
  var direction = Math.abs(window.orientation);
    if ((ua.indexOf('ipad') > -1) || ((ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1)) ) {
      if(Math.abs(window.orientation) === 90) {
          $(".wrap").addClass("tab");
          $(".wrap").addClass("yoko");
          $(".wrap").removeClass("tate");

        } else {
          $(".wrap").addClass("tab");
          $(".wrap").addClass("tate");
          $(".wrap").removeClass("yoko");
        }

    }
      if (isiPhone || isAndroid) {
    if (direction == 90) {
      $('.wrap').addClass('sp_yoko');
    } else {
      $('.wrap').removeClass('sp_yoko');
    }
  }
});

function stopPosSet() {
  stopPos = $("#footer_content").height();
  $("#page-top.stop").css("bottom",stopPos);
}


  function lmenutoggle() {
    $("#lang_sp").slideToggle("first");
    $("#lang_sp2").slideToggle("first");
  }



/*------------------------------------------------------------
  Search Input
------------------------------------------------------------*/
