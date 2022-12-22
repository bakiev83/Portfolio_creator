const projectsReviews = [
    {
        id: 1,
        projectsTitle: "Mike",
        projectsSubtitle: "Teacher, Academic",
        img: "./images/aboutMe1.jpg",
        projectsTitle2: "Tommy",
        projectsSubtitle2: "Web developer.",
        img2: "./images/aboutMe2.jpg",
    },
    {
        id: 2,
        projectsTitle: "Tommy",
        projectsSubtitle: "Web developer.",
        img: "./images/aboutMe2.jpg",
        projectsTitle2: "David",
        projectsSubtitle2: "CIO Manager.",
        img2: "./images/aboutMe3.jpg",
    },
    {
        id: 3,
        projectsTitle: "David",
        projectsSubtitle: "CIO Manager.",
        img: "./images/aboutMe3.jpg",
        projectsTitle2: "John",
        projectsSubtitle2: "Founder, Double Bunch.",
        img2: "../images/aboutMe4.jpg",
    },
    {
        id: 4,
        projectsTitle: "John",
        projectsSubtitle: "Founder, Double Bunch.",
        img: "../images/aboutMe4.jpg",
        projectsTitle2: "Mike",
        projectsSubtitle2: "Teacher, Academic",
        img2: "./images/aboutMe1.jpg",
    }
];
const projectsImg = document.getElementById("projectsImg1");
const projectsTitle = document.getElementById("projectsTitle1");
const projectsSubtitle = document.getElementById("projectsSubtitle1");
const projectsImg2 = document.getElementById("projectsImg2");
const projectsTitle2 = document.getElementById("projectsTitle2");
const projectsSubtitle2 = document.getElementById("projectsSubtitle2");

const projectsLeft = document.getElementById("projectsLeft");
const projectsRight = document.getElementById("projectsRight");
// const projectsLeft2 = document.getElementsByClassName("projectsL");
// const projectsRight2 = document.getElementsByClassName("projectsR");

let projectsCurrentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const projectsItem = projectsReviews[projectsCurrentItem];
    projectsImg.src = projectsItem.img;
    projectsTitle.textContent = projectsItem.projectsTitle;
    projectsSubtitle.textContent = projectsItem.projectsSubtitle;
    projectsImg2.src = projectsItem.img2;
    projectsTitle2.textContent = projectsItem.projectsTitle2;
    projectsSubtitle2.textContent = projectsItem.projectsSubtitle2;
});
function showProjects(projects) {
    const projectsItem = projectsReviews[projects];
    projectsImg.src = projectsItem.img;
    projectsTitle.textContent = projectsItem.projectsTitle;
    projectsSubtitle.textContent = projectsItem.projectsSubtitle;
    projectsImg2.src = projectsItem.img2;
    projectsTitle2.textContent = projectsItem.projectsTitle2;
    projectsSubtitle2.textContent = projectsItem.projectsSubtitle2;
}

projectsLeft.addEventListener("click", function () {
    projectsCurrentItem--;
    if (projectsCurrentItem < 0) {
        projectsCurrentItem = projectsReviews.length - 1;
    }
    showProjects(projectsCurrentItem);
});
projectsRight.addEventListener("click", function () {
    projectsCurrentItem++;
    if (projectsCurrentItem > projectsReviews.length - 1) {
        projectsCurrentItem = 0;
    }
    showProjects(projectsCurrentItem);
});