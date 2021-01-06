const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slider = document.querySelector(".slider");
const dotAll = document.querySelectorAll(".dot");
const dotBox = document.querySelector(".dots-box")

let dot = 0;
window.addEventListener('resize', () => {
    slider.style.left = -dot * window.outerWidth + "px";
})

dotAll[0].style.backgroundColor = "red";

btnNext.addEventListener("click", () => {
    let viewportWidth = document.querySelector(".viewport").offsetWidth;
    dotAll[dot].style.backgroundColor = "rgb(155, 102, 102)";
    dot < 2 ? dot++ : dot = 0;

    dotAll[dot].style.backgroundColor = "red";
    slider.style.left = -dot * viewportWidth + "px";
})

btnPrev.addEventListener("click", () => {
    let viewportWidth = document.querySelector(".viewport").offsetWidth;
    dotAll[dot].style.backgroundColor = "rgb(155, 102, 102)";
    dot > 0 ? dot-- : dot = 2;
    dotAll[dot].style.backgroundColor = "red";
    slider.style.left = -dot * viewportWidth + "px";
});

dotBox.addEventListener("click", (e) => {
    let viewportWidth = document.querySelector(".viewport").offsetWidth;
    dotAll.forEach((dot, i) => {
        dot.style.backgroundColor = "rgb(155, 102, 102)"
        if (dot === e.target) {
            dot.style.backgroundColor = "red";
            slider.style.left = -i * viewportWidth + "px";
        }
    })

})


window.addEventListener("load", () => {
    let viewportWidth = document.querySelector(".viewport").offsetWidth;
    const slider = document.querySelector('.slider')
    const thresholdDistX = 30; // минимальное расстояние для swipe
    const thresholdDistY = 80; // минимальное расстояние для swipe
    let distX = null;
    let distY = null
    let startX = null;
    let startY = null;

    slider.addEventListener('touchstart', function (e) {
        const touchobj = e.changedTouches[0];
        distX = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
    })

    slider.addEventListener('touchmove', (e) => {
        e.preventDefault()
    })

    slider.addEventListener('touchend', function (e) {
        const touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX
        distY = touchobj.pageY - startY
        const matchParmSwipe = (Math.abs(distX) >= thresholdDistX && Math.abs(distY) <= thresholdDistY)
        handleSwipe(matchParmSwipe, distX)
    })

    function handleSwipe(matchParmSwipe, distX) {
        console.log(matchParmSwipe, distX)
        if (matchParmSwipe & distX > 0) {

            let viewportWidth = document.querySelector(".viewport").offsetWidth;
            dotAll[dot].style.backgroundColor = "rgb(155, 102, 102)";
            dot < 2 ? dot++ : dot = 0;
            dotAll[dot].style.backgroundColor = "red";
            slider.style.left = -dot * viewportWidth + "px";
        } else if (matchParmSwipe & distX < 0) {

            let viewportWidth = document.querySelector(".viewport").offsetWidth;
            dotAll[dot].style.backgroundColor = "rgb(155, 102, 102)";
            dot > 0 ? dot-- : dot = 2;
            dotAll[dot].style.backgroundColor = "red";
            slider.style.left = -dot * viewportWidth + "px";
        }
    }
})




