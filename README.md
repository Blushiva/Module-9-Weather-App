# Module-9-Weather-App
 Weather Dashboard

External APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in their context, frequently consuming this data via a server.
Your Challenge this week is to build a weather dashboard application that calls the OpenWeather API and renders data in the browser.
Weather Dashboard

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Render.
Use the 5-day weather forecast API Links to an external site. to retrieve weather data for cities.
The base URL should look like the following:
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.
For more information on how to work with the OpenWeather API, refer to the Full-Stack Blog on how to use API keys Links to an external site..

--IMPORTANT
Make sure to download and unzip the starter code files and make your own repository with the starter code.
Before you start, download the starter code Links to an external site..

--User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

--Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city, and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's `alt` tag, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
