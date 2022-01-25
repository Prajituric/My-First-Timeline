const items = document.querySelectorAll(".timeline li");

const ViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.document.clientHeight) &&
    rect.right <=
      (window.innerWidth ||
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth))
  );
};

const run = () =>
  items.forEach((item) => {
    if (ViewPort(item)) {
      item.classList.add("show");
    }
  });

window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
