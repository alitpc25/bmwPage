const sidebar = document.getElementById("mySidebar");

function openNav() {
  sidebar.style.width = "100%";
}

function closeNav() {
  sidebar.style.width = "0";
}

const parentSwiper = new Swiper('.parent-slider', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 18,
  noSwiping: true,
  centeredSlides: true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 50 | "auto"
  },
});


const childSwiper = new Swiper(".child-slider", {
  direction: 'horizontal',
  slidesPerView: 1,
  noSwiping: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function newImg(e){
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];
  img.src = "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (1).png"
}
function oldImg(e){
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];
  img.src = "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1.png"
}