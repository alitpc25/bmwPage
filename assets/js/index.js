const sidebar = document.getElementById("mySidebar");
const parentSwiperWrapper = document.getElementById("parent-swiper-wrapper");

const datas = [
  {
    model: "i4",
    types: [
      {
        type: "i4 eDrive40 – M Sport",
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1.png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (1).png",
            onSelectImage: "assets/images/g0dnnfm5dze6pud7f3qvbjvfmwld 1.png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #5D0F05 0%,  #A74725 100%)",
        title: "Yeni BMW i4",
        text: "i4 eDrive40 - M Sport",
        electricityOption: "All electric",
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
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (2).png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 2.png",
            onSelectImage: "assets/images/g0dnnfm5dze6pud7f3qvbjvfmwld 1 (1).png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #03091C 0%, #17265E 100%)",
        title: "Yeni BMW i4",
        text: "i4 M50",
        electricityOption: "All electric",
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
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (4).png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (3).png",
            onSelectImage: "assets/images/g0dnnfm5dze6pud7f3qvbjvfmwld 1 (2).png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #7B7772 0%, #A2A09B 100%)",
        title: "Yeni BMW i7",
        text: "i7 xDrive60 M Sport",
        electricityOption: "All electric",
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
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (5).png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (6).png",
            onSelectImage: "assets/images/fud67x6l0kr2eoms4l562aixzyfe 1.png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #061728 0%, #193F63 100%)",
        title: "Yeni BMW iX1",
        text: "İX1 xLine",
        electricityOption: "All electric",
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
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (7).png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (8).png",
            onSelectImage: "assets/images/fud67x6l0kr2eoms4l562aixzyfe 1 (1).png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #061728 0%, #193F63 100%)",
        title: "Yeni BMW iX3",
        text: "iX3 M Sport",
        electricityOption: "All electric",
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
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (9).png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (10).png",
            onSelectImage: "assets/images/fud67x6l0kr2eoms4l562aixzyfe 1 (2).png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #1A1A1A 0%, #5E5E5E 100%)",
        title: "Yeni BMW iX",
        text: "iX xDrive40 M Sport",
        electricityOption: "All electric",
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
        images: {
          mobile: {
            default: "",
            onSelect: ""
          },
          web: {
            mouseOutImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (9).png",
            mouseOverImage: "assets/images/ssws4gz2ka14vjafolvwyneys0ac 1 (11).png",
            onSelectImage: "assets/images/fud67x6l0kr2eoms4l562aixzyfe 1 (3).png",
          }
        },
        selectedBackground: "linear-gradient(180deg, #450109 0%, #7C2F37 100%)",
        title: "Yeni BMW iX",
        text: "iX xDrive50 M Sport",
        electricityOption: "All electric",
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
        <div id="${item.type}" class="swiper-slide child-swiper-slide" onclick="onClickCard(this)" onmouseover="onMouseOverCard(this)" onmouseout="onMouseOutCard(this)">
          <div class="slide-content">
              <div class="slide-texts">
                  <h2 class="slide-title">${item.title}</h2>
                  <p class="slide-text">${item.text}</p>
              </div>
              <img src="${item.images.web.mouseOutImage}" class="slide-img">
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
              <div id="${item.type}" class="swiper-slide child-swiper-slide" onclick="onClickCard(this)" onmouseover="onMouseOverCard(this)" onmouseout="onMouseOutCard(this)">
                <div class="slide-content">
                    <div class="slide-texts">
                        <h2 class="slide-title">${item.title}</h2>
                        <p class="slide-text">${item.text}</p>
                    </div>
                    <img src="${item.images.web.mouseOutImage}" class="slide-img">
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
  img.src = item.images.web.mouseOverImage;
  content.style.background = item.selectedBackground;
}

function onMouseOutCard(e) {
  const content = e.getElementsByClassName("slide-content")[0];
  const img = content.getElementsByClassName("slide-img")[0];

  img.style.width = "min(464px, 70vw)";
  content.style.background = "#F8F8F8";

  const item = datas.filter(data => data.model === e.id.split(" ")[0])[0].types.filter(item => item.type === e.id)[0]
  img.src = item.images.web.mouseOutImage;
}

const showModel = (e) => {
  if (document.getElementsByClassName("models-select-section")[0].style.display == "none") {
    document.getElementsByClassName("models-select-section")[0].style.display = "block";
    document.getElementById("model-detail-section").innerHTML = "";
    document.getElementById("model-detail-section").classList.remove("left-to-right-slide-animation"); 
  }
  const prevActiveItem = document.getElementsByClassName("models-nav-item-active")[0];
  prevActiveItem.classList.remove("models-nav-item-active")

  e.classList.add("models-nav-item-active");
  if (e.getElementsByTagName("a")[0].innerHTML === "All") {
    showAllModelsFunc()
    return;
  }
  showOneModelFunc(datas.filter(data => data.model === e.getElementsByTagName("a")[0].innerHTML)[0].types);
}

function onClickCard(e) {
  document.getElementsByClassName("models-select-section")[0].style.display = "none";
  const prevActiveItem = document.getElementsByClassName("models-nav-item-active")[0];
  prevActiveItem.classList.remove("models-nav-item-active");
  document.getElementById(e.id.split(" ")[0] + "-nav-button").classList.add("models-nav-item-active");

  const selectedModelName = e.id;
  console.log(selectedModelName);

  const item = datas.filter(data => data.model === e.id.split(" ")[0])[0].types.filter(item => item.type === e.id)[0]

  const sectionToFill = document.getElementById("model-detail-section");
  document.getElementById("model-detail-section").classList.add("left-to-right-slide-animation"); 
  sectionToFill.style.display = "block";
  sectionToFill.innerHTML = `
  
  <div class="model-detail-container" style="background: ${item.selectedBackground}">
                <div class="model-detail-content">
                    <p class="electricity-option-p">${item.electricityOption}</p>
                    <h2>${item.type}</h2>
                    <div class="model-detail-info d-flex">
                        <div class="d-flex flex-column">
                            <p class="model-detail-data-value">
                                ${item.powerOutput.kW} kW / ${item.powerOutput.hp} bg
                            </p>
                            <p class="model-detail-data-name">
                              Power output
                            </p>
                        </div>
                        <div class="d-flex flex-column">
                            <p class="model-detail-data-value">
                              ${item.rangeInMiles.min} - ${item.rangeInMiles.max} miles
                            </p>
                            <p class="model-detail-data-name">
                              Electric range WLTP
                            </p>
                        </div>
                        <div class="d-flex flex-column">
                            <p class="model-detail-data-value">
                              ${item.milesPerKwh} mi/kWh
                            </p>
                            <p class="model-detail-data-name">
                              Energy consumption WLTP
                            </p>
                        </div>
                    </div>
                    <div class="discover-more-div d-flex align-items-center">
                      <i>
                          <img src="assets/icons/Path.svg">
                      </i>
                      <p>Discover more</p>
                    </div>
                </div>
                <div class="model-detail-img">
                  <img src="${item.images.web.onSelectImage}">
                </div>
            </div>`

}