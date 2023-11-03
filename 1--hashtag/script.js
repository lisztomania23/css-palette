// animation from Hyperplexed YTvideo: https://www.youtube.com/watch?v=5a8NyGLlorI

const logo = document.getElementById("logo");
const images = Array.from(logo.querySelectorAll(".div-1, .div-2, .div-3, .div-4, .div-5, .div-6, .div-7")).reverse();

function getActive() {
  return document.body.dataset.active === "true";
}

function setActiveTo(active) {
  document.body.dataset.active = active;
}

function shift(image, index, rangeX, rangeY) {
  const active = getActive();

  image.animate(
    {
      translate: `${rangeX}px, ${rangeY}px`,
      scale: active ? 1 + (index * 0.4) : 1
    },
    {
      duration: 750,
      fill: "forwards",
      easing: "ease"
    }
  );
}

function shiftAll(images, rangeX, rangeY) {
  images.forEach(function (image, index) {
    shift(image, index, rangeX, rangeY);
  });
}

function handleMouseEvent(e) {
  if (e.type === 'mousedown') {
    setActiveTo(true);
    shiftAll(images, 0, 0);
  } else if (e.type === 'mouseup') {
    setActiveTo(false);
    shiftAll(images, 0, 0);
  }
}

window.addEventListener('mousedown', handleMouseEvent);
window.addEventListener('mouseup', handleMouseEvent);
