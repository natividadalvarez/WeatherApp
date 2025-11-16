exports.handler = async function(req, context) {
  let lat = req.queryStringParameters.lat;
  let lon = req.queryStringParameters.lon;
  if(!lat || !lon) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: "Latitidue or longitude not provided."})
    } 
  }
  console.log(lat, lon);
  let params = `&lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;
  let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial${params}`
  let hourlyWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial${params}`; 
  try {
    let currentReq = await fetch(currentWeatherUrl);
    let hourlyReq = await fetch(hourlyWeatherUrl);
    //I could probably still send the data for one of the requests if the other fails
    //but I won't bother with that for now
    if(!currentReq.ok || !hourlyReq.ok) {
      console.log(currentReq, hourlyReq)
      return {
        statusCode: 500,
        body: JSON.stringify({message: "Could not connect to OpenWeather API."})
      }
    }
    let currentWeather = await currentReq.json();
    let hourlyWeather = await hourlyReq.json();
    return {
      statusCode: 200,
      body: JSON.stringify(formatData(currentWeather, hourlyWeather))
    }

  } catch(err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({message: "Could not connect to OpenWeather API."})
    }
  }
    
} 

function formatData(currentWeather, hourlyWeather) {
  // NOTE: There can technically be many weather events in the weather array,
  // but for the purposes of this challenge, we'll just display the first 
  let currentWeatherFormatted = {
      dt: currentWeather.dt,
      weatherEvent: currentWeather.weather.length > 0? currentWeather.weather[0].main: "N/A",
      icon: currentWeather.weather.length > 0? currentWeather.weather[0].icon: "",
      temp: currentWeather.main.temp, 
      feelslike: currentWeather.main.feels_like,
      humidity: currentWeather.main.humidity,
      windSpeed: currentWeather.wind? currentWeather.wind.speed: 0,
      visibility: currentWeather.visibility,
      city: currentWeather.name,
      country: currentWeather.sys.country
    }

    let hourlyWeatherFormatted = hourlyWeather.list.map(datum=>{
     return {
      dt: datum.dt,
      weatherEvent: datum.weather.length > 0? datum.weather[0].main: "N/A",
      temp: datum.main.temp
     } 
    });

    return {
      currentWeather: currentWeatherFormatted,
      hourlyWeather: hourlyWeatherFormatted
    }
}