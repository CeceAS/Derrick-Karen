"use strict";

// Section Variables:

const headerSection = document.querySelector("header");
const detailsSection = document.getElementById("details");
const navBar = document.querySelector(".navbar");

// Nav button:

const btnDetails = document.querySelector(".details-btn");
const btnsNav = document.querySelectorAll(".nav-item");

// smooth scrolling:

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
