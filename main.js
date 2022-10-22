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

//공지사항 탭 메뉴
var tabMenu = $(".notice");

//컨텐츠 내용을 숨겨주세요!
tabMenu.find("ul > li > ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e) {
  e.preventDefault(); //#의 기능을 차단
  var target = $(this);
  target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
  //버튼을 클릭하면 ~ul를 보여주고
  //부모의 li태그에 클래스 추가하고
  //형제의 li태그에 클래스 제거하고
  //제거한 자식의 ul 태그를 숨겨줌
}

tabMenu.find("ul > li > a").click(tabList).focus(tabList);
