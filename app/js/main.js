(function () {

  var top = document.body.scrollTop;

  window.addEventListener("scroll", function () {
    top = document.body.scrollTop;
  });

  document.addEventListener("DOMContentLoaded", function () {
    update();
  });

  function hsla(h=0, s=100, l=50, a=1) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  }

  function update() {
    requestAnimationFrame(update);
    document.body.style.backgroundColor = findColor(top);
  }
  
  function findColor(scroll) {
    var quotient, remainder;
    quotient = Math.floor(scroll / 360);
    remainder = scroll / 10 % 360;
    
    return hsla(remainder, 25);
  }
  
})();
