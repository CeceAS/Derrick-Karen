"use strict";

// UNIT: Section Variables:

// subunit: Header & Navbar
const headerSection = document.querySelector("header");
const navBar = document.querySelector(".navbar");

const navButtonsContainer = document.querySelector(".navigation-buttons");

// subunit: Details Section
const detailsSection = document.getElementById("details");

// Nav button:

const btnDetails = document.querySelector(".details-btn");
const btnsNav = document.querySelectorAll(".nav-item");

// UNIT: smooth scrolling for navbar

// btnDetails.addEventListener("click", function (e) {
//   detailsSection.scrollIntoView({ behavior: "smooth" });
// });

btnsNav.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // console.log(btn.innerText.toLowerCase().replace(" ", ""));

    const element = btn.innerText.toLowerCase().replace(" ", "");

    const scrollTo = document.getElementById(`${element}`);

    // console.log(scrollTo);

    scrollTo?.scrollIntoView({ behavior: "smooth" });
  });
});

//

// UNIT: Smooth scrolling for header nav buttons

navButtonsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.getAttribute("href");
  document.querySelector(clicked)?.scrollIntoView({ behavior: "smooth" });
});

// UNIT: Animation when sections enter viewport:

const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
