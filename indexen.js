const toTop = document.getElementById('toTop');
const up = document.getElementById('up');

toTop.addEventListener('click',function () {
  document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', function() {
    const windowHeight = window.scrollY;
    if (windowHeight > 400){
      toTop.style.rotate = "-90deg";
      up.innerHTML = "Top";
    }else{
      toTop.style.rotate = "90deg";
      up.innerHTML = "Scroll";
    }
});

// 地圖切換
const find_chiayi = document.getElementById('Chiayi');
const find_Tainan = document.getElementById('Tainan');
const sea = document.getElementById('sea');
const map1 = document.getElementById('map1');
const map2 = document.getElementById('map2');
 
find_chiayi.addEventListener('click',function(){
    map1.style.opacity = 1;
    map2.style.opacity = 0;
    map1.style.zIndex = 1;
    map2.style.zIndex = -999;
    find_chiayi.classList.add('active');
    find_Tainan.classList.remove('active');
})

find_Tainan.addEventListener('click',function(){
    map1.style.opacity = 0;
    map2.style.opacity = 1;
    map2.style.zIndex = 1;
    map1.style.zIndex = -999;
    find_Tainan.classList.add('active');
    find_chiayi.classList.remove('active');
})

//圖片切換

const imgContainer = document.querySelector('.img_enviroment_box');
const prebutton = document.querySelector('.prev-button');
const nextbutton = document.querySelector('.next-button');


let currentIndex = 0;
const images = imgContainer.querySelectorAll('img');

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
    }
  });
  const currentText1 = images[index].getAttribute('data-h1');
  const textContainer1 = document.querySelector('.img_title');
  textContainer1.textContent = currentText1;
}



prebutton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  
});

nextbutton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);

//JS動畫
// 透過ID選擇器選擇元素
// const servicePosition = document.getElementById('service');
// const eatPosition = document.getElementById('eat'); 
// const agentTitle = document.getElementById('Title');
// const title_onePosition = document.getElementById('title_one');
// const holmes = document.getElementById('holmes');
// const ma = document.getElementById('ma');


// window.addEventListener('scroll', function () {
//   const windowHeight = window.scrollY;
//   // holmes.style.top = windowHeight + "px";
//   if (windowHeight >= 250) {
//     servicePosition.style.top = "0px"; // 移动元素到頂部
//     agentTitle.style.transform = "translateX(-50%) rotate(0deg) scale(1)";
//   } else {
//     servicePosition.style.top = "-240px";
//     agentTitle.style.transform = "translateX(950px) rotate(45deg) scale(1.2)";
//   }
//   if(windowHeight >= 1800){
//     eatPosition.style.top =  "0px";
//   }
//   else{
//     eatPosition.style.top =  "-500px";
//   }
  // if(windowHeight >= 1800 && windowHeight <=2760){
  //   title_onePosition.style.opacity = "1";
  //   title_onePosition.style.zIndex = "2";
  //   title_onePosition.style.position = "fixed";
  // }
  // else{
  //   title_onePosition.style.position = "absolute";
  //   title_onePosition.style.opacity = "0";
  // }
  // console.log(windowHeight);
// });





// 新式 動態標題
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section.container'); // 選取所有的 section 元素
  const titleContainer = document.getElementById('titleChange');
  let currentSectionIndex = 0;

  // 初始檢查
  const initialScrollTop = window.scrollY;
  let titleUpdated = false;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;
    if (initialScrollTop >= sectionTop && initialScrollTop < sectionBottom) {
      currentSectionIndex = index;
      updateFixedTitle(section.getAttribute('data-title'));
      titleUpdated = true;
    }
  });


  window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY;
      let titleUpdated = false; // 新增標誌
      sections.forEach((section, index) => {

          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          const sectionTitle = section.getAttribute('data-title');

          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
              if (currentSectionIndex !== index || !titleUpdated) {
                currentSectionIndex = index;
                updateFixedTitle(sectionTitle);
                titleUpdated = true; // 更新標誌
              }
          }else if (scrollTop < sections[0].offsetTop) {
            // 滾動到頁面頂部時重置標誌
            titleUpdated = false;
          }
      });
      // Check if the user has scrolled past the top of section1
      const section1 = sections[0];
      const section1Top = section1.offsetTop;

      if (scrollTop < section1Top) {
          // User has scrolled past the top of section1, remove 'active' class
          titleContainer.classList.remove('active');
      } else {
          // User is within or below section1, add 'active' class
          titleContainer.classList.add('active');
      }
  });

  

  function updateFixedTitle(sectionTitle) {
      const Title = document.getElementById('changeText');
      Title.textContent = sectionTitle;
  }
});


