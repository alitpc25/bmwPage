const sidebar = document.getElementById("mySidebar");
const parentSwiperWrapper = document.getElementById("parent-swiper-wrapper");

const datas = [
  {
    model: "i4",
    types: [
      {
        type: "i4 eDrive40 – M Sport",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1.png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (1).png",
        mouseOverBackground: "linear-gradient(180deg, #A74725 0%, #5D0F05 100%)",
        title: "Yeni BMW i4",
        text: "i4 eDrive40 - M Sport",
        powerOutput: {
          kW: 250,
          hp: 340
        },
        rangeInMiles: {
          min: 337.4,
          max: 352.3
        },
        milesPerKwh: 3.7
      },
      {
        type: "i4 M50",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (2).png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 2.png",
        mouseOverBackground: "linear-gradient(180deg, #17265E 0%, #03091C 100%)",
        title: "Yeni BMW i4",
        text: "i4 M50",
        powerOutput: {
          kW: 400,
          hp: 544
        },
        rangeInMiles: {
          min: 258.5,
          max: 318.8
        },
        milesPerKwh: 3.4
      }
    ]
  },
  {
    model: "i7",
    types: [
      {
        type: "i7 xDrive60 M Sport",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (4).png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (3).png",
        mouseOverBackground: "linear-gradient(180deg, #A2A09B 0%, #7B7772 100%)",
        title: "Yeni BMW i7",
        text: "i7 xDrive60 M Sport",
        powerOutput: {
          kW: null,
          hp: 544
        },
        rangeInMiles: {
          min: 366.0,
          max: 384.0
        },
        milesPerKwh: 3.3
      }]
  },
  {
    model: "iX1",
    types: [
      {
        type: "iX1 xLine",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (5).png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (6).png",
        mouseOverBackground: "linear-gradient(180deg, #193F63 0%, #061728 100%)",
        title: "Yeni BMW iX1",
        text: "İX1 xLine",
        powerOutput: {
          kW: null,
          hp: 313
        },
        rangeInMiles: {
          min: 259.0,
          max: 270.0
        },
        milesPerKwh: 3.7
      }]
  },
  {
    model: "iX3",
    types: [
      {
        type: "iX3 M Sport",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (7).png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (8).png",
        mouseOverBackground: "linear-gradient(180deg, #193F63 0%, #061728 100%)",
        title: "Yeni BMW iX3",
        text: "iX3 M Sport",
        powerOutput: {
          kW: null,
          hp: 313
        },
        rangeInMiles: {
          min: 259.0,
          max: 270.0
        },
        milesPerKwh: 3.7
      }]
  },
  {
    model: "iX",
    types: [
      {
        type: "iX xDrive40 M Sport",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (9).png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (10).png",
        mouseOverBackground: "linear-gradient(180deg, #5E5E5E 0%, #1A1A1A 100%)",
        title: "Yeni BMW iX",
        text: "iX xDrive40 M Sport",
        powerOutput: {
          kW: null,
          hp: 326
        },
        rangeInMiles: {
          min: 247.0,
          max: 249.0
        },
        milesPerKwh: 3.0
      },
      {
        type: "iX xDrive50 M Sport",
        mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (9).png",
        mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (11).png",
        mouseOverBackground: "linear-gradient(180deg, #7C2F37 0%, #450109 100%)",
        title: "Yeni BMW iX",
        text: "iX xDrive50 M Sport",
        powerOutput: {
          kW: null,
          hp: 523
        },
        rangeInMiles: {
          min: 365.0,
          max: 369.0
        },
        milesPerKwh: 2.9
      },
    ]
  }
]

const showAllModelsFunc = () => {
  const parentSwiper = new Swiper('.parent-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 18,
    noSwiping: true,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
			clickable: true,
    },
  });

  parentSwiperWrapper.innerHTML = datas.map(data => {
    return (`
    <div class="swiper-slide parent-swiper-slide">
        <div class="swiper child-slider">
            <div id=${data.model} class="swiper-wrapper">
            </div>
            ${data.types.length > 1 ?
        `<div class="swiper-button-prev"><i><img src="assets/icons/Path.svg" style="rotate:180deg"></i></div>
              <div class="swiper-button-next"><i><img src="assets/icons/Path.svg"></i></div>` : ``
      }
            
        </div>
    </div>
    `)
  }).join('')

  const childSwiper = new Swiper(".child-slider", {
    direction: 'horizontal',
    noSwiping: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  datas.map(data => {
    document.getElementById(data.model).innerHTML =
      data.types.map(item => {
        return (`
        <div id="${item.type}" class="swiper-slide child-swiper-slide" onmouseover="onMouseOverCard(this)" onmouseout="onMouseOutCard(this)">
          <div class="slide-content">
              <div class="slide-texts">
                  <h2 class="slide-title">${item.title}</h2>
                  <p class="slide-text">${item.text}</p>
              </div>
              <img src="${item.mouseOutImage}" class="slide-img">
          </div>
          <div class="select-model-button">
              <button><i><img src="assets/icons/Vector.svg"></i><span>Bu modeli seç</span></button>
          </div>
        </div>
        `)
      }).join("")
  })
}

const showOneModelFunc = (types) => {
  const parentSwiper = new Swiper('.parent-slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 18,
    noSwiping: true,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
			clickable: true,
    },
  });

  const childSwiper = new Swiper(".child-slider", {
    direction: 'horizontal',
    noSwiping: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  parentSwiperWrapper.innerHTML = types.map(item => {
    return (`
    <div class="swiper-slide parent-swiper-slide">
        <div class="swiper child-slider">
            <div id=${item.model} class="swiper-wrapper">
              <div id="${item.type}" class="swiper-slide child-swiper-slide" onmouseover="onMouseOverCard(this)" onmouseout="onMouseOutCard(this)">
                <div class="slide-content">
                    <div class="slide-texts">
                        <h2 class="slide-title">${item.title}</h2>
                        <p class="slide-text">${item.text}</p>
                    </div>
                    <img src="${item.mouseOutImage}" class="slide-img">
                </div>
                <div class="select-model-button">
                    <button><i><img src="assets/icons/Vector.svg"></i><span>Bu modeli seç</span></button>
                </div>
              </div>
            </div>
        </div>
    </div>
    `)
  }).join('')
}

window.onload = function () {
  showAllModelsFunc()
};

function openNav() {
  sidebar.style.width = "100%";
}

function closeNav() {
  sidebar.style.width = "0";
}

function onMouseOverCard(e) {
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];

  img.style.width = "min(480px, 73vw)";

  const item = datas.filter(data => data.model === e.id.split(" ")[0])[0].types.filter(item => item.type === e.id)[0]
  img.src = item.mouseOverImage;
  content.style.background = item.mouseOverBackground;
}
function onMouseOutCard(e) {
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];

  img.style.width = "min(464px, 70vw)";
  content.style.background = "#F8F8F8";

  const item = datas.filter(data => data.model === e.id.split(" ")[0])[0].types.filter(item => item.type === e.id)[0]
  img.src = item.mouseOutImage;
}

const showModel = (e) => {
  if(e.getElementsByTagName("a")[0].innerHTML === "All") {
    showAllModelsFunc()
    return;
  }
  showOneModelFunc(datas.filter(data => data.model === e.getElementsByTagName("a")[0].innerHTML)[0].types);
}