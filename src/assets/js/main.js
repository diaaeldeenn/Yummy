import {
  getHomeApi,
  getCategoriesApi,
  getAreas,
  getIngredients,
} from "./api.js";

import { printSearchInputs } from "./display.js";
import { displayContactSection } from "./contact.js";

let openCloseIcon = document.querySelector(".open-close-icon");
let nav = document.querySelector("nav");
let home = document.querySelector(".Home");
let categories = document.querySelector(".Categories");
let area = document.querySelector(".Area");
let ingredients = document.querySelector(".Ingredients");
let search = document.querySelector(".Search");
let contact = document.querySelector(".ContactUs");



openCloseIcon.addEventListener("click", () => {
  openCloseIcon.classList.toggle("fa-bars");
  openCloseIcon.classList.toggle("fa-times");
  nav.classList.toggle("open");
});


function closeNav() {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    openCloseIcon.classList.add("fa-bars");
    openCloseIcon.classList.remove("fa-times");
  }
}



home.addEventListener("click", () => {
  closeNav();
  getHomeApi();
  document.querySelector(".search-btn").innerHTML = "";
  document.querySelector(".details-row").classList.add("d-none");
  document.querySelector(".myCards").classList.remove("d-none");
});

search.addEventListener("click", () => {
  closeNav();
  document.querySelector(".myCards").innerHTML = "";
  document.querySelector(".details-row").classList.add("d-none");
  printSearchInputs();
});

categories.addEventListener("click", () => {
  closeNav();
  getCategoriesApi();
  document.querySelector(".search-btn").innerHTML = "";
  document.querySelector(".details-row").classList.add("d-none");
  document.querySelector(".myCards").classList.remove("d-none");
});

area.addEventListener("click", () => {
  closeNav();
  getAreas();
  document.querySelector(".search-btn").innerHTML = "";
  document.querySelector(".details-row").classList.add("d-none");
  document.querySelector(".myCards").classList.remove("d-none");
});

ingredients.addEventListener("click", () => {
  closeNav();
  getIngredients();
  document.querySelector(".search-btn").innerHTML = "";
  document.querySelector(".details-row").classList.add("d-none");
  document.querySelector(".myCards").classList.remove("d-none");
});

contact.addEventListener("click", () => {
  closeNav();
  document.querySelector(".details-row").classList.add("d-none");
  document.querySelector(".myCards").classList.remove("d-none");
  document.querySelector(".search-btn").innerHTML = "";
  displayContactSection();
});
