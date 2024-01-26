const listItems = document.querySelectorAll('li');
let delay = 0;
window.addEventListener('load', function() {   
    listItems.forEach(item => {
      setTimeout(() => {
        item.style.opacity = '1';
      }, delay);
      delay += 200; // 延遲每個項目的顯示時間
    });
});

// // 新式 navigationbar
const navbarButton = document.querySelector('.navigationBar_button');
const navigationItem = document.getElementById('navigationItem');

navbarButton.addEventListener('click',function () {
  if(navigationItem.classList.contains('change')){
    navigationItem.classList.remove('change');
    console.log('aaaa');
  }
  else{
    navigationItem.classList.add('change');
    console.log('bbb');
  }
  
})



const dropDown = document.querySelector('.dropBox');
const dropDown_content = document.getElementById('content');

dropDown.addEventListener('click',function (){
  if(dropDown_content.classList.contains('active')){
    dropDown_content.classList.remove('active');
  }
  else{
    dropDown_content.classList.add('active');
  }
})

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', function() {
  const windowHeight = window.scrollY;
  if (windowHeight > 400){
    toTop.style.rotate = "-90deg";
    up.innerHTML = "toTop";
  }else{
    toTop.style.rotate = "90deg";
    up.innerHTML = "scroll";
  }
});

toTop.addEventListener('click',function () {
  document.documentElement.scrollTop = 0;
})
