jQuery(function ($) {

  if ($('.top_main').length > 0) {
    $('.top_main ul').slick({
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      fade: true,
      pauseOnHover: false,
      autoplaySpeed: 5000,
    });
    function mainHeight() {
      var wh = window.innerHeight ? window.innerHeight : $(window).height();
      $('.top_main li').css('height', wh + 'px');
    }
    $(document).ready(mainHeight);
    $(window).on("resize", mainHeight);
  }
 
  var run = true;
  if (!run) {
    $('.evt').css('visibility', 'visible');
  }
  else {
    setMotion = function (name) {
      var setElm = $(name), delayHeight = 150;
      setElm.each(function () {
        var setThis = $(this);
        if (setThis.hasClass('done')) return;
        var elmTop = setThis.offset().top,
          elmHeight = setThis.height(),
          scrTop = $(window).scrollTop(),
          winHeight = window.innerHeight ? window.innerHeight : $(window).height();
        var dh = delayHeight;
        if (setThis.data('dh')) {
          dh = setThis.data('dh');
          if (isNaN(dh) && dh.indexOf('/') > -1) {
            dh = winHeight / Number(dh.substring(1));
          }
        }
        if (scrTop > elmTop - winHeight + dh && scrTop < elmTop + elmHeight) {
          setThis.addClass('done');
          var delay = setThis.data('delay');
          if (!delay) delay = 0;
          delay = delay * 1000;
          if (delay > 0) {
            setTimeout(function (obj) {
              $(obj).css('visibility', 'visible');
              $(obj).addClass($(obj).data('anim') + ' animated');
            }, setThis.data('delay') * 1000, setThis);
          }
          else {
            setThis.css('visibility', 'visible');
            setThis.addClass(setThis.data('anim') + ' animated');
          }
        }
      });
    }
    function doMotion() {
      setMotion('.evt');
    }
    $(document).ready(doMotion);
    $(window).on('scroll resize', doMotion);
  }

  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

function switchImage() {
  var width = $(window).width();
  $('.u_switch_img').each(function (index) {
    if (!$(this).attr('src')) return;
    var src = $(this).attr('src');
    var index = src.lastIndexOf('.');
    var path = src.substring(0, index);
    var ext = src.substring(index);
    if (path.substring(index - 3) == '_sp') {
      path = path.substring(0, index - 3);
    }
    if (isPc()) {
      path = path + ext;
    }
    else {
      path = path + "_sp" + ext;
    }
    if (src != path) {
      $(this).attr("src", path);
    }
  });
}

setTimeout(function () {
  // 主廚商品輪播
  var mainslide = new Swiper('.slide_box', {
    loop: true,
    speed: 1600,
    effect: 'fade',
    mousewheel: false,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        swiperAnimateCache(this);
        swiperAnimate(this);
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this);
      }
    }
  });
  // 手機版選單
  $('header .header-spNavButton, header .header-spNavClose, header .header-nav-link').click(function () {
    $('.header-nav').toggleClass('active');
    return false;
  });
}, 200);

// 如果a連結的href為空值就移除
var getLink_a = document.querySelectorAll("a")
getLink_a.forEach(function (item) {
	if(!item.getAttribute('href')) {
		item.removeAttribute('href')
		console.log('移除空值的href',item);
	}
});