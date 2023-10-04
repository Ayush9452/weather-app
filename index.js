const apikey ="2d7d54788271d4e678871f6e7e32608d"
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const weather = document.querySelector('.weather')
const weatherIcon = document.querySelector('.weather-icon')
const city = document.getElementById('cityinput')

const weathersearch = async () =>{
    const response = await fetch(apiurl + city.value + "&appid=" + apikey);
    let data = await response.json();
    console.log(data)
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = `images/clouds.png`
    }
    if(data.weather[0].main === 'Clear'){
        weatherIcon.src = `images/clear.png`
    }
    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = `images/clouds.png`
    }
    if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = `images/drizzle.png`
    }
    if(data.weather[0].main === 'Rain'){
        weatherIcon.src = `images/rain.png`
    }
    if(data.weather[0].main === 'Snow'){
        weatherIcon.src = `images/snow.png`
    }
    city.value = "";
    weather.style.display = "block";
}

// const called =()=>{
//     const city = document.getElementById('cityinput').value
//     console.log(city)
//     console.log('called')
// }

// async function weatherreport(){
//     const response = await fetch(apiurl + apikey);
//     let data = await response.json();
//     console.log(data)
// }
