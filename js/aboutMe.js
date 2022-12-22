let indicators = document.querySelector(".aboutMe__box__content__indicators");
let show = document.querySelector(".aboutMe__box__content__show img");

indicators.addEventListener("click", (event) => {
    let src = event.target.src;
    src && (show.src = src);
});