const apiKey = "4611b8d4bd189456b060d793f6bc2278" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

let search = document.querySelector("#inpt");
let btn = document.querySelector("#btn");
let icon = document.querySelector(".weather-icon") ;

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`) ;

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block" ;
        document.querySelector(".weather").style.display = "none" ;
    }
    else{
        let data = await response.json() ;

        console.log(data) ;
    
        let city1 = document.querySelector(".city") ;
        city1.innerHTML = data.name ;
        let temp = document.querySelector(".temp") ;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        let humid = document.querySelector(".humidity") ;
        humid.innerHTML = data.main.humidity + "%";
        let wind = document.querySelector(".Wind") ;
        wind.innerHTML = data.wind.speed + "km/hr";
    
        if(data.weather[0].main == 'Clouds')
        {
            icon.src = "cloud.png" ;
        }
        else  if(data.weather[0].main == 'Clear')
        {
            icon.src = "sunny.png" ;
        }
        else  if(data.weather[0].main == 'Rain')
        {
            icon.src = "rain.png" ;
        }
        else  if(data.weather[0].main == 'Drizzle')
        {
            icon.src = "thunderstorm.png" ;
        }
        else if(data.weather[0].main == 'Haze')
        {
            icon.src = "cold.png" ;
        }
    
        document.querySelector(".weather").style.display = "block" ;
        document.querySelector(".error").style.display = "none" ;
    }
   

}

btn.addEventListener("click" , ()=>
{
    checkWeather(search.value) ;
})


