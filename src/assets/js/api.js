import {
  displayHome,
  displayCategories,
  displayMealsByCategories,
  displayAreas,
  displayFoodByArea,
  displayIngredients,
  displayFoodByIngredients,
  displaySearch,
  displayDetails,
} from "./display.js";

let loading = document.querySelector(".loading");



//^ ==================> Home <===================
async function getHomeApi() {
  loading.classList.remove("d-none");
  try {
    let dataHome = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    let finalResponseHome = await dataHome.json();
    displayHome(finalResponseHome.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}






//* ==================> Search <===================
async function searchByName(searchName) {
  loading.classList.remove("d-none");
  try {
    let dataSearchName = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    );
    let finalResponseSearchName = await dataSearchName.json();
    displaySearch(finalResponseSearchName.meals || []);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}

async function searchByLetter(searchLetter) {
  loading.classList.remove("d-none");
  try {
    let dataSearchLetter = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
    );
    let finalResponseSearchLetter = await dataSearchLetter.json();
    displaySearch(finalResponseSearchLetter.meals || []);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}







//& ==================> Categories <=================== 
async function getCategoriesApi() {
  loading.classList.remove("d-none");
  try {
    let dataCategories = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let finalResponseCategories = await dataCategories.json();
    displayCategories(finalResponseCategories.categories);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}

async function filterByCategories(foodName) {
  loading.classList.remove("d-none");
  try {
    let datafilterByCategories = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`
    );
    let finalResponseFilterByCategories = await datafilterByCategories.json();
    displayMealsByCategories(finalResponseFilterByCategories.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}







//? ==================> Areas <===================
async function getAreas() {
  loading.classList.remove("d-none");
  try {
    let dataAreas = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    let finalResponseAreas = await dataAreas.json();
    displayAreas(finalResponseAreas.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}

async function getFoodByArea(area) {
  loading.classList.remove("d-none");
  try {
    let dataAreasFood = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    let finalResponseAreasFood = await dataAreasFood.json();
    displayFoodByArea(finalResponseAreasFood.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}







//* ==================> Ingredients <===================
async function getIngredients() {
  loading.classList.remove("d-none");
  try {
    let dataIngredients = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    let finalResponseIngredients = await dataIngredients.json();
    displayIngredients(finalResponseIngredients.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}

async function getFoodByIngredients(ingredients) {
  loading.classList.remove("d-none");
  try {
    let dataIngredientsFood = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
    );
    let finalResponseIngredientsFood = await dataIngredientsFood.json();
    displayFoodByIngredients(finalResponseIngredientsFood.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}







//! ==================> All Details <===================
async function getDetails(id) {
  loading.classList.remove("d-none");
  try {
    let dataDetails = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let finalResponseDetails = await dataDetails.json();
    displayDetails(finalResponseDetails.meals);
  } catch (error) {
    console.log(error);
  } finally {
    loading.classList.add("d-none");
  }
}



getHomeApi();


export {
  getHomeApi,
  getCategoriesApi,
  filterByCategories,
  getAreas,
  getFoodByArea,
  getIngredients,
  getFoodByIngredients,
  searchByName,
  searchByLetter,
  getDetails,
};
