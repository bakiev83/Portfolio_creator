const acBtns = document.querySelectorAll(".faq__li div");

acBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentNode.classList.toggle("actives");
    acBtns.forEach((item) => {
      item != this && item.parentNode.classList.remove("actives");
    });
  });
});