//global variables
const notFound = document.getElementById("not-found");

// spinner
const toggleSpinner = (spinner, body) => {
  document.getElementById("looding").style.display = spinner;
  document.getElementById("container").style.display = body;
};

// first looding display data
const randomMeals = () => {
  toggleSpinner("block", "none");
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    .then((response) => response.json())
    .then((data) => displayApi(data.meals));
};
randomMeals();

// searching Data showoig display
const loadApi = () => {
  const searchText = document.getElementById("loadApiData");
  //   console.log(searchText.value);
  const searchTextValue = searchText.value;
  toggleSpinner("block", "none");
  if (searchTextValue == "") {
    notFound.style.display = "block";
    const searchResults = document.getElementById("search-result");
    searchResults.innerHTML = "";
    toggleSpinner("none", "block");
    console.log(searchResults);
  } else {
    notFound.style.display = "none";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTextValue}
    `;
    //   console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => displayApi(data.meals));
    //clear the search box
    searchText.value = "";
  }
};

const displayApi = (data) => {
  //   console.log(data);
  if (data == null) {
    notFound.style.display = "block";
  } else {
    // toggleSpinner("none", "block");
    notFound.style.display = "none";
  }
  const searchResults = document.getElementById("search-result");
  console.log(searchResults);
  searchResults.innerHTML = "";
  data?.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add("col-md-6");
    div.classList.add("col-sm-12");
    div.classList.add("col-lg-4");
    // div.classList.add("");
    div.classList.add("my-4");
    div.innerHTML = `
    <div class="meals-card px-4 py-2 shadow-lg rounded">
    <div>
      <img class="rounded" src="${element.strMealThumb}" alt="" />
    </div>
    <div>
      <h5>${element.strMeal}</h5>
      <p>
         ${element.strInstructions.slice(0, 100)}
      </p>
      <div class="text-end">
        <button onclick="ProductDetilsLoad('${
          element.idMeal
        }')" class="btn bg-primary px-4 py-2 bg-opacity-75">
         see the Detils
        </button>
      </div>
    </div>
  </div>
    `;
    searchResults.appendChild(div);
  });
  toggleSpinner("none", "block");
};

// product detils load section
const ProductDetilsLoad = (data) => {
  //   console.log(data);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayDetils(data.meals));
};
const displayDetils = (data) => {
  const fulData = data[0];
  Swal.fire({
    title: `${fulData.strMeal}`,
    text: "Modal with a custom image.",
    imageUrl: `${fulData.strMealThumb}`,
    imageWidth: 400,
    imageHeight: 200,
    html: `<h4>food Area: ${fulData.strArea}
    <h5>Food: ${fulData.strIngredient1}</h5>
          <h6> Material: ${fulData.strIngredient1},${fulData.strIngredient2},${fulData.strIngredient2},${fulData.strIngredient4},${fulData.strIngredient5},${fulData.strIngredient6},${fulData.strIngredient7},${fulData.strIngredient8},${fulData.strIngredient9},${fulData.strIngredient10},${fulData.strIngredient11},${fulData.strIngredient12},${fulData.strIngredient13},${fulData.strIngredient14},${fulData.strIngredient15},${fulData.strIngredient16}</h6>
          <p><b>Instructions:</b> ${fulData.strInstructions}</p>
          <h6>how to make this food 👇:
         <a class="d-block" href="${fulData.strYoutube}"target="_blank"> 1.go to the youtube</a>
         <a href="${fulData.strSource}" target="_blank">2.Go to the website</a>
          </h6>
    `,
  });
};

// catagoris
const loadApiPart2 = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => response.json())
    .then((data) => searchingData(data.categories));
};
loadApiPart2();

const searchingData = (data) => {
  //   console.log(data);

  const catagories = document.getElementById("catagories");
  // toggleSpinner("block", "none");
  data.forEach((category) => {
    const div = document.createElement("div");

    div.classList.add("catagori");
    div.classList.add("text-center");
    div.classList.add("col-sm-3");
    div.classList.add("col-3");
    div.classList.add("col-md-2");
    div.classList.add("col-lg-1");
    div.classList.add("mx-2");
    div.classList.add("my-3");
    div.classList.add("text-center");
    div.innerHTML = `
     <div onclick="loadSearchingDisplayData('${category.strCategory}')">
     <img src="${category.strCategoryThumb}" alt="" />
     <h6>${category.strCategory}</h6>
     </div>
    `;
    catagories.appendChild(div);
  });
  // toggleSpinner("none", "block");
};

const loadSearchingDisplayData = (data) => {
  toggleSpinner("block", "none");
  //   console.log(data);
  const url = `https:www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayApi(data.meals));
};
