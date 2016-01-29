(function () {

    document.addEventListener("DOMContentLoaded", function () {
        update();
    });

    function hsla(h = 0, s = 100, l = 50, a = 1) {
        return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }

    function update() {
        requestAnimationFrame(update);
        document.body.style.backgroundColor = findColor(document.documentElement.scrollTop);
    }

    function findColor(scroll) {
        return hsla(scroll / 10 % 360);
    }

})();