// -----  基本功能開關   ---------------------------------------------------
topNav(); // 手機版顯示nav選單
navSticky(); // 捲動時固定主選單
fatFooter(); // fatFooter是否要展開
tabFunction('.tabSet'); // tab功能
scrollTables('table'); // table捲動功能

mobileSearch();

tableAddDataAttributes({
  elemClass: '.tableList', // 目標table
  dataName: 'title', // tableList樣式 加上 data-title
});

// 全站字體
fontSize();

// 手風琴功能
accordionFunction({
  accordion: '.accordion',
  openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
  autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
  duration: 200,
  info: {
    open: '展開', // 收合時顯示
    close: '收合', // 展開時顯示
  },
});

// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });
})();

//bannerSlider
const bannerSlider = new Swiper('.bannerSlider .swiper', {
  slidesPerView: 1, //顯示張數
  navigation: {
    nextEl: '.bannerSlider .nextSlider.swiperArrow', //下一張class，無障礙設定關係需要增加.nextSlider
    prevEl: '.bannerSlider .prevSlider.swiperArrow', //前一張class，無障礙設定關係需要增加.prevSlider
  },
  pagination: {
    //顯示圓點
    el: '.bannerSlider .swiperDots', //圓點 class
    type: 'bullets', //樣式參考 https://www.swiper.com.cn/api/pagination/299.html
    clickable: true, //設定後圓點才可以點擊
  },
  autoplay: {
    //自動播放
    delay: 5000, //自動播放的間隔
  },
  loop: true, //無限輪播
  effect: 'fade', //淡入
  fadeEffect: {
    crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
  },
  lazy: true,
});

//tabSet
function tabFunction(elem) {
  const activeClass = 'active'; // --- 啟動的 class
  const tabSet = document.querySelectorAll(elem); // --- tab名稱
  tabSet.forEach((a) => {
    const tabBtn = a.querySelectorAll('.tabItems button'); // --- 頁籤按鈕
    const tabBtnLength = tabBtn.length; // --- 頁籤按鈕數量
    const tabContent = a.querySelectorAll('.tabContentGroup .tabContent'); // --- 頁籤內容
    tabBtn[0].classList.add('active');
    tabContent[0].classList.add('active');
    tabBtn.forEach((v, i) => {
      const thisBtn = tabBtn[i]; // --- 綁定這一個頁籤按鈕
      const thisContent = tabContent[i]; // --- 綁定這一個頁籤內容
      const thisPrevItem = tabContent[i - 1]; // --- 綁定前一個頁籤按鈕
      const itemAllA = thisContent.querySelectorAll('[href], input'); // --- 這一個頁籤內容所有a和input項目
      let prevItemAllA;
      if (thisPrevItem !== undefined) {
        prevItemAllA = thisPrevItem.querySelectorAll('[href], input'); // --- 前一個頁籤內容所有a和input項目
      }
      const isFirstTab = i === 0; // --- 如果是第一個頁籤
      const isLastTab = i === tabBtnLength - 1; // --- 如果是最後一個頁籤
      const itemFirstA = itemAllA[0]; // --- 頁籤內容第一個a或是input
      const itemLastA = itemAllA[itemAllA.length - 1]; // --- 頁籤內容最後一個a或是input
      let prevItemLastA;
      if (thisPrevItem !== undefined) {
        prevItemLastA = prevItemAllA[prevItemAllA.length - 1]; // --- 前一個頁籤的最後一個a或是input
      }
      // --- thisBtn頁籤觸發focus內容裡的第一個a
      thisBtn.addEventListener('keydown', (e) => {
        // --- 頁籤第幾個按鈕觸發時
        if (e.which === 9 && !e.shiftKey) {
          // --- e.which偵測按下哪個案件，9代表tab，shiftKey代表shift
          e.preventDefault();
          startTab(i, tabBtn, tabContent); // --- 啟動頁籤切換功能
          if (itemAllA.length) {
            // --- type number = true，0是false
            itemFirstA.focus(); // --- 第一個a或是input focus
          } else {
            tabBtn[i + 1].focus(); // --- 當內容沒有a或是input跳轉下一個tab
          }
        } else if (e.which === 9 && e.shiftKey && !isFirstTab) {
          e.preventDefault();
          startTab(i - 1, tabBtn, tabContent); // --- 啟動頁籤切換功能
          if (prevItemAllA.length) {
            prevItemLastA.focus(); // --- 前一個頁籤內容的最後一個a或是input focus
          } else {
            tabBtn[i - 1].focus(); // --- 當內容沒有a或是input跳轉上一個tab
          }
        }
      });
      // --- 當按下shift+tab且為該內容的第一個a或是input
      // --- 將focus目標轉回tab頁籤上，呼叫上方功能startTab(i - 1);往前一個頁籤
      if (itemFirstA !== undefined) {
        itemFirstA.addEventListener('keydown', (e) => {
          if (e.which === 9 && e.shiftKey) {
            e.preventDefault();
            tabBtn[i].focus();
          }
        });
      }
      // --- 當按下tab且為該內容的最後一個a或是input
      // --- focus到下一個頁籤
      if (itemLastA !== undefined) {
        itemLastA.addEventListener('keydown', (e) => {
          if (e.which === 9 && !e.shiftKey && !isLastTab) {
            e.preventDefault();
            tabBtn[i + 1].focus();
          }
        });
      }
      // --- 滑鼠點擊事件
      tabBtn[i].addEventListener(
        'click',
        (e) => {
          startTab(i, tabBtn, tabContent);
        },
        false
      );
    });
  });
  function startTab(now, tabBtn, tabContent) {
    if (tabBtn !== undefined) {
      tabBtn.forEach((i) => {
        i.classList.remove(activeClass);
      });
      tabBtn[now].classList.add(activeClass);
      // --- 頁籤按鈕增加指定class(active)，其他頁籤移除指定class
      tabContent.forEach((i) => {
        i.classList.remove(activeClass);
      });
      tabContent[now].classList.add(activeClass);
      // --- 顯示當下頁籤內，隱藏其他內容
    }
  }
}
tabFunction('.tabSet'); // tab功能

//albumSlider
//無障礙pagination設定，不同的swiper命名要變更
let albumSliderItem = document.querySelectorAll('.albumSlider .swiper-slide');
let albumSliderPagination = [];
albumSliderItem.forEach((item, index) => {
  albumSliderPagination.push(item.dataset.title);
});

const albumSlider = new Swiper('.albumSlider .swiper', {
  slidesPerView: 1, //顯示筆數
  spaceBetween: 20, //每筆之間的距離
  navigation: {
    nextEl: '.albumSlider .nextSlider', //下一筆class，無障礙設定關係需要增加.nextSlider
    prevEl: '.albumSlider .prevSlider', //前一筆class，無障礙設定關係需要增加.prevSlider
    disabledClass: 'swiperArrow-disabled', //不可點選樣式
  },
  pagination: {
    //顯示圓點
    el: '.albumSlider .swiperDots', //圓點 class
    type: 'bullets', //樣式參考 https://www.swiper.com.cn/api/pagination/299.html
    clickable: true, //設定後圓點才可以點擊
    //無障礙pagination設定
    renderBullet: function (index, className) {
      return `<button class="${className} noFonts" aria-label="${albumSliderPagination[index]}">${albumSliderPagination[index]}</button>`;
    },
  },
  autoplay: {
    //自動播放
    delay: 5000, //自動播放的間隔
  },
  loop: true, //無限輪播
  effect: 'fade', //淡入
  fadeEffect: {
    crossFade: true, //上一筆淡出，false上一筆不淡出，下一筆疊在上方
  },
  lazy: true,
});

//
//videoSlider
//無障礙pagination設定，不同的swiper命名要變更
let videoSliderItem = document.querySelectorAll('.videoSlider .swiper-slide');
let videoSliderPagination = [];
videoSliderItem.forEach((item, index) => {
  videoSliderPagination.push(item.dataset.title);
});

const videoSlider = new Swiper('.videoSlider .swiper', {
  slidesPerView: 1, //顯示筆數
  spaceBetween: 20, //每筆之間的距離
  navigation: {
    nextEl: '.videoSlider .nextSlider', //下一筆class，無障礙設定關係需要增加.nextSlider
    prevEl: '.videoSlider .prevSlider', //前一筆class，無障礙設定關係需要增加.prevSlider
    disabledClass: 'swiperArrow-disabled', //不可點選樣式
  },
  pagination: {
    //顯示圓點
    el: '.videoSlider .swiperDots', //圓點 class
    type: 'bullets', //樣式參考 https://www.swiper.com.cn/api/pagination/299.html
    clickable: true, //設定後圓點才可以點擊
    //無障礙pagination設定
    renderBullet: function (index, className) {
      return `<button class="${className} noFonts" aria-label="${videoSliderPagination[index]}">${videoSliderPagination[index]}</button>`;
    },
  },
  autoplay: {
    //自動播放
    delay: 5000, //自動播放的間隔
  },
  loop: true, //無限輪播
  effect: 'fade', //淡入
  fadeEffect: {
    crossFade: true, //上一筆淡出，false上一筆不淡出，下一筆疊在上方
  },
  lazy: true,
});

//燈箱

/*-----------------------------------*/
/////////////modal設定/////////////
/*-----------------------------------*/
// $(function () {
//   $('#modal1').hide(); //先隱藏視窗
//   $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
//   $('.modal').prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
//   $('.modal_overlay').hide(); //隱藏透明底
//   //按鈕動作
//   $('#openModal').click(function (e) {
//     $('.modal_overlay').fadeIn(100);
//     $('.modal').fadeIn(100);
//     $('body').addClass('noscroll');
//     e.preventDefault();
//   });
//   //關閉function
//   function closeModal() {
//     $('#modal1').hide();
//     $('.modal_overlay').hide();
//     $('body').removeClass('noscroll');
//   }
//   //點選關閉按鈕及透明底都可關閉
//   $('.modal_overlay').click(closeModal);
//   $('.modal .close').click(closeModal);
// });

//pageSearch
(function () {
  const pageSearchBtn = document.querySelector('.pageSearchBtn');
  const pageSearchBox = document.querySelector('#pageSearchBox');
  pageSearchBtn?.addEventListener('click', () => {
    window.getComputedStyle(pageSearchBox).display === 'none' ? (pageSearchBox.style.display = 'block') : (pageSearchBox.style.display = 'none');
  });
})();

//sLinkBtn
(function () {
  const sLinkBtn = document.querySelector('.sLinkBtn');
  const sLinkBox = document.querySelector('#sLinkBox');
  sLinkBtn?.addEventListener('click', () => {
    window.getComputedStyle(sLinkBox).display === 'none' ? (sLinkBox.style.display = 'block') : (sLinkBox.style.display = 'none');
  });
})();
//sLink
// 定義一個變數，用來存放目前開啟的選單項目
var currentMenu = null;

// 當選單項目被點擊時
$('.sLink li a').on('click', function () {
  // 將選單項目的子選單顯示或隱藏
  $(this).next('ul').toggle();

  // 當目前開啟的選單項目不是被點擊的選單項目時
  if (currentMenu !== this) {
    // 將目前開啟的選單項目向上close
    $('.sLink li.current').removeClass('current').next('ul').hide();

    // 將被點擊的選單項目設定為目前開啟的選單項目
    $(this).addClass('current');
  }
});

//people
$(function () {
  var _list = $('.people_list');
  var i = 9; //不隱藏的個數

  _list.each(function () {
    var _slideItem = $(this).find('li').slice(i);
    var _more = $(this).find('.more');
    var moreText = _more.text();
    var altText = '向上收合';

    _more.click(function () {
      if (_slideItem.is(':hidden')) {
        _slideItem.slideDown();
        _more.text(altText);
      } else {
        _slideItem.slideUp();
        _more.text(moreText);
      }
    });
  });
});

//Closable
// 當使用者點擊清單項目時，顯示刪除按鈕
$('.closable-list li').on('click', function () {
  $(this).find('.delete').show();
});

// 當使用者點擊刪除按鈕時，刪除清單項目
$('.closable-list .delete').on('click', function () {
  $(this).closest('li').remove();
});
//themeMenu
// 定義一個變數，用來存放目前開啟的選單項目
var currentMenu = null;

// 當選單項目被點擊時
$('.themeMenu li a').on('click', function () {
  // 將選單項目的子選單顯示或隱藏
  $(this).next('ul').toggle();

  // 當目前開啟的選單項目不是被點擊的選單項目時
  if (currentMenu !== this) {
    // 將目前開啟的選單項目向上close
    $('.themeMenu li.current').removeClass('current').next('ul').hide();

    // 將被點擊的選單項目設定為目前開啟的選單項目
    $(this).addClass('current');
  }
});

//左邊滑出選單
// function toggleMenu() {
//   var menuContainer = document.getElementById('menu-container');
//   if (menuContainer.style.display === 'none') {
//     menuContainer.style.display = 'block';
//   } else {
//     menuContainer.style.display = 'none';
//   }
// }

// document.getElementById('menu-button').addEventListener('click', toggleMenu);
