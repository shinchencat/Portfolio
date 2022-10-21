/* ---------------------------
/* #section_header Swiper
/* --------------------------*/
var section_header_Swiper;

function html_header(dataNum, divID) {
    var html = '';
    for (var i = 0; i < themePD[dataNum].content.length; i++) {
        var item = themePD[dataNum].content[i];
        html += '<div class="swiper-slide">';
        if (item.anchor === ""){
            html += '<a href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '">';        
        }
        if(item.anchor != ""){
            html += '<a href="javascript:void(0)" data-href="' + item.anchor + '" title="' + item.alt + '">';
        }      
        html += '<div class="bg">';
        html += '<picture>';
        html += '<source srcset="' + item.path + item.bgL + '" media="(min-width:768px)">';
        html += '<img alt="' + item.alt + '" src="' + item.path + item.bgS + '">';
        html += '</picture>';
        html += '</div>';
        html += '<div class="title">';
        html += '<picture>';
        html += '<source srcset="' + item.path + item.imgL + '" media="(min-width:768px)">';
        html += '<img alt="' + item.alt + '" src="' + item.path + item.imgS + '">';
        html += '</picture>';
        html += '</div>';
        html += '</a>';
        html += '</div>';
    }
    $(divID).html(html);

    //執行 Swiper
    section_header_Swiper = new Swiper('.section_header .swiper-container', {
        effect: "fade",
        loop: true,
        mousewheel: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        freeMode: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction:false,
        },
        pagination: {
            el: '.section_header .swiper-pagination',
        },
    });

}

html_header(0, '#section_header');


/* ---------------------------
/* #section_brand Swiper
/* --------------------------*/
var section_brand_Swiper;

function html_brand(dataNum, divID) {
    var html = '';
    for (var i = 0; i < themePD[dataNum].content.length; i++) {
        var item = themePD[dataNum].content[i];
        html += '<div class="swiper-slide">';
        html += '<a title="' + item.alt + '" href="' + item.link + '" target="' + item.target + '">';
        html += '<div class="item">';
        /* type: "card"  <-- 圖文版型 */
        if (item.type === "card"){
            html += '<div class="card">';
            html += '<img class="head" alt="' + item.alt + '" src="' + item.path + item.imgL + '">';
            html += '<div class="text">';
            html += '<span class="tit">' + item.name + '</span>';
            html += '<span class="caption">' + item.caption + '</span>';
            html += '</div>';
            html += '</div>';
        }
        /* type: "card"  <-- 廣告圖片 */
        if (item.type === "banner"){
            html += '<img class="banner" alt="' + item.alt + '" src="' + item.path + item.imgL + '">';
        }

        html += '</div>';
        html += '</a>';
        html += '</div>';

    }
    $(divID).html(html);

    //執行 Swiper
    var brandSwiper = new Swiper('.section_brand .swiper-container', {
        effect: "slide",
        loop: true,
        mousewheel: false,
        slidesPerView:'auto',
        spaceBetween:0,
        speed: 1000,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.section_brand .swiper-prev',
            nextEl: '.section_brand .swiper-next',
        },
    });

}

html_brand(1, '#section_brand');


/* ---------------------------
/* #section_01 ~ #section_06
/* --------------------------*/
function html_template_01(dataNum,divID,order, quantity){
    var html = '';
    for (var i = order; i < quantity; i++) {
        var item = themePD[dataNum].content[i];
        html += '<a class="item" title="' + item.alt + '" href="' + item.link + '" target="' + item.target + '" title="' + item.alt + '">';
        html += '<p>' + item.title + '</p>';
        html += '<div class="item-thumb" data-soldout="' + item.soldout + '">';
        html += '<span class="icon-tag"><b>' + item.tagtxt1 + '</b><em>' + item.tagtxt2 + '</em></span>';
        html += '<span class="cover"><img alt="' + item.alt + '" src="' + item.path + item.imgL + '"></span>';
        html += '</div>';
        html += '<div class="info">';
        html += '<em>' + item.sponsor + '</em>';
        html += '<h4>' + item.name + '</h4>';
        html += '<span>' + item.caption + '</span>';
        html += '<b><u>' + item.slogan + '</u></b>';
        html += '<button>' + item.price + '</button>';
        html += '</div>';
        html += '</a>';
    }
    $(divID).html(html);
}

html_template_01(4, '#section_01 .block01',0 , 1);
html_template_01(4, '#section_01 .block02',1 , 4);
html_template_01(4, '#section_01 .block03',4 , 5);
html_template_01(4, '#section_01 .block04',5 , 7);
html_template_01(4, '#section_01 .block05',7 , 9);

html_template_01(5, '#section_03 .block01',0 , 1);
html_template_01(5, '#section_03 .block02',1 , 4);
html_template_01(5, '#section_03 .block03',4 , 5);
html_template_01(5, '#section_03 .block04',5 , 7);
html_template_01(5, '#section_03 .block05',7 , 9);

html_template_01(6, '#section_05 .block01',0 , 1);
html_template_01(6, '#section_05 .block02',1 , 4);
html_template_01(6, '#section_05 .block03',4 , 5);
html_template_01(6, '#section_05 .block04',5 , 7);
html_template_01(6, '#section_05 .block05',7 , 9);

html_template_01(7, '#section_06 .block01',0 , 1);
html_template_01(7, '#section_06 .block02',1 , 4);
html_template_01(7, '#section_06 .block03',4 , 5);
html_template_01(7, '#section_06 .block04',5 , 7);
html_template_01(7, '#section_06 .block05',7 , 9);

/* ---------------------------
/* #section_story Swiper
/* --------------------------*/
var section_story_Swiper;

function html_story(dataNum, divID) {
    var html = '';
    for (var i = 0; i < themePD[dataNum].content.length; i++) {
        var item = themePD[dataNum].content[i];
        html += '<div class="swiper-slide">';
        html += '<div class="item">';
        if (item.type === "video"){
            html += '<a title="' + item.alt_1 + '" data-fancybox href="' + item.link_1 + '">';
        }
        if (item.type === "photo"){
            html += '<a title="' + item.alt_1 + '" data-fancybox href="' + item.path + item.link_1 + '">';
        }

        html += '<div class="cell1" data-media=' + item.type + '>';
        html += '<img alt="" src="' + item.path + item.imgL + '">';
        html += '<button>';
        html += '<svg class="fill-current text-eventYellow500" width="45" height="50" viewBox="0 0 45 50" xmlns="http://www.w3.org/2000/svg">';
        html += '<path fill-rule="evenodd" clip-rule="evenodd" d="M41.251 18.4611C46.2496 21.3681 46.2496 28.6319 41.251 31.5389L11.2506 48.9764C6.25122 51.8839 -3.99359e-06 48.2513 -3.74117e-06 42.4376L-2.22699e-06 7.56242C-1.97458e-06 1.74888 6.2508 -1.88365 11.2501 1.02326C11.2503 1.02335 11.25 1.02316 11.2501 1.02326L41.251 18.4611ZM38.7501 22.8201L8.75015 5.38281C7.08447 4.41412 5.00007 5.62389 5.00007 7.56243L5.00007 42.4376C5.00007 44.3761 7.08396 45.5862 8.74964 44.6175L38.7501 27.1799C40.4166 26.2107 40.4166 23.7892 38.7501 22.8201Z""/>';
        html += '</svg>';
        html += '</button>';
        html += '</div>';
        html += '</a>';

        html += '<a title="' + item.alt_2 + '" href="' + item.link_2 + '" target="' + item.target_2 + '">';
        html += '<div class="cell2">';
        html += '<div class="tit"><img src="img/story/item-icon-tit.svg"><span>暖心推薦</span></div>';
        html += '<h5>' + item.name + '</h5>';
        html += '<p>' + item.caption + '</p>';
        html += '<div class="info">';
        html += '<em>' + item.slogan_1 + '</em>';
        html += '<span>' + item.slogan_2 + '</span>';
        html += '<div class="flex justify-between">';
        html += '<button>' + item.sponsor + '→<i></i></button>';
        html += '<b><u>了解更多</u></b>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
    }
    $(divID).html(html);

    //執行 Swiper
    section_story_Swiper = new Swiper('.section_story .swiper-container', {
        effect: "slide",
        loop: true,
        mousewheel: false,
        slidesPerView:'auto',
        spaceBetween:0,
        speed: 1000,
        centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true,
        // },
        navigation: {
            prevEl: '.section_story .swiper-prev',
            nextEl: '.section_story .swiper-next',
        },
    });

}

html_story(2, '#section_story');


/* ---------------------------
/* #section_keyword
/* --------------------------*/
var section_keyword;

function html_keyword(dataNum, divID) {
    var html = '';
    for (var i = 0; i < themePD[dataNum].content.length; i++) {
        var item = themePD[dataNum].content[i];
        html+='<a class="tag" title="' + item.alt + '" href="' + item.link + '" target="' + item.target + '">' + item.name + '</a>';
    }
    $(divID).html(html);


}

html_keyword(3, '#section_keyword');


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

    $("#menubtn").on("click",function(event){
        event.preventDefault();
        // $(this).toggleClass("open");
        $("#sitemenu").addClass("open");
        $("body").addClass("menuopen");
    });

    $("#closebtn").on("click",function(event){
        event.preventDefault();
        $("#sitemenu").removeClass("open");
        $("body").removeClass("menuopen");
    });

    $("#gotopBox").on("click",function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    });


