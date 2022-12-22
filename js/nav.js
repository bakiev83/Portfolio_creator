function openBurger() {
  document.querySelector('.nav__burger-content').classList.toggle('active')
}

window.onscroll = function () { scrollFunction(), backTopFunction() };

function scrollFunction() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "10px 0";
    mybutton.style.display = "block";
  } else {
    document.getElementById("nav").style.padding = "60px 0";
    mybutton.style.display = "none"
  }
}

let mybutton = document.getElementById("myBtn");

let topFuncion = function topFuncion() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFuncion);



/////////////dark-light mode////////////////
function darkLightFuncion() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let darkMode = document.querySelector("#mode")
    darkMode.classList.toggle("dark");
    mybutton.classList.toggle("darkTopBtn");


 }


