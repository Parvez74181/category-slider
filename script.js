let tabsBox = document.querySelector(".tabs-box");
let tabs = document.querySelectorAll(".tab");
let isDragging = false;

tabsBox.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  tabsBox.scrollLeft -= e.movementX;
});

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mouseup", () => (isDragging = false));

tabs.forEach((tab) => {
  if (isDragging) return;

  tab.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    tab.classList.toggle("active");
  });
});
