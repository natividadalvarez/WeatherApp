exports.handler = async function(req, context){
    /*
    endpoint: https://api.openweathermap.org/geo/1.0/direct?q={city_name},&appid={API_key}&limit={count:1} 
    returns lat, lon and other data for city that most closely matches query
    if limit is not specified, it returns 1 city by default
    q = string of city,state code,country code separated by comma
    state code is only for US locations, uses ISO 3166 country codes
    if no matches with query, response is empty array
    */
    let apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q="
    
    let query = req.queryStringParameters.query.split(",");
    let city = null;
    let state = null;
    let country = null;

    for(let i = 0; i < query.length; i++) {
        if(i == 0) {
            city=query[i].trim();
        } else if(i == 1) {
            if(query.length==2) {
                country=query[i].trim();
            } else {
                state=query[i].trim();
            }
        } else if(i == 2) {
            country=query[i].trim();
        }
    }

    let apiQueryParams = "";
    if(city && city.length > 0) {
        apiQueryParams += `${city},`
    }
    if(state && state.length > 0) {
        apiQueryParams += `${state},`
    }
    if(country && country.length > 0) {
        apiQueryParams += `${country}`
    }

    apiUrl += `${apiQueryParams}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`

    try {
        let res = await fetch(apiUrl);
        if (!res.ok) {
            return {
                statusCode: res.status,
                body: JSON.stringify({message: "Could not connect to OpenWeather API."})
            }
        } 
        let data = await res.json();
        let formattedLocationData = data.map(location=> {
            return {
               city: location.name,
               lat: location.lat,
               lon: location.lon,
               country: location.country,
               state: location.state? location.state: null 
            }
        });
        return {
            statusCode: 200,
            body: JSON.stringify(formattedLocationData)
        }
    } catch(err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({message: "Could not connect to OpenWeather API."})
        }
    }
}