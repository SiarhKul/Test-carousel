let dot = 0;
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slider = document.querySelector('.slider');
const dotAll = document.querySelectorAll('.dot');
const dotBox = document.querySelector('.dots-box');
const sliderItems = document.querySelectorAll('.slider-item');

const moveRight = () => {
  let viewportWidth = document.querySelector('.viewport').offsetWidth;
  dotAll.forEach(dot => dot.style.backgroundColor = 'rgb(155, 102, 102)')
  dot < dotAll.length - 1 ? dot++ : dot = 0;
  dotAll[dot].style.backgroundColor = 'red';
  slider.style.left = -dot * viewportWidth + 'px';
};

const moveLeft = () => {
  let viewportWidth = document.querySelector('.viewport').offsetWidth;
  dotAll.forEach(dot => dot.style.backgroundColor = 'rgb(155, 102, 102)')
  dot > 0 ? dot-- : dot = dotAll.length - 1;
  dotAll[dot].style.backgroundColor = 'red';
  slider.style.left = -dot * viewportWidth + 'px';

};

//---------------------------------LOAD SIZE IN ACCORDANCE WITH AMOUNT SLIDERS
window.addEventListener('load', () => {
  slider.style.width = `calc(100%* ${sliderItems.length})`;
  dotBox.style.width = `calc(30px* ${dotAll.length})`;
});

//---------------------------------RESIZE FOR ADAPTIVE
window.addEventListener('resize', () => {
  slider.style.left = -dot * window.outerWidth + 'px';
});

//---------------------------------MOVE WIDTH ARROWS
btnNext.addEventListener('click', () => {
  moveRight();
});

btnPrev.addEventListener('click', () => {
  moveLeft();
});

//---------------------------------MOVE WIDTH DOTS
dotBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    let viewportWidth = document.querySelector('.viewport')
      .offsetWidth;
    dotAll.forEach((d, i) => {
      d.style.backgroundColor = 'rgb(155, 102, 102)';
      if (d === e.target) {
        d.style.backgroundColor = 'red';
        slider.style.left = -i * viewportWidth + 'px';
        dot = i
      }
    });
  }
});

//---------------------------------MOVE WIDTH SWIPES
window.addEventListener('load', () => {
  const slider = document.querySelector('.slider');
  const thresholdDistX = 30;
  const thresholdDistY = 80;
  let distX = null;
  let distY = null;
  let startX = null;
  let startY = null;

  function handleSwipe(matchParmSwipe, distX) {
    if (matchParmSwipe & (distX > 0)) {
      moveRight();
    } else if (matchParmSwipe & (distX < 0)) {
      moveLeft();
    }
  }

  slider.addEventListener('touchstart', (e) => {
    const touchobj = e.changedTouches[0];
    distX = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
  });

  slider.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });

  slider.addEventListener('touchend', (e) => {
    const touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    const matchParmSwipe =
      Math.abs(distX) >= thresholdDistX &&
      Math.abs(distY) <= thresholdDistY;
    handleSwipe(matchParmSwipe, distX);
  });
});
