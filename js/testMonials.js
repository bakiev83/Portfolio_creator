const reviews = [
    {
        id: 1,
        name: "Mike Jordan.",
        job: "Teacher, Academic",
        img: "./images/person1.jpg",
        text: "I am always afraid of gas, and especially I am afraid that it might explode, how did Andrei help me, the forwarding driver showed.",
    },
    {
        id: 2,
        name: "Tommy Anderson.",
        job: "Web developer.",
        img: "./images/person2.jpg",
        text: "Ideological considerations of a higher order, as well as the strengthening and development of the structure, play an important.",
    },
    {
        id: 3,
        name: "David Statham.",
        job: "CIO Manager.",
        img: "./images/person3.jpg",
        text: "Likewise, the framework and place of person wide asset plays an important role in the formation of new proposals.",
    },
    {
        id: 4,
        name: "John Frankin.",
        job: "Founder, Double Bunch.",
        img: "../images/person4.png",
        text: "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    }
];
const images = document.getElementById("person");
const author = document.getElementById("author");
const jobs = document.getElementById("job");
const comment = document.getElementById("text");

const carouselLeft = document.getElementById("carouselLeft");
const carouselRight = document.getElementById("carouselRight");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    images.src = item.img;
    author.textContent = item.name;
    jobs.textContent = item.job;
    comment.textContent = item.text;
});
function showPerson(person) {
    const item = reviews[person];
    images.src = item.img;
    author.textContent = item.name;
    jobs.textContent = item.job;
    comment.textContent = item.text;
}
carouselRight.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;

    }
    showPerson(currentItem);
});
carouselLeft.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

