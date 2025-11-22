import {
  filterByCategories,
  getFoodByArea,
  getFoodByIngredients,
  searchByName,
  searchByLetter,
  getDetails,
} from "./api.js";








//! ==================> All Details Event <===================
function addCardClickListener() {
  document.querySelectorAll(".innerCards").forEach((card) => {
    card.addEventListener("click", () => {
      let id = card.dataset.id;
      if (id) {
        document.querySelector(".myCards").classList.add("d-none");
        document.querySelector(".details-row").classList.remove("d-none");
        getDetails(id);
      }
    });
  });
}








//^ ==================> Home <===================
function displayHome(array) {
  let cards = "";
  for (let i = 0; i < array.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="innerCards" data-id="${array[i].idMeal}">
          <img src="${array[i].strMealThumb}" alt="${array[i].strMeal}">
          <div class="layer-img">
            <p>${array[i].strMeal}</p>
            <div class="mt-3">
              <i class="fas fa-utensils me-2"></i>
              <span style="font-size: 0.9rem; opacity: 0.9;">View Recipe</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;
  addCardClickListener();
}








//* ==================> Search <===================
function printSearchInputs() {
  document.querySelector(".search-btn").innerHTML = `
    <input type="search" class="form-control search-input me-md-3 w-40" placeholder="🔍 Search By Name">
    <input type="search" class="form-control search-input w-40" placeholder="🔤 Search By First Letter" maxlength="1">
  `;

  let inputs = document.querySelectorAll(".search-input");
  let searchName = inputs[0];
  let searchLetter = inputs[1];

  let timeSearchName;
  searchName.addEventListener("input", () => {
    clearTimeout(timeSearchName);
    timeSearchName = setTimeout(() => {
      searchByName(searchName.value);
    }, 700);
  });

  let timeSearchLetter;
  searchLetter.addEventListener("input", () => {
    clearTimeout(timeSearchLetter);
    timeSearchLetter = setTimeout(() => {
      searchByLetter(searchLetter.value);
    }, 700);
  });

  return { searchName, searchLetter };
}

function displaySearch(search) {
  if (!search || search.length === 0) {
    document.querySelector(".myCards").innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fas fa-search fa-4x mb-4" style="color: rgba(255, 255, 255, 0.3);"></i>
        <h3 style="color: rgba(255, 255, 255, 0.7);">No meals found</h3>
        <p style="color: rgba(255, 255, 255, 0.5);">Try searching for something else</p>
      </div>`;
    return;
  }

  let cards = "";
  for (let i = 0; i < search.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="innerCards" data-id="${search[i].idMeal}">
          <img src="${search[i].strMealThumb}" alt="${search[i].strMeal}">
          <div class="layer-img">
            <p>${search[i].strMeal}</p>
            <div class="mt-3">
              <i class="fas fa-utensils me-2"></i>
              <span style="font-size: 0.9rem; opacity: 0.9;">View Recipe</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  document.querySelector(".myCards").innerHTML = cards;
  addCardClickListener();
}









//& ==================> Categories <=================== 
function displayCategories(array) {
  let cards = "";
  for (let i = 0; i < array.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="innerCards category-card" data-cat="${array[i].strCategory}">
          <img src="${array[i].strCategoryThumb}" alt="${array[i].strCategory}">
          <div class="layer-img">
            <h4 class="mb-3">${array[i].strCategory}</h4>
            <p style="font-size: 0.85rem; line-height: 1.6; opacity: 0.9;">
              ${array[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}...
            </p>
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      let selectedCat = card.dataset.cat;
      filterByCategories(selectedCat);
    });
  });
}

function displayMealsByCategories(array) {
  let cards = "";
  for (let i = 0; i < array.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="innerCards filterCat" data-id="${array[i].idMeal}">
          <img src="${array[i].strMealThumb}" alt="${array[i].strMeal}">
          <div class="layer-img">
            <p>${array[i].strMeal}</p>
            <div class="mt-3">
              <i class="fas fa-utensils me-2"></i>
              <span style="font-size: 0.9rem; opacity: 0.9;">View Recipe</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;
  addCardClickListener();
}








//? ==================> Areas <===================
function displayAreas(area) {
  let cards = "";
  for (let i = 0; i < area.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="areas" data-area="${area[i].strArea}">
          <i class="fas fa-map-marker-alt fa-4x mb-3"></i>
          <h4 class="fw-bold">${area[i].strArea}</h4>
          <p style="font-size: 0.85rem; opacity: 0.7; margin-top: 0.5rem;">Explore Cuisine</p>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;
  
  document.querySelectorAll(".areas").forEach((card) => {
    card.addEventListener("click", () => {
      let selectedArea = card.dataset.area;
      getFoodByArea(selectedArea);
    });
  });
}

function displayFoodByArea(areaFood) {
  let cards = "";
  for (let i = 0; i < areaFood.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="innerCards" data-id="${areaFood[i].idMeal}">
          <img src="${areaFood[i].strMealThumb}" alt="${areaFood[i].strMeal}">
          <div class="layer-img">
            <p>${areaFood[i].strMeal}</p>
            <div class="mt-3">
              <i class="fas fa-utensils me-2"></i>
              <span style="font-size: 0.9rem; opacity: 0.9;">View Recipe</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;
  addCardClickListener();
}








//* ==================> Ingredients <===================
function displayIngredients(ingredients) {

  //!!!!=====================================>Warning<==========================================!!!!!
  //^There’s an issue with the API where strType is null,
  //^ which causes strDescription not to always be a string.
  //^ Therefore, it was necessary to convert it to a string before using string methods.



  let cards = "";
  for (let i = 0; i < ingredients.length && i < 20; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="ingredients" data-ingredients="${ingredients[i].strIngredient}">
          <i class="fas fa-leaf fa-4x mb-3"></i>
          <h5 class="fw-bold mb-2">${ingredients[i].strIngredient}</h5>
          <p style="font-size: 0.8rem; opacity: 0.8; line-height: 1.5;">
            ${String(ingredients[i].strDescription).split(" ").slice(0, 15).join(" ")}...
          </p>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;
  
  document.querySelectorAll(".ingredients").forEach((card) => {
    card.addEventListener("click", () => {
      let selectedIngredients = card.dataset.ingredients;
      getFoodByIngredients(selectedIngredients);
    });
  });
}

function displayFoodByIngredients(ingredients) {
  let cards = "";
  for (let i = 0; i < ingredients.length; i++) {
    cards += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="innerCards" data-id="${ingredients[i].idMeal}">
          <img src="${ingredients[i].strMealThumb}" alt="${ingredients[i].strMeal}">
          <div class="layer-img">
            <p>${ingredients[i].strMeal}</p>
            <div class="mt-3">
              <i class="fas fa-utensils me-2"></i>
              <span style="font-size: 0.9rem; opacity: 0.9;">View Recipe</span>
            </div>
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".myCards").innerHTML = cards;
  addCardClickListener();
}









//! ==================> All Details <===================
function displayDetails(details) {
  let cards = "";
  for (let i = 0; i < details.length; i++) {
    let ingredients = [];
    for (let key in details[i]) {
      if (key.includes("strIngredient") && details[i][key]) {
        ingredients.push(details[i][key]);
      }
    }

    cards += `
      <div class="x-mark text-end mb-4">
        <i class="fas fa-times exit"></i>
      </div>
      <div class="col-12 col-lg-4">
        <div class="foodDetails">
          <img src="${details[i].strMealThumb}" class="w-100" alt="${details[i].strMeal}">
          <h2 class="mt-4 fw-bold" style="background: linear-gradient(135deg, #d4af37 0%, #f9d423 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            ${details[i].strMeal}
          </h2>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="foodDetails">
          <div class="mb-4">
            <h3 class="fw-bold mb-3" style="color: #d4af37;">
              <i class="fas fa-clipboard-list me-2"></i>Instructions
            </h3>
            <p style="line-height: 1.8; opacity: 0.9;">${details[i].strInstructions}</p>
          </div>
          
          <div class="row mb-4">
            <div class="col-md-6">
              <div class="p-3" style="background: rgba(212, 175, 55, 0.1); border-radius: 15px; border-left: 4px solid #d4af37;">
                <h5 class="fw-bold mb-2">
                  <i class="fas fa-map-marker-alt me-2" style="color: #d4af37;"></i>Area
                </h5>
                <p class="mb-0 fs-5">${details[i].strArea}</p>
              </div>
            </div>
            <div class="col-md-6 mt-3 mt-md-0">
              <div class="p-3" style="background: rgba(201, 169, 97, 0.1); border-radius: 15px; border-left: 4px solid #c9a961;">
                <h5 class="fw-bold mb-2">
                  <i class="fas fa-th-large me-2" style="color: #c9a961;"></i>Category
                </h5>
                <p class="mb-0 fs-5">${details[i].strCategory}</p>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <h4 class="fw-bold mb-3" style="color: #f9d423;">
              <i class="fas fa-list me-2"></i>Ingredients
            </h4>
            <ul class="list-unstyled d-flex flex-wrap gap-2">
              ${ingredients.map(ing => `
                <li class="alert alert-info m-0">
                  <i class="fas fa-check-circle me-1"></i>${ing}
                </li>
              `).join("")}
            </ul>
          </div>

          <div class="food-links d-flex gap-3 flex-wrap">
            <a target="_blank" href="${details[i].strSource}" class="btn btn-success">
              <i class="fas fa-external-link-alt me-2"></i>Source
            </a>
            <a target="_blank" href="${details[i].strYoutube}" class="btn btn-danger">
              <i class="fab fa-youtube me-2"></i>Watch Video
            </a>
          </div>
        </div>
      </div>`;
  }

  document.querySelector(".details-row").innerHTML = cards;

  document.querySelector(".exit").addEventListener("click", () => {
    document.querySelector(".details-row").classList.add("d-none");
    document.querySelector(".myCards").classList.remove("d-none");
  });
}








export {
  displayHome,
  displayCategories,
  displayMealsByCategories,
  displayAreas,
  displayFoodByArea,
  displayIngredients,
  displayFoodByIngredients,
  displaySearch,
  printSearchInputs,
  displayDetails,
};
