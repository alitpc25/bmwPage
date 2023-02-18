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
  slidesPerView: 'auto',
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
  loop: true,
  noSwiping: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function newImg(e){
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];

  img.src = "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (1).png"
  img.style.width="95%";
  content.style.background = "linear-gradient(180deg, #A74725 0%, #5D0F05 100%)";
}
function oldImg(e){
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];
  img.src = "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1.png"
  img.style.width="90%";
  content.style.background = "#F8F8F8";
}