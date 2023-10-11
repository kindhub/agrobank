import Countup from "./custom_modules/Countup";
import VacancyBtn from "./modules/VacancyBtn";
import citySelector from "./custom_modules/CitySelector";
import VSwiper from "./modules/VSwiper";
import Content from "./modules/Content";

function initWeSlider() {
  swiper.init(".tmpl-hh__we__slider", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__we-slider-arrow-prev",
      nextEl: ".tmpl-hh__we-slider-arrow-next",
    },
  });
}

function initWeSliderUz() {
  swiper.init(".tmpl-hh__we__slider-uz", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__we-slider-uz-arrow-prev",
      nextEl: ".tmpl-hh__we-slider-uz-arrow-next",
    },
  });
}

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

const scrollElements = document.querySelectorAll(".tmpl-hh__about");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      new Countup(".tmpl-hh__about");
    }
  });
};

if (window.innerWidth < 529) {
  new Countup(".tmpl-hh__about");
} else {
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}

const scrollElements2 = document.querySelectorAll(".tmpl-hh__about--uz");
const elementInView2 = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const handleScrollAnimation2 = () => {
  scrollElements2.forEach((el) => {
    if (elementInView2(el, 1.25)) {
      new Countup(".tmpl-hh__about--uz");
    }
  });
};

if (window.innerWidth < 529) {
  new Countup(".tmpl-hh__about--uz");
} else {
  window.addEventListener("scroll", () => {
    handleScrollAnimation2();
  });
}

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */
const lgBtns = document.querySelectorAll(".tmpl-hh__first-screen__lg");
const lgImgs = document.querySelectorAll(".tmpl-hh__first-screen__lg-img");

lgBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("tmpl-hh__active");
    lgImgs.forEach((img) => {
      img.classList.toggle("tmpl-hh__up");
    });
  });
});

new Content();
new VacancyBtn();
const swiper = new VSwiper();
initWeSlider();
initWeSliderUz();
citySelector.init();
