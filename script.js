let restPlacehold = "Assets/Images/restaurant_Placeholder.jpeg";
let recipePlacehold = "Assets/Images/recipe_Placeholder.jpeg";

var restaurants = [];
var recipes = [];

$("#homeSearch").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    $(".homePage").css("display", "none");
    $("#resultPage").css("display", "block");

    $.ajax({
        method: "GET",
        url: "https://developers.zomato.com/api/v2.1/search?q=" + "Italian" + "&count=" + "3" + "&lat=" + "32.958345" + "&lon=" + "-96.738986" + "&sort=" + "rating",
        headers: {
            "user-key": "2af77d90c4f9ac3a6faf1019f8a457e6"
        },

    }).then(function(data) {
        console.log(data);
        console.log(data.restaurants)
        
        restaurants = data.restaurants;
        // restaurants += JSON.parse(data).restaurants;
        // console.log(restaurants)
        
        
        for (var i = 0; i < restaurants.length; i++) {
            const newRest = restaurants[i].restaurant;
            
            let newRestName = newRest.name;
            let newRestImg = newRest.thumb;
            let newRestAddress = newRest.location.address;
            let newRestPhone = newRest.phone_numbers;
            let newRestRating = newRest.user_rating.aggregate_rating + " Stars";
            let newRestUrl = newRest.url;
            
            let divId = "#rest";
            let restDiv = document.querySelector(divId += i);
            
            let restName = restDiv.querySelector(".restName");
            restName.textContent = newRestName;
            
            let restImg = restDiv.querySelector(".restImg");
            restImg.src = newRestImg;
            if (newRestImg === "") {
                restImg.src = restPlacehold;
            }

            let restAddress = restDiv.querySelector(".restAddress");
            restAddress.textContent = newRestAddress;
            
            let restPhone = restDiv.querySelector(".restPhone");
            restPhone.textContent = newRestPhone;
            
            //let restRating = restDiv.querySelector(".restRating");
            //restRating.textContent = newRestRating;
            
        }
    });
});


recipeQuery2 = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=Seafood";
recipeApiKey = "9973533";
foodTypeSearch = "Mexican";

let mealIds = [];
let recipeArray = [];

$.ajax({
    method: "GET",
    url: "https://www.themealdb.com/api/json/v2/9973533/filter.php?a=" + foodTypeSearch,

}).then(function(data2) {
    console.log(data2);
    console.log(data2.meals)

    let mealsArray = data2.meals;

    for (let i = 0; i < mealsArray.length; i++) {
        const meal = mealsArray[i];
        let newMealId = meal.idMeal;
        mealIds.push(newMealId);
    }

    console.log(mealIds);
    let recipeReturns = 0;
    for (let j = 0; j < mealIds.length; j++) {
        const recipeId = mealIds[j];

        recipeApiKey = "9973533";
        $.ajax({
            method: "GET",
            url: "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + recipeId,

        }).then(function(data3) {
            console.log(data3);
            recipeArray.push(data3);
            recipeReturns++;

            if (recipeReturns == mealIds.length) {
                putMyRecipesOnThePage();
            }
        });

    };


});
    
//    // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
//let edamamId = "c6579a60";
//let edamamKey = "1c0e533d12ab90b9d4c8070b4ebfc462";
//
//$.ajax({
//    method: "GET",
//    url: "https://api.edamam.com/search?q=" + "mexican" + "&mealType=" + "Dinner" + "&dishType=" + "main-course" + "&app_id=" + edamamId + "&app_key=" + edamamKey + "&from=0&to=3"
//    
//}).then(function(data2) {
//    console.log(data2);
//
//});



function putMyRecipesOnThePage() {
    console.log(recipeArray);

    for (var r = 0; r < 3; r++) {
        const recipe1 = recipeArray[r];
        newRecipe = recipe1.meals[0];

        let newRecipeName = newRecipe.strMeal;
        let newRecipeImg = newRecipe.strMealThumb;
        let newRecipeCategory = newRecipe.strCategory;
        let newRecipeLink = newRecipe.strSource;
        let newRecipeVideo = newRecipe.strYoutube;

        let divId = "#recipe";
        let recipeDiv = document.querySelector(divId += r);

        let recipeName = recipeDiv.querySelector(".recipeName");
        recipeName.textContent = newRecipeName;

        let recipeImg = recipeDiv.querySelector(".recipeImg");
        recipeImg.src = newRecipeImg;
        if (newRecipeImg === "") {
            recipeImg.src = recipePlacehold;
        }

        let recipeCategory = recipeDiv.querySelector(".recipeCategory");
        recipeCategory.textContent = newRecipeCategory;

        let recipeLink = recipeDiv.querySelector(".recipeLink");
        recipeLink.href = newRecipeLink;


        let recipeVideo = recipeDiv.querySelector(".recipeVideo");
        recipeVideo.href = newRecipeVideo;
    };
};






// restaurants += JSON.parse(data).restaurants;




// Search meal by name
// "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
// List all meals by first letter
// "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
// Lookup full meal details by id
// "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
// Lookup a single random meal
// "https://www.themealdb.com/api/json/v1/1/random.php"
// Lookup a selection of 10 random meals (only available to $2+ Patreon supporters)
// "https://www.themealdb.com/api/json/v1/1/randomselection.php"
// List all meal categories
// "https://www.themealdb.com/api/json/v1/1/categories.php"
// Latest Meals (only available to $2+ Patreon supporters)
// "https://www.themealdb.com/api/json/v1/1/latest.php"
// List all Categories, Area, Ingredients
// "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
// "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
// "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
// Filter by main ingredient
// "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
// Filter by multi-ingredient (only available to $2+ Patreon supporters)
// "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt"
// Filter by Category
// "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
// Filter by Area
// "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"













// RapidAPI version of Jquery-Ajax Request
// const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://edamam-recipe-search.p.rapidapi.com/search?q=mexican&mealType=Dinner",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "1c0e533d12ab90b9d4c8070b4ebfc462",
//         "x-rapidapi-host": " c6579a60"
//     }
// };

// $.ajax(settings).done(function(response) {
//     console.log(response);
// });








// getCurLocation();

// function getCurLocation() {
//     // This function is based on geoFindMe function found at
//     //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
//     //this function return an object with the lat and lon of current location
//     if (test) { console.log("getCurLocation"); }

//     let location = {};

//     function success(position) {
//         if (test) { console.log(" success"); }
//         if (test) { console.log("  location", position); }

//         location = {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             success: true
//         }
//         if (test) { console.log(" success location", location); }
//         getCurWeather(location);
//         getForecastWeather(location);
//     }

//     function error() {
//         location = { success: false }
//         console.log('Could not get location');
//         return location;
//     }

//     if (!navigator.geolocation) {
//         console.log('Geolocation is not supported by your browser');
//     } else {
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// };
// https: //developers.zomato.com/api/v2.1/search


//     https: //developers.zomato.com/api/v2.1/search?q=Mexican&count=3&lat=32.958345&lon=-96.738986&sort=rating
// <
// div rest - value = "0"
// class = "restName" > < /div> <
//     div rest - value = "0"
// class = "restAddress" > < /div> <
//     div rest - value = "0"
// class = "restPhone" > < /div> <
//     div rest - value = "0"
// class = "restRating" > < /div>

// let restNames = document.querySelector("div.restName");
// let restImgDivs = document.querySelector(".restImgDiv");
// let restImgs = document.querySelector(".restImg");
// let restAddress = document.querySelector(".restAddress");
// let restPhones = document.querySelector(".restPhone");
// let restRatings = document.querySelector(".restRating");

// let restDiv0 = document.querySelector("#rest0");
// let restDiv1 = document.querySelector("#rest1");
// let restDiv2 = document.querySelector("#rest2");


// let restName = restDiv0.querySelector(".restName");
// restName.textContent = "pizza pizza pizza";

// const apiKey = "2af77d90c4f9ac3a6faf1019f8a457e6";

// let requestType = "";
// let query = "";
// //
// let queryURL = "https://developers.zomato.com/api/v2.1/search?q=Mexican&count=3&lat=32.958345&lon=-96.738986&sort=rating"

// $.ajax({
//     url: queryURL,
//     method: 'GET'
// }).then(function(response) {
//     console.log(response);

// restaurantsObj = {
//     city: 
//     wind: 
//     humidity: 
//     temp: 
//     date: 
//     icon: 
//     desc: 
// }

// calls function to draw results to page
// drawCurWeather(weatherObj);
// getUvIndex(response);
// });



// function getCurWeather(loc) {
//     // function to get current weather
//     // returns object of current weather data
//     if (test) { console.log("getCurWeather - loc:", loc); }
//     if (test) { console.log("getCurWeather - toloc:", typeof loc); }

//     drawHistory();
//     // clear search field
//     $('#city-search').val("");

//     if (typeof loc === "object") {
//         city = `lat=${loc.latitude}&lon=${loc.longitude}`;
//     } else {
//         city = `q=${loc}`;
//     }

//     // set queryURL based on type of query
//     requestType = 'weather';
//     query = `?${city}&units=imperial&appid=${apiKey}`;
//     queryURL = `${url}${requestType}${query}`;

//     if (test) console.log(`cur queryURL: ${queryURL}`);
//     // Create an AJAX call to retrieve data Log the data in console
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function(response) {
//         if (test) console.log(response);

//         weatherObj = {
//             city: `${response.name}`,
//             wind: response.wind.speed,
//             humidity: response.main.humidity,
//             temp: response.main.temp,
//             date: (convertDate(response.dt))[1],
//             icon: `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
//             desc: response.weather[0].description
//         }

//         // calls function to draw results to page
//         drawCurWeather(weatherObj);
//         getUvIndex(response);
//     });
// };















