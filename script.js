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
