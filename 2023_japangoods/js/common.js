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
	var swiper2 = new Swiper('#swiper-new2 .swiper-container', {
		loop: true,
		mousewheel: false,
		observer: true, //修改swiper自己或子元素的時候，自動初始化swiper
		observeParents: true, //修改swiper的父元素時，自動初始化swiper
		speed: 800,
		autoplay: {
			delay: 2800,
			disableOnInteraction: false,
		},
		pagination: {
			el: '#swiper-new2 .swiper-pagination',
		},
		navigation: {
			nextEl: '#swiper-new2 .swiper-button-next',
			prevEl: '#swiper-new2 .swiper-button-prev',
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
	}, 800);
	
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