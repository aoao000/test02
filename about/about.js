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