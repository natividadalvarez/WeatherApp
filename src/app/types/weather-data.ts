export type CurrentWeatherData = {
    dt: number,
    weatherEvent: string,
    icon: string,
    temp: number,
    feelslike: number,
    humidity: number,
    windSpeed: number,
    visibility: number
    city: string,
    country: string
}

export type HourlyWeatherData = {
    dt: number,
    weatherEvent: string,
    temp: number,
}


export type WeatherDataAggregate = {
  currentWeather: CurrentWeatherData|null,
  hourlyWeather: HourlyWeatherData|null 
}