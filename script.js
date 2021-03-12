let weather={
    apiKey:"5ef023d1a3a07faee421b4e629dd17e0",
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
.then ((response)=>response.json())
.then((data)=>console.log(data));

},
displayWeather:function(data){
const{ name}=data;
const {temp, humidity}=data.main;
const { speed}=data.wind;
console.log(name, temp, humidity,speed);
document.querySelector (".city").innerText="Weather in"+city
document.querySelector ("#humidity").innerText=temp;
document.querySelector("#wind").innerText=wind;
document.querySelector("uv").innerText=wind;



}
};