var restaurants = [];

$.ajax({
    method: "GET",
    url: "https://developers.zomato.com/api/v2.1/search?q=" + "Mexican" + "&count=" + "3" + "&lat=" + "32.958345" + "&lon=" + "-96.738986" + "&sort=" + "rating",
    headers: {
        "user-key": "2af77d90c4f9ac3a6faf1019f8a457e6"
    },

}).then(function(data) {
    console.log(data);
    console.log(data.restaurants)

    restaurants = data.restaurants;
    // restaurants += JSON.parse(data).restaurants;
    console.log(restaurants)


    for (var i = 0; i < restaurants.length; i++) {
        const newRest = restaurants[i].restaurant;

        let newRestName = newRest.name;
        let newRestImg = newRest.thumb;
        let newRestAddress = newRest.location.address;
        let newRestPhone = newRest.phone_numbers;
        let newRestRating = newRest.user_rating.aggregate_rating + " Stars";

        let divId = "#rest";
        let restDiv = document.querySelector(divId += i);

        let restName = restDiv.querySelector(".restName");
        restName.textContent = newRestName;

        let restImg = restDiv.querySelector(".restImg");
        restImg.src = newRestImg;

        let restAddress = restDiv.querySelector(".restAddress");
        restAddress.textContent = newRestAddress;

        let restPhone = restDiv.querySelector(".restPhone");
        restPhone.textContent = newRestPhone;

        let restRating = restDiv.querySelector(".restRating");
        restRating.textContent = newRestRating;

    }
});


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