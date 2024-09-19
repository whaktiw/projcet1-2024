let temp = document.querySelector('#temp');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let wind = document.querySelector('#wind');
let weather = document.querySelector('#weather');
let icon = document.querySelector("#icon");
let icon_url = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";

function get_weather()
{
    let city = document.getElementById('city')
    let cityname = city.value;

    document.getElementById("country").innerText=city.value

    let temperature = document.getElementById("temperature").value;
    let temperature_sign;
     
    let weather_url = "https://api.openweathermap.org/data/2.5/find?"
    let appid = "&appid=7d96bc5108f52b80e2d9075a369b9f35&lang=kr"

    let final_url = weather_url + "q=" + cityname + "&units="+ temperature + appid

    // alert(final_url)
    axios.get(final_url)
    .then(function(response) {
        console.log(response.data);
        let wdata = response.data.list[0];
        let exdata = response.data.list[0].weather[0];

        if(!temperature) temperature_sign = "°K"
        else if(temperature == "imperial") temperature_sign = "°F"
        else if(temperature == "metric") temperature_sign = "°C"

        temp.innerText = wdata.main.temp + temperature_sign;
        min.innerText = wdata.main.temp_min + temperature_sign;
        max.innerText = wdata.main.temp_max + temperature_sign;
        wind.innerText = wdata.wind.speed;

        weather.innerText = exdata.main + "," + exdata.description;
        icon.setAttribute('src', icon_url + exdata.icon + ".png");
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {});
}

get_weather()