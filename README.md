# Setup/Build Instructions
This project was created with the Angular CLI (v20) and is hosted on Netlify. To run locally you must have the following installed:
- Node.js
- Netlify CLI: https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/

You can run the app with angular's `ng dev` command if you have the Angular CLI installed, otherwise you can run with `npm start`.
However netlify serverless functions won't work locally you run the application with `netlify dev` from the netlify CLI.

This project uses an Angular SPA to take user requests for weather data and display it, and Netlify serverless functions to interface with the [OpenWeather API](https://openweathermap.org/api)

# Application Details
A user can either input their location in the text input provided, or juse the "use my locaton" button to allow the app to get their location via
the Web Geolocation API.

You will be able to see:
- The current temp, weather, conditions, and an Image representation of the weather conditions
- The 'feels like' temp, humidity, visibility, and wind speed
- A Forecast at 3 hour intervals over the next 5 days, to include temp and weather conditions

The OpenWeather API does not take city names as a parameter for getting forecast data, it requries latitude and longitude coordinates. It does have a geocoding API however that we use to verify entered city names and get back coordinates to use for our forecast query.

User queries can be in 1 of 2 formats:
- city,state code,country code
- city,country code

state codes and country codes are represented by 2 letters (e.g. NY, US)

State codes are only for countries in the United States, so any query delimited by 2 commas will be assumed to be of the first format
and any query of the second will be assumed to be in the second format. The city name you enter must match some record in the OpenWeather API (there is no other way to get coordinates as far as I know.) The box below the input is populated with suggestions. You can press the enter key when typing in the text input to just use the first very suggestion, or you can click on one of the suggesstions with the mouse. Once either occurs, weather data is popuplated below the text input, and you can view it, or perform another search.