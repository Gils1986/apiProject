async function printToHtml() {
  await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      searchIngredient +
      "&apiKey=650f28846ca643b9a5add0e70f837ef9"
  )
    .then((response) => response.json())

    .then((response) => createAndPrintToHtml(response));
}

let rightDiv: HTMLElement | null = document.getElementById("rightContainer");
let upperDiv: HTMLElement | null = document.getElementById("upperDiv");
let lowerDiv: HTMLElement | null = document.getElementById("lowerDiv");

let searchIngredient = (<HTMLInputElement>(
  document.getElementById("ingredientInput")
)).value;

let searchIngredientBtn = document.getElementById("searchRecipeByIngredient");

searchIngredientBtn?.addEventListener("click", () => {
  printToHtml();
});

function createAndPrintToHtml(data: { results: any }) {
  console.log(data);
  console.log(data.results);
  let dataResults = data.results.splice(0, 5);
  console.log(dataResults);
  for (let i = 0; i < data.results.length; i++) {
    let recipeDivUp = document.createElement("div");
    recipeDivUp.setAttribute("class", "recipeDiv");

    recipeDivUp.innerHTML += `<p>${data.results[i].title}</p></br>
    <img src="${data.results[i].image}">`;
    if (upperDiv != null) {
      upperDiv.appendChild(recipeDivUp);
    }
  }
  for (let i = 0; i < dataResults.length; i++) {
    let recipeDivDown = document.createElement("div");
    recipeDivDown.setAttribute("class", "recipeDiv");

    recipeDivDown.innerHTML += `<p>${dataResults[i].title}</p></br>
    <img src="${dataResults[i].image}">`;
    if (lowerDiv != null) {
      lowerDiv.appendChild(recipeDivDown);
    }
  }
}

async function printToHtmlNutrients() {
  await fetch(
    "https://api.spoonacular.com/recipes/findByNutrients?min" +
      nutrientsInput +
      "=10&max" +
      nutrientsInput +
      "=" +
      nutrientsWeight +
      "&number=10&apiKey=650f28846ca643b9a5add0e70f837ef9"
  )
    .then((response) => response.json())

    .then((response) => console.log(response));
}

let nutrientsInput = (<HTMLInputElement>(
  document.getElementById("nutrientsInput")
)).value;

let nutrientsWeight = (<HTMLInputElement>(
  document.getElementById("nutrientsWeight")
)).value;

let searchNutrientsBtn = document.getElementById("searchRecipeByNutrients");

searchNutrientsBtn?.addEventListener("click", () => {
  printToHtmlNutrients();
});


/C/Users/Nava/Desktop/API_project