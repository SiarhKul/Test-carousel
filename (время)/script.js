const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slider = document.querySelector('.slider__item')
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
// slider.addEventListener('touchmove', f)

slider.addEventListener('touchstart', f1)
slider.addEventListener("touchend", f2)

function f1(e) {
    const touchStart = e.changedTouches[0];
    const xStart = touchStart.pageX;
    const yStart = touchStart.pageY;
    console.log(xStart, yStart);

}

function f2(e) {
    const touchEnd = e.changedTouches[0];
    const xEnd = touchEnd.pageX;
    const yEnd = touchEnd.pageY;
    console.log(xEnd, yEnd);
}



// function f(e) {
//     const detecting = true;
//     const started = false
//     const touch = e.changedTouches[0];
//     const x = touch.pageX;
//     const y = touch.pageY;


//     if (e.touches.length != 1 || started) {
//         return;
//     }
//     console.log("touch", touch);
//     console.log("x", x);
//     console.log("y", y);
// }

// Устанавливаем элемент слайдера по умолчанию.
let slideIndex = 1;
showSlides(slideIndex);

// Функция  листания
function showSlides(n) {
    let slides = document.querySelectorAll(".slider__item");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Устанавливает текущий элемент слайдера
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Функция движения слайдера вперёд
function nextSlide() {
    showSlides(slideIndex += 1);
}

// Функция движения слайдера назад
function prevSlide() {
    showSlides(slideIndex -= 1);
}