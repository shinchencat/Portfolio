/* ---------------------------
/* #section_04 swiper
/* --------------------------*/
var section_04_Swiper;

function html_04(dataNum, divID) {
    var html = '';
    for (var i = 0; i < themePD[dataNum].content.length; i++) {
        var item = themePD[dataNum].content[i];
        html += '<li class="swiper-slide">';
        html += '<a href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '" class="item">';
        html += '<img alt="' + item.alt + '" src="' + item.path + item.imgL + '">';
        html += '<div class="info" data-tag="' + item.showtag + '">';
        html += '<em class="tag"><span>' + item.tagtext + '</span></em>';
        html += '<h4>' + item.name + '</h4>';
        html += '<button>$<i>' + item.price + '</i></button>';
        html += '</div>';
        html += '</a>';
        html += '</li>';
    }
    $(divID).html(html);

    //執行 Swiper
    section_04_Swiper = new Swiper('.section_04 .swiper-container', {
        effect: "slide",
        loop: true,
        mousewheel: false,
        slidesPerView:'auto',
        spaceBetween:0,
        speed: 1000,
        centeredSlides: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.section_04 .swiper-pagination',
        },
        breakpoints: {

            //  >= 768px
            769: {
            }
        }
    });

}

html_04(0, '#section_04');

/* ---------------------------
/* #section_05 ~ #section_09
/* --------------------------*/
function html_05(dataNum, divID) {
    var html = '';
    for (var i = 0; i < themePD[dataNum].content.length; i++) {
        var item = themePD[dataNum].content[i];
        html += '<a href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '" class="item">';
        html += '<img alt="' + item.alt + '" src="' + item.path + item.imgL + '">';
        html += '<div class="info" data-tag="' + item.showtag + '">';
        html += '<em class="tag"><span>' + item.tagtext + '</span></em>';
        html += '<h4>' + item.name + '</h4>';
        html += '<button>$<i>' + item.price + '</i></button>';
        html += '</div>';
        html += '</a>';
    }
    $(divID).html(html);
}

html_05(1, '#section_05');
html_05(2, '#section_06');
html_05(3, '#section_07');
html_05(4, '#section_08');
html_05(5, '#section_09');

/*!
 * main
 */

function isMobile() {
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function isMobileTablet(){
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
            check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

$(function(){

    if (isMobileTablet()){
        $("html").addClass("tablet");
    }

    if (isMobile()){
        $("html").addClass("mobile");
    }

    // $("#menubtn").on("click",function(event){
    //     event.preventDefault();
    //     // $(this).toggleClass("open");
    //     $("#sitemenu").addClass("open");
    //     $("body").addClass("menuopen");
    // });

    // $("#closebtn").on("click",function(event){
    //     event.preventDefault();
    //     $("#sitemenu").removeClass("open");
    //     $("body").removeClass("menuopen");
    // });

    // $("#gotopBox").on("click",function(event){
    //     event.preventDefault();
    //     $('html,body').animate({scrollTop:0},500);
    // });


    $('a[data-href]').click(function() {
        $("#sitemenu").removeClass("open");
        $("body").removeClass("menuopen");
        var target = $(this).attr('data-href');
        console.log(target);
        // var scrolltoOffset = $('#navbar').outerHeight() + 1;
        var scrolltoOffset = -2;
        var scrollto = $(target).offset().top - scrolltoOffset;
        $('html, body').animate({
            scrollTop: scrollto
        }, 500, 'swing');
        return false;
    });

    $("#sidePanelRight .ui-btn").on("click",function(event){
        event.preventDefault();
        console.log("click");
        $(this).parent().toggleClass("closed");
    });

    /*mask animation*/
    window.addEventListener("scroll", spotlight);
    function spotlight() {
        var currentTop = $(window).scrollTop();
        var innerHeight = $(window).innerHeight();
        var currentBottom = currentTop + innerHeight;
        var scene = document.querySelector(".section_10");
        var sceneOffsetTop = scene.offsetTop;
        var scrollPosValue = 1-((currentBottom-sceneOffsetTop)/innerHeight);
        console.log(scrollPosValue);
        var radiusValue = 180;
        var ratio = 1000;
        radiusValue = (scrollPosValue>=0) ? radiusValue + scrollPosValue*ratio : 180;
        var light1 = document.querySelector(".light1");
        var light2 = document.querySelector(".light2");
        light1.setAttribute("r",radiusValue);
        light2.setAttribute("r",radiusValue);
    }

    /*header animation*/
    document.querySelector('.section_04').setAttribute('data-ani',Math.floor(Math.random()*2)+2);

    gsap.fromTo(".logo",{scale:0},{scale:1,duration:1,delay:1.0,ease:"elastic"});
    gsap.fromTo(".title",{scale:0},{scale:1,duration:1,delay:1.1,ease:"elastic"});

    gsap.fromTo(".rug",{scale:0},{scale:1,duration:0.5,delay:0.5,ease:"back"});
    gsap.fromTo(".tom",{opacity:0},{opacity:1,duration:0.5,delay:0.9,ease:"back"});
    gsap.fromTo(".jerry",{opacity:0},{opacity:1,duration:0.5,delay:0.9,ease:"back"});
    gsap.fromTo(".tuffy",{opacity:0},{opacity:1,duration:0.5,delay:1.0,ease:"back"});

    gsap.fromTo(".dishes",{scale:0},{scale:1,duration:0.3,delay:1.1,ease:"back"});
    gsap.fromTo(".bbq",{scale:0},{scale:1,duration:0.3,delay:1.2,ease:"back"});
});







/*YOUTUBE VIDEO*/
// var tag = document.createElement('script');
// tag.src ="https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var soundOff = (window.orientation !== undefined)? 1 : 0 ;
// function onYouTubeIframeAPIReady() {
//     $('#ytplayer').inViewAutoplay({
//         quality:'hd720',
//         enablejsapi:1,       
//         playsinline:1,
//         start: 0,
//         mute: 1, 
//         autoplay: 0,
//         loop: 1,
//         fs: 1,
//         controls: 1,
//         autohide: 1,
//         cc_load_policty: 0,
//         iv_load_policy: 3,
//         showinfo: 0,
//         modestbranding: 1,
//         rel: 0,
//         playlist:'Za9Xrv8bokc'
//     });
// }



// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var player;

// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('ytplayer', {
//         playerVars: {
//             'autoplay': 0,
//             'controls': 1,
//             'autohide': 1,
//             'wmode': 'opaque',
//             'showinfo': 1,
//             'loop': 0,
//             'mute': 0,
//             'cc_load_policty': 0,
//             'iv_load_policy': 3,
//             'showinfo': 0,
//             'modestbranding': 1,
//             'rel': 0,
//             // 'playlist': 'Za9Xrv8bokc'
//         },
//         videoId: 'Za9Xrv8bokc',
//         width:'100%',
//         height:'100%',
//         events: {
//             'onReady': onPlayerReady
//         }
//     });

// }

// function onPlayerReady(event) {
//     // event.target.mute();
// }



// jQuery(document).ready(function ($) {
//     $(".fancybox").fancybox({
//         helpers: {
//             media: true
//         },
//         youtube: {
//             autoplay: 1, // enable autoplay
//             start: 0 // set start time in seconds (embed)
//         }
//     }); // fancybox
// }); // ready