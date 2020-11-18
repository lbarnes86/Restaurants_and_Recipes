let categories = [];
let areas = [];
let ingredients = [];


$.ajax({
    method: "GET",
    url: "https://www.themealdb.com/api/json/v2/9973533/list.php?c=list",

}).then(function(data) {
    console.log(data);
    let categoryArray = data.meals;

    for (let i = 0; i < categoryArray.length; i++) {
        const category = categoryArray[i];
        let newCategory = category.strCategory;
        categories.push(newCategory);
    }
    console.log(categories)
})

$.ajax({
    method: "GET",
    url: "https://www.themealdb.com/api/json/v2/9973533/list.php?a=list",

}).then(function(data) {
    console.log(data);
    let areaArray = data.meals;

    for (let i = 0; i < areaArray.length; i++) {
        const area = areaArray[i];
        let newArea = area.strArea;
        areas.push(newArea);
    }
    console.log(areas)


})

$.ajax({
    method: "GET",
    url: "https://www.themealdb.com/api/json/v2/9973533/list.php?i=list",


}).then(function(data) {
    console.log(data);
    let ingredientArray = data.meals;

    for (let i = 0; i < ingredientArray.length; i++) {
        const ingredient = ingredientArray[i];
        let newIngredient = ingredient.strIngredient;
        categories.push(newIngredient);
    }
    console.log(categories)


})