const timeInMs = Date.now();
const dataNum = 'C858561752';
const dataURL = 'https://shopping.pchome.com.tw/cdn/activity/campaign/' + dataNum + '/data?v' + timeInMs;
const dataScript = document.createElement('script');
dataScript.type = 'text/javascript';
dataScript.src = dataURL;
document.getElementsByTagName('head')[0].appendChild(dataScript);

//讀取後台資料並重組資料格式
let dataArr = {}
function toDataArr (arr){
	arr.forEach(function(item){
		dataArr[item.BlockId] = item
	})
}

//計算區塊實際資料 (因IndexBlock資料中有空白陣列)
function dataNode(data, blockNumFirst, blockNumLast) {
	for(let i=blockNumFirst; i<=blockNumLast; i++){
		if(dataArr[i]){
			dataArr[i].Nodes.forEach(function(node){
				if(node.Img.Src){
					data.push(node)
				}
			})
		}
	}
}

// 計算選單資料
function dataObjNodeMenu(data, blockNumFirst, blockNumLast) {
	for(let i=blockNumFirst; i<=blockNumLast; i++){
		if(dataArr[i]){
			dataArr[i].Nodes.forEach(function(objNode){
				if(objNode.Link.Url){
					data.push(objNode)
				}
			})
		}
	}
}

//插入選單DOM 
function insertMenu(webTargetDom, appTargetDom, goMainIcon) {
	//for Web
	let newArr = [];
	let newArr2 = [];
	let webHtmlImg = '';
	let webHtmlList = '';
	let webHtmlGoMain = '';
	//for APP
	let appHtmlList = '';
	let appHtmlGoMain = '';
	// data
	dataObjNodeMenu(newArr, 143, 144)
	dataObjNodeMenu(newArr2, 357, 360)
	newArrAll = Object.assign([], newArr, newArr2);
	// console.log(newArrAll);
	// 無選單隱藏
	(newArrAll.length > 0) ? ( inHtml() ) : ( document.querySelector('.left_menu').classList.add('hide') );
	function inHtml() {
		// 主會場小圖
		webHtmlImg = ` 
					<li class="banner head">
						<a href="`+ newArrAll[0].Link.Url +`">
							<img src="`+ newArrAll[0].Img.Src +`" class="d-block">
						</a>
					</li>
					<li class="subtitle"><dt>特色分會場</dt></li>`
	
		// 分會場
		for (let i = 2; i < newArrAll.length; i++) {
			if (newArrAll[i].Img.Src == "") {
				// (web)分會場list
				webHtmlList +=`
					<li>
						<a href="`+ newArrAll[i].Link.Url +`">`+ newArrAll[i].Link.Text +`</a>
					</li> `
			} else {
				// (web)推薦分會場list
				webHtmlList +=` 
					<li class="act_evt">
						<a href="`+ newArrAll[i].Link.Url +`">
							<img src="`+ newArrAll[i].Img.Src +`" class="d-block">
						</a>
					</li> `
			}
			// (app)分會場all list
			appHtmlList +=`<li class="col-4"><a href="`+ newArrAll[i].Link.Url +`">`+ newArrAll[i].Link.Text +`</a</li> `
		}
	
		// (web)返回主會場
		webHtmlGoMain =`<li class="act_home"><a href="`+ newArrAll[0].Link.Url +`">返回主會場</a></li>`
		// (web)輸出html
		document.querySelector(webTargetDom).innerHTML = webHtmlImg + webHtmlList + webHtmlGoMain
		// (app)返回主會場
		appHtmlGoMain =`<a href="`+ newArrAll[0].Link.Url +`"><span class="txt"><span class="ico ico-star"></span>主會場</span></a>`
		// (app)輸出html
		document.querySelector(appTargetDom).innerHTML = appHtmlList
		document.querySelector(goMainIcon).innerHTML = appHtmlGoMain
	}
}

// 側選單輪播
function insertSmallBn(blockNumFirst1, blockNumLast1, targetDom){
    let html = '';
    let newArr = [];
	dataNode(newArr, blockNumFirst1, blockNumLast1);
	// console.log(newArr.length);
	(newArr.length > 0) && (inHtml());
	function inHtml() {
		newArr.forEach(function (item) {
			html += `
					<li class="swiper-slide">
						<a href="`+ item.Link.Url +`" target="_blank">
							<div class="pic"><img src="`+ item.Img.Src +`" class="d-block"></div>
						</a>
					</li> `
		});
		document.querySelector(targetDom).innerHTML = html;
	}

	// 輪播控制, 2卡以上autoplay
	setTimeout(() => {
		let domName = '#smallBn';
		let ifOneList = document.querySelectorAll(domName +' li').length>1;
		let smallbn = new Swiper(domName, {
			autoplay: ifOneList,
			allowTouchMove: ifOneList,
			speed: 600,
			loop: true,
			effect : 'fade',
			fadeEffect: {
				crossFade: true,
			},
		});
	}, 800);
}

//插入版身商品DOM
function insertPD(blockNumFirst1, blockNumLast1, targetDom){
    let html = '';
    let newArr = [];
	dataNode(newArr, blockNumFirst1, blockNumLast1);
	// console.log(newArr.length);
	(newArr.length > 0) && (inHtml());
	function inHtml() {
		newArr.forEach(function (item) {
			// 原價是否有內容 ture:false
			let LinkText3 = "";
			(item.Link.Text3 == "") ? 
				LinkText3 = "" : LinkText3 = '$'+item.Link.Text3;
				html += `
					<li>
						<a href="`+ item.Link.Url +`" target="_blank">
							<i><img src="`+ item.Img.Src +`" /></i>
							<h4 class="ribbon bg-5">`+ item.Link.Text2 +`</h4>
							<p>`+ item.Link.Text +`</p>
							<span class="price"><s>`+ LinkText3 +`</s>$<strong>`+item.Link.Text1 +`</strong></span>
						</a>
					</li> `
					
		});
	}
    document.querySelector(targetDom).innerHTML = html;
}

// 插入版身banner DOM (圖+連結)
 function insertbodyBN(blockNumFirst1, blockNumLast1, targetDom){
     let html = '';
     let newArr = [];
 	dataNode(newArr, blockNumFirst1, blockNumLast1);
 	// console.log(newArr.length);
 	(newArr.length > 0) && (inHtml());
 	function inHtml() {
 		newArr.forEach(function (item) {
 			html += `
 			<div class="col-6 col-md-3 hoversacle p-1 p-xl-2"><a href="`+ item.Link.Url +`" target="_blank"><img
 								class="w-100" src="`+ item.Img.Src +`"></a></div>`
 		});
 	}
     document.querySelector(targetDom).innerHTML = html;
 }

//插入強打輪播 DOM
function insertMainSlider(blockNumFirst1, blockNumLast1, targetDom){
    let html = '';
    let newArr = [];
	dataNode(newArr, blockNumFirst1, blockNumLast1);
	(newArr.length > 0) && (inHtml());
	function inHtml() {
		newArr.forEach(function (item, index) {
			html += `<li class="swiper-slide">
					<a href="`+ item.Link.Url +`">
					<div class="imgBx"><img src="`+ item.Img.Src +`"></div>
					<div class="imgBx-subtit">`+ item.Link.Text2 +`</div>
					<div class="info">
						<h3>`+ item.Link.Text +`</h3>
						<span class="price">$<strong>`+item.Link.Text1 +`</strong></span>
					</div></a>
				</li>`
		});
	}
    document.querySelector(targetDom).innerHTML = html;

	// 確認載入輪播圖，才會啟動輪播功能，避免版頭壞掉or卡住 
	// 請注意輪播的 class ID是否相符(#manSlider)
	const images = document.querySelectorAll(targetDom+' img');
	console.log(images);
	(images.length > 0) && (intro());
	function intro() {
		setTimeout(() => {
			var mainSwiperWeb = new Swiper('#mainSlider .swiper-container', {
				slidesPerView: 5,
				spaceBetween: 0,
				centeredSlides: true,
				loop: true,
				mousewheel: false,
				observer: true, //修改swiper自己或子元素的時候，自動初始化swiper
				observeParents: true, //修改swiper的父元素時，自動初始化swiper
				speed: 800,
				
				on: {
					transitionEnd: function(){
							this.params.mousewheel.releaseOnEdges = this.isEnd;
					}
				},
				autoplay: {
					delay:1112800,
					disableOnInteraction: false,
				},
				pagination: {
					el: '#mainSlider .swiper-pagination',
				},
				navigation: {
					nextEl: '#mainSlider .swiper-button-next',
					prevEl: '#mainSlider .swiper-button-prev',
				},
			});
		}, 1000);
	}
}


window.onload = function() {
	// 接資料
	toDataArr(IndexBlock);
	// 主分會場選單
	insertMenu('.left_menu .menu_box', '#appSubList', '#appMainIcon')
	// 右側選單小貼紙
	//  insertSmallBn(29,52, '#smallBn>ul')

	// 強打輪播
	 insertMainSlider(30,39, '#mainSlider ul');
	// 第二個輪播
	 // insertMainSlider(42,51, '#swiper-new2 ul');
	// banner
	insertbodyBN(42,51, '#pd_bn');
	// 商品
	insertPD(53,62, '#pd_brand');
	insertPD(64,73, '#pd_01');
	insertPD(220,229, '#pd_02');
    insertPD(231,240, '#pd_03');
	insertPD(242,251, '#pd_04');
	insertPD(87,96, '#pd_05');
    insertPD(99,108, '#pd_06');
	insertPD(110,119, '#pd_07');
};