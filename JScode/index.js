"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printToHtml() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("https://api.spoonacular.com/recipes/complexSearch?query=" +
            searchIngredient +
            "&apiKey=650f28846ca643b9a5add0e70f837ef9")
            .then((response) => response.json())
            .then((response) => createAndPrintToHtml(response));
    });
}
let rightDiv = document.getElementById("rightContainer");
let upperDiv = document.getElementById("upperDiv");
let lowerDiv = document.getElementById("lowerDiv");
let searchIngredient = (document.getElementById("ingredientInput")).value;
let searchIngredientBtn = document.getElementById("searchRecipeByIngredient");
searchIngredientBtn === null || searchIngredientBtn === void 0 ? void 0 : searchIngredientBtn.addEventListener("click", () => {
    // rightDiv?.innerHTML:any = null;
    printToHtml();
});
function createAndPrintToHtml(data) {
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
function printToHtmlNutrients() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("https://api.spoonacular.com/recipes/findByNutrients?min" +
            nutrientsInput +
            "=10&max" +
            nutrientsInput +
            "=" +
            nutrientsWeight +
            "&number=10&apiKey=650f28846ca643b9a5add0e70f837ef9")
            .then((response) => response.json())
            .then((response) => console.log(response));
    });
}
let nutrientsInput = (document.getElementById("nutrientsInput")).value;
let nutrientsWeight = (document.getElementById("nutrientsWeight")).value;
let searchNutrientsBtn = document.getElementById("searchRecipeByNutrients");
searchNutrientsBtn === null || searchNutrientsBtn === void 0 ? void 0 : searchNutrientsBtn.addEventListener("click", () => {
    printToHtmlNutrients();
});
