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

# Further Improvements
I wanted to list a couple of things that I would do or that would be nice to add If I had more time to polish all parts.

## Reactive Backgrounds And Animation
A nice addition to the look and feel would be that if I could have background images that would fade in and out depending on the weather condtions
for the city the user searched for. There are  Maybe additionally a short sound effect that would play it in, and even a canvas element overlaid on top of the
entire page that would have a precipitation animation (if it's snowing, it would raind down snowflakes, if its cloudy, clouds could float by, etc.)

## Mock API Data In Dev Environment
Initially in the project, I made a single request to the OpenWeather API, copied the response, and sent that data directly over my serverless functions. Then when ready, I switched out the dummy data for real requests to the API. What would be more ideal is if I kept serving dummy data in the dev environment over a local API modeled after the OpenWeather one rather than the real OpenWeather API. That way the back-end code stays the same, and all that changes is the URL the serverless functions make requests to. No risk of incurring costs or hitting limits on API usage.

## Rate limits
Especially being on the free tier, it would be pretty bad if one user was able to use up all the requests I had this month. It would probably be
a good idea to set up some form or rate limiting per user.