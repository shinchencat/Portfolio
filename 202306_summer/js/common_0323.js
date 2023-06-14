// web側選單控制
function webMenu() {
	let webMenuBtn = document.querySelectorAll('.arrow_box')
	webMenuBtn.forEach((item) => {
		item.onclick = function() {
			this.parentNode.classList.toggle('go--act');
		}
	});
}

// app上選單
function appTopMenu() {
	let appNavBtn = document.querySelector('.nav_btn')
	let appTopListOpen = document.querySelector('.right_menu')
	appNavBtn.onclick = function() {
		this.classList.toggle('go--act');
		appTopListOpen.classList.toggle('go--act');
	};
}

// app下選單控制
function appMenu() {
	// 分會場
	let appMenuBtn = document.querySelector('.more_btn')
	let subList = document.querySelector('.subBox_app')
	appMenuBtn.onclick = function() {
		// 選單滑上
		subList.classList.toggle('go--act');
		mask();
	};

	// app 追蹤我們
	let appFollowBtn = document.querySelector('.btn_follow')
	let followBox = document.querySelector('.followBox_app')
	appFollowBtn.onclick = function() {
		// 選單滑上
		followBox.classList.toggle('go--act');
		mask()
	}

	// 遮罩&關閉
	function mask() {
		// 取得外層容器
		let box = document.querySelector('.app_menu');
		// 在容器內創建遮罩
		let newDiv = document.createElement('div');
		newDiv.id = "newMask";
		newDiv.className = "btn_sub";
		box.appendChild(newDiv);

		// 關閉
		document.querySelector('#newMask').onclick = function() {
			// 刪除創建的遮罩
			this.parentElement.removeChild(this);
			// 選單滑下
			followBox.classList.remove('go--act');
			subList.classList.remove('go--act');
		}
	}
}

//各種輪播
function allSlider() {
	document.querySelector('.loading_mask').classList.add('fadeOut');
	// 版頭輪撥 在filterData調整
	// 第二個以上的輪播，如有新增輪播，請加在此區往下加
	var brandtab = new Swiper("#brandtab", {
		spaceBetween: 0,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper('#brendslide .swiper-container', {
		loop: true,
		mousewheel: false,
		observer: true, //修改swiper自己或子元素的時候，自動初始化swiper
		observeParents: true, //修改swiper的父元素時，自動初始化swiper
		speed: 800,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '#brendslide .swiper-pagination',
		},
		navigation: {
			nextEl: '#brendslide .swiper-button-next',
			prevEl: '#brendslide .swiper-button-prev',
		},
		thumbs: {
			swiper: brandtab,
		},
	});


}

document.addEventListener('DOMContentLoaded', function(event) { 
	// web側選單控制
	webMenu();
	// app上選單控制
	appTopMenu();
	// app下選單控制
	appMenu();

	setTimeout(function () {
		AOS.init();
		// 各種輪播
		allSlider();
		
		// hashtag Smooth scrolling
		// 搭配css (scroll-padding-top)
		document.querySelectorAll('.scrollto[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth',
					block: "start",
				});
			});
		});

		// 如果a連結的href為#就移除target
		let getLink_b = document.querySelectorAll('a[href^="#"]'); 
		getLink_b.forEach(function (item) {
			item.removeAttribute('target');
		});

		// 如果a連結的href為空值(#no)就移除href
		let getLink_a = document.querySelectorAll('a'); 
		getLink_a.forEach(function (item) {
			if (item.getAttribute('href') == '#no') {
				// console.log('移除href');
				item.removeAttribute('target');
				item.removeAttribute('href')
			}
		});
	}, 1500);
	
	// 網址有hashtag錨點
	let hashTag = location.hash;
	if (hashTag != '') {
		console.log(hashTag);
		setTimeout(() => {
			const myElement = document.querySelector(hashTag);
			myElement.scrollIntoView();
		}, 1300);
	} 
});


//新增的動畫


// gsap.from(".kv-bigbg", {
//     scrollTrigger: ".kv-bigbg", // 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
//     duration:3,
//     scale: 2
// });


// document.addEventListener("DOMContentLoaded", function() {


//.play-smile
// 	gsap.from(".play-smile", {
// scrollTrigger: {
//   trigger: ".play-smile",
//   start: "top 90%", // 修改为top 70%
//   end: "bottom 30%",
//   scrub: true,
// },
// opacity: 0,
// duration: 1,
// y: -100, // 修改为Y方向向上位移100
// rotation: 720 // 修改为旋转两圈（720度）
// });
// //.play-smile2
// gsap.from(".play-smile2", {
// scrollTrigger: {
//   trigger: ".play-smile2",
//   start: "top 80%", // 修改为top 70%
//   end: "bottom 30%",
//   scrub: true,
// },
// opacity: 0,
// duration: 1,
// y: -100, // 修改为Y方向向上位移100
// rotation: 720 // 修改为旋转两圈（720度）
// });
// //.cont-bar-right
// gsap.from(".cont-bar-right", {
// 	scrollTrigger: {
// 	  trigger: ".cont-bar-right",
// 	  start: "top 100%", // 修改为top 70%
// 	  end: "bottom 30%",
// 	  scrub: true,
// 	},
// 	duration: 3,
// 	yPercent: 80
// 	});
// //.cont-bar-left
// gsap.from(".cont-bar-left", {
// 	scrollTrigger: {
// 	  trigger: ".cont-bar-left",
// 	  start: "top 100%", // 修改为top 70%
// 	  end: "bottom 30%",
// 	  scrub: true,
// 	},
// 	duration: 3,
// 	yPercent: 80
// 	});
// });