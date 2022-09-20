
$(function () {

  $('html,body').animate({ scrollTop: 0 }, '1');

  $('.get_kuji_btn').on('click',function(){
    $(this).addClass('animate__headShake');

    min = 1;
    max = 5;
    num = Math.floor(Math.random() * (max + 1 - min)) + min;
    console.log(num);
    if(num == 1){
      en = 'H';
      title = '繝偵ャ繝亥膚蜩�';
      link = '/hit/';
    } else if(num == 2){
      en = 'R';
      title = '繝ｬ繧｢蝠�刀';
      link = '/rare/';
    } else if(num == 3){
      en = 'P';
      title = '遘√◆縺｡縺ｮ諠ｳ縺�';
      link = '/policy/';
    } else if(num == 4){
      en = 'M';
      title = '遉ｾ蜩｡邏ｹ莉�';
      link = '/recruit/introduction/';
    } else if(num == 5){
      en = 'W';
      title = '莠区･ｭ邏ｹ莉�';
      link = '/contents/';
    }

    setTimeout(function(){
      $('.kuji__result .pagetitle').text(title);
      $('.kuji__result .name').text(title);
      $('.kuji__result .en').text(en);
    },100);
    setTimeout(function(){
      $('.kuji__result').addClass('open');
    },800);
    setTimeout(function(){
      window.location.href = link;
    }, 2000);
  });

  $(window).on("mousemove", function(e) {
    x = e.screenX*.015;
    y = e.screenY;

		// $('.mv__item:eq(0) img').css('transform','translate('+x+'px,0)');
		$('.mv__item:eq(1) img').css('transform','translate(-'+x+'px,0)');
		$('.mv__item:eq(2) img').css('transform','translate('+x+'px,0)');
		$('.mv__item:eq(3) img').css('transform','translate(-'+x+'px,0)');
	});

  // 謗｡逕ｨ諠��ｱ縲繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ
  $(".js-open_outline").on("click", function () {
    $(this).next().slideToggle();
  });

  $(window).on("scroll", function () {
    scrollDirection();
  });

  $('body').on('touchmove', function() {
    scrollDirection();
  });

  var timer = null;
  function scrollDirection(){
    win = $(window).height();
    scr = $(window).scrollTop();

    clearTimeout(timer);
    timer = setTimeout(function () {
      if($('.workarea').length){
        workareaTop = $('.workarea').offset().top;
        if ( scr > workareaTop - win*.9) {
          $('.workarea__ill .animate__animated').addClass('animate__zoomInUp');
        }
      }

      if($('.product__content').length){
        productTop = $('.product__content').offset().top;
        if ( scr > productTop - win/2) {
          $('.product__content--item').eq(0).addClass('animate__zoomInUp');
          $('.product__content--item').eq(1).addClass('animate__zoomInDown');
        }
      }

      if($('.companyarea').length){
        companyTop = $('.companyarea').offset().top;
        if ( scr > companyTop) {
          $('.companyarea .fukidashi').addClass('animate__rubberBand');
        }
      }

      if($('.policyarea').length){
        policyarea = $('.policyarea').offset().top;
        if ( scr > policyarea - win/2) {
          $('.policyarea .img').addClass('animate__rubberBand');
        }
      }

      if($('.policy__contents').length){
        policyTop = $('.policy__contents').offset().top;
        visionmapTop = $('.policy__visionmap').offset().top;
        
        if ( scr > policyTop - win*.4) {
          $('.mission').addClass('fadeUp');
        } else {
          $('.mission').removeClass('fadeUp');
        }

        if ( scr > policyTop + win*.2) {
          $('.mission').removeClass('fadeUp');
          $('.vision').addClass('fadeUp');
        } else {
          $('.vision').removeClass('fadeUp');
        }

        if ( scr > policyTop + win*1.2) {
          $('.vision').removeClass('fadeUp');
          $('.value').addClass('fadeUp');
        } else {
          $('.value').removeClass('fadeUp');
        }

        if( scr > visionmapTop - win){
          $('.value').removeClass('fadeUp');
        }

      }

      if($(".backInDown").length){
        animeCount01 = $(".backInDown").length;
        for (c = 0; c < animeCount01; c++) {
          animeTop = $(".backInDown").eq(c).offset().top;
          if (scr > animeTop - win/1.5) {
            $(".backInDown").eq(c).addClass("animate__backInDown on");
          }
        }
      }

      if($(".fadeInDown").length){
        animeCount0fd = $(".fadeInDown").length;
        for (c = 0; c < animeCount0fd; c++) {
          animeTop = $(".fadeInDown").eq(c).offset().top;
          if (scr > animeTop - win*.7) {
            $(".fadeInDown").eq(c).addClass("animate__fadeInDown on");
          }
        }
      }

      if($(".zoomInLeft").length){
        animeCountup = $(".zoomInLeft").length;
        for (c = 0; c < animeCountup; c++) {
          animeTop = $(".zoomInLeft").eq(c).offset().top;
          if (scr > animeTop - win/2) {
            $(".zoomInLeft").eq(c).addClass("animate__zoomInLeft on");
          }
        }
      }

      if($(".rubberBand").length){
        animeCount02 = $(".rubberBand").length;
        for (c = 0; c < animeCount02; c++) {
          animeTop = $(".rubberBand").eq(c).offset().top;
          if (scr > animeTop - win*.8) {
            $(".rubberBand").eq(c).addClass("animate__rubberBand on");
          }
        }
      }

      if($(".fadeInRight").length){
        animeCount03 = $(".fadeInRight").length;
        for (c = 0; c < animeCount03; c++) {
          animeTop = $(".fadeInRight").eq(c).offset().top;
          if (scr > animeTop - win/1.5) {
            $(".fadeInRight").eq(c).addClass("animate__fadeInRight on");
          }
        }
      }

      if($(".fadeInLeft").length){
        animeCount04 = $(".fadeInLeft").length;
        for (c = 0; c < animeCount04; c++) {
          animeTop = $(".fadeInLeft").eq(c).offset().top;
          if (scr > animeTop - win/1.5) {
            $(".fadeInLeft").eq(c).addClass("animate__fadeInLeft on");
          }
        }
      }

      if($(".zoomIn").length){
        animeCount05 = $(".zoomIn").length;
        for (c = 0; c < animeCount05; c++) {
          animeTop = $(".zoomIn").eq(c).offset().top;
          if (scr > animeTop - win*.85) {
            $(".zoomIn").eq(c).addClass("animate__zoomIn on");
          }
        }
      }

      if($('.bounceIn').length){
        animeCount06 = $(".bounceIn").length;
        for (c = 0; c < animeCount06; c++) {
          animeTop = $(".bounceIn").eq(c).offset().top;
          if (scr > animeTop - win*.6) {
            $(".bounceIn").eq(c).addClass("animate__bounceIn on");
          }
        }
      }

      count = $(".svgtxt").length;
      for (svg = 0; svg < count; svg++) {
        svgTop = $(".svgtxt").eq(svg).offset().top;
        if (scr > svgTop - win) {
          $(".svgtxt").eq(svg).addClass("startSvg");
        }
      }

      fadeArea = $(".fadeStart").length;
      for (f = 0; f < fadeArea; f++) {
        fTop = $(".fadeStart").eq(f).offset().top;
        if (scr > fTop - win / 1.3) {
          $(".fadeStart").eq(f).addClass("start");
        }
      }
    }, 0.1);
  }

  function menuBtn() {
    $("#nav,#menuBtn").toggleClass("open");
  }
  $("#menuBtn , #closeBtn , .nav_bg").on("click", function () {
    menuBtn();
  });
});

//繝壹�繧ｸ縺ｮ蜈ｨ繝��繧ｿ繧定ｪｭ縺ｿ霎ｼ縺ｿ蠕�
$(window).on("load", function () {
  
});

// 繝輔か繝ｼ繝�
$(function () {
  $('.agreeBox').on('change',function(){
    $('.submitbtn').prop('disabled',false);
  });

  $("#formbtn").on("click", function () {
    require = $("input[name=qa_type]:checked").val();
    if (require) {
      $(".errqa_type").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errqa_type").addClass("errflag");
      $(".errqa_type").html("<b>" + errtxt + "</b>");
    }

    name1 = $("input[name=person]").val();
    if (name1) {
      $(".errName").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errName").addClass("errflag");
      $(".errName").html("<b>" + errtxt + "</b>");
    }

    kana1 = $("input[name=kana]").val();
    if (kana1) {
      $(".errKana").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errKana").addClass("errflag");
      $(".errKana").html("<b>" + errtxt + "</b>");
    }

    email = $("input[name=email]").val();
    if (email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      $(".erremail").remove();
    } else if(email == '') {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".erremail").addClass("errflag");
      $(".erremail").html("<b>" + errtxt + "</b>");
    } else if(!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      errtxt = "繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ縺ｮ蠖｢蠑上′驕輔＞縺ｾ縺�";
      $(".erremail").addClass("errflag");
      $(".erremail").html("<b>" + errtxt + "</b>");
    }

    pref_name = $("select[name=pref_name]").val();
    if (pref_name) {
      $(".errpref_name").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errpref_name").addClass("errflag");
      $(".errpref_name").html("<b>" + errtxt + "</b>");
    }

    tel = $("input[name=tel]").val();
    if (tel) {
      $(".errtel").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errtel").addClass("errflag");
      $(".errtel").html("<b>" + errtxt + "</b>");
    }

    tel = $("input[name=zip11]").val();
    if (tel) {
      $(".erraddr").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".erraddr").addClass("errflag");
      $(".erraddr").html("<b>" + errtxt + "</b>");
    }

    content = $("textarea[name=content]").val();
    if (content) {
      $(".errCon").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errCon").addClass("errflag");
      $(".errCon").html("<b>" + errtxt + "</b>");
    }

    method = $("textarea[name=qa_method]").val();
    if (method) {
      $(".errmethod").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errmethod").addClass("errflag");
      $(".errmethod").html("<b>" + errtxt + "</b>");
    }

    agreeBox = $("input[name=agreecheck]:checked").val();
    if (agreeBox) {
      $(".errqa_agr").remove();
    } else {
      errtxt = "蠢��磯��岼縺ｧ縺�";
      $(".errqa_agr").addClass("errflag");
      $(".errqa_agr").html("<b>" + errtxt + "</b>");
    }
  });
});