const weather = {
    apiKey: "5ef023d1a3a07faee421b4e629dd17e0",
    // find weather data by city name
    findWeather: function (city) {
        //fetch URL
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            // Once URL fetched then use response.json to break down the information
            .then((response) => response.json())
            //Display data 
            .then((data) => this.showWeather(data));

    },
    // function to display the weather on the page
    showWeather: function (data) {
        // get city name from the  data 
        const { name } = data;
        // get temp and humidity name from the data under main 
        const { temp, humidity } = data.main;
        // get speed from data under wind
        const { speed } = data.wind;

        console.log(name, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + " ℃";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    // function to look up the input value and gets it from the findWeather
    search: function () {
        this.findWeather(document.querySelector("#inputKey").value);
    },
};

// activate the search button using the search function above
document.querySelector("#go-button").addEventListener("click", function () {
    weather.search();
})

//add local storage set item and get item+add search history to the html
//figure out the UV index 








