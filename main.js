const apiKey = "109bef8f02bc73444967526d6b430999"; 
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('city-input');
const weathericon = document.querySelector('.sun-icon');


async function checkkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
    if (data.weather.main=="Clouds"){
        weathericon.src="./";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="Clear.jpeg";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="Rain.png ";
        
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="Drizzle.png ";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="Mist.jpeg ";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkkWeather(searchBox.value);
});

