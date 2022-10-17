// 배너 이미지 슬라이드
var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

// 영화차트 이미지 슬라이드
var swiper = new Swiper(".swiper-container2", {
  slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// 영화차트 탭 메뉴

const movBtn = $(".movieTitle > ul > li");
const movCont = $(".movieChart>div");

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  const target = $(this);
  const index = target.index();
  // alert(index);
  movBtn.removeClass("active");
  target.addClass("active");
  movCont.css("display", "none");
  movCont.eq(index).css("display", "block");
});
