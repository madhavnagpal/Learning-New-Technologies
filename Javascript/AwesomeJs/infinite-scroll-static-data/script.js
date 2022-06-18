const scrollContainer = document.querySelector(".loop_container");
const clones = scrollContainer.querySelectorAll(".is-clone");

let isScrollDisabled = false,
  scrollHeight = 0,
  clonesHeight = 0;

const getScrollPosition = () =>
  (scrollContainer.pageYOffset || scrollContainer.scrollTop) -
  (scrollContainer.clientTop || 0);

const setScrollPosition = (pos) => (scrollContainer.scrollTop = pos);

const getClonesHeight = () => {
  clonesHeight = 0;

  for (let i = 0; i < clones.length; i++)
    clonesHeight = clonesHeight + clones[i].offsetHeight;

  return clonesHeight;
};

const reCalc = () => {
  const scrollPos = getScrollPosition();
  scrollHeight = scrollContainer.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) setScrollPosition(1); // Scroll 1 pixel to allow upwards scrolling
};

const scrollUpdate = () => {
  if (isScrollDisabled) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      isScrollDisabled = false;
    }, 40);
    return;
  }
  const scrollPos = getScrollPosition();

  console.log({ clonesHeight, scrollPos, scrollHeight });

  if (clonesHeight + scrollPos >= scrollHeight) {
    // Scroll to the top when you’ve reached the bottom
    setScrollPosition(1); // Scroll down 1 pixel to allow upwards scrolling
    isScrollDisabled = true;
  } else if (scrollPos <= 0) {
    // Scroll to the bottom when you reach the top
    setScrollPosition(scrollHeight - clonesHeight);
    isScrollDisabled = true;
  }
};

const init = () => {
  reCalc();

  window.addEventListener(
    "resize",
    function () {
      window.requestAnimationFrame(reCalc);
    },
    false
  );

  scrollContainer.addEventListener(
    "scroll",
    function () {
      window.requestAnimationFrame(scrollUpdate);
    },
    false
  );
};

init();

// Just for this demo: Center the middle block on page load
window.onload = function () {
  setScrollPosition(clones[0].offsetHeight * 2);
};
