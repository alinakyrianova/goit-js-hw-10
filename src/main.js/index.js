import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".breed-select");
const catInfoDiv = document.querySelector(".cat-info");

function populateBreeds() {
  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Помилка при отриманні колекції порід:", error);
    });
}

function displayCatInfo(cat) {
  catInfoDiv.innerHTML = `
    <img src="${cat.url}" alt="Cat">
    <h3>${cat.breeds[0].name}</h3>
    <p>${cat.breeds[0].description}</p>
    <p>Темперамент: ${cat.breeds[0].temperament}</p>
  `;
}

function displayError() {
  const errorDiv = document.querySelector(".error");
  errorDiv.style.display = "block";
}

function handleBreedSelectChange(event) {
  const selectedBreedId = event.target.value;

  document.body.classList.add("show-loader");
  document.body.classList.remove("show-error");

  fetchCatByBreed(selectedBreedId)
    .then(cats => {
      const cat = cats[0];
      if (cat) {
        displayCatInfo(cat);
      } else {
        catInfoDiv.innerHTML = "";
      }
    })
    .catch(error => {
      console.error("Помилка при отриманні інформації про кота:", error);
      document.body.classList.remove("show-loader");
      displayError();
    });

  const loaderText = document.querySelector(".loader-text");
  loaderText.classList.add("is-hidden");
}

breedSelect.addEventListener("change", handleBreedSelectChange);

populateBreeds();





