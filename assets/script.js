const weather = {
    apiKey: "5ef023d1a3a07faee421b4e629dd17e0",
    localStorage: JSON.parse(localStorage.getItem("city")) || [],
    // find weather data by city name
    findWeather: function (city) {
        //fetch URL
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
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
        const { icon } = data.weather[0];
        const { lon, lat } = data.coord;
        console.log(icon)
        this.createLi(name)
        this.localStorage.push(name)
        localStorage.setItem("city", JSON.stringify(this.localStorage))
        const img = document.createElement("img");
        img.setAttribute("src", "http://openweathermap.org/img/w/" + icon + ".png");
        console.log(name, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".city").append(img)
        document.querySelector(".temp").innerText = temp + " ℃";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        this.fiveDays(name)
        fetch(
            `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
        )
            // Once URL fetched then use response.json to break down the information
            .then((response) => response.json())
            //Display data 
            .then((data) => {
                console.log(data);
                document.querySelector(".uv").innerText = "UV Index: " + data.value;
            });
    },

    // function to look up the input value and gets it from the findWeather
    search: function () {
        this.findWeather(document.querySelector("#inputKey").value);
    },
    createLi: function (city) {
        const li = document.createElement("li").textContent = city
        document.querySelector(".search-history").append(li)
    },
    fiveDays: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            // Once URL fetched then use response.json to break down the information
            .then((response) => response.json())
            //Display data 
            .then((data) => {
                console.log(data)
                for (let i = 0; i < data.list.length; i++) {
                    const element = data.list[i];
                    if (element.dt_txt.indexOf("12:00:00") !== -1) {
                        console.log(element)
                    }
                        var temp= data.list[i].main.temp;
                        var humidity= data.list[i].main.humidity;

document.querySelector(".forecast-one").innerText = "Tempretaure is: " +temp + " ℃ "+ "Humidity is: " +humidity+ "%";

document.querySelector(".forecast-two").innerText = "Tempretaure is: " +temp + " ℃ "+"Humidity is: " +humidity+ "%";

document.querySelector(".forecast-three").innerText = "Tempretaure is: " +temp + " ℃ "+"Humidity is: " +humidity+ "%";

document.querySelector(".forecast-four").innerText = "Tempretaure is: " +temp + " ℃ "+"Humidity is: " +humidity+ "%";

document.querySelector(".forecast-five").innerText = "Tempretaure is: " +temp + " ℃ "+"Humidity is: " +humidity+ "%";
                    
                }
            });
    }
};

// activate the search button using the search function above
document.querySelector("#go-button").addEventListener("click", function () {
    weather.search();
})

// box invisible using coding quiz method
// arrange data in the five







