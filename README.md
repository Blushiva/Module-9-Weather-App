# Module 9 Weather App
 Weather Dashboard

# Project Description

External APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in their context, frequently consuming this data via a server.
Your Challenge this week is to build a weather dashboard application that calls the OpenWeather API and renders data in the browser.
Weather Dashboard

The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Render.
Use the 5-day weather forecast API Links to an external site. to retrieve weather data for cities.

# User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

# Process

1) Research other apps created by other people and cite them.

2) Figure out what is needed to run the app

3) .env file

4) node file

5) connect all the files

6) go get api key for the weather service

7) Put it all together

8) You have a weather app!

# Video Demonstration

[Module 9 Weather App](https://youtu.be/LUfN4h-_xBc?si=73Wq6fvM5_fG1eA8)


# Required Modules/Packages/Files

* node.js
* .env
* Vite
* Postgres SQL

# License

MIT


# Table Of Contents

- [Description](#description)
- [Process](#Process)
- [User Story]()
- [Acceptance Criteria]()
- [Table of Contents](#table-of-contents)
- [Video Demonstration]()
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing Resources]()
- [Questions](#questions)
- [CLASS REQUIREMENTS]()

# Installation

# Usage

NPM Run/Start


# Testing





# DIRECTIONS

### The base URL should look like the following:

https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}



After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.
For more information on how to work with the OpenWeather API, refer to the Full-Stack Blog on how to use API keys Links to an external site..

### IMPORTANT THINGS TO DO FOR YOUR APP
Make sure to download and unzip the starter code files and make your own repository with the starter code.
Before you start, download the starter code Links to an external site..



### Acceptance Criteria


GIVEN a weather dashboard with form inputs

WHEN I search for a city

THEN I am presented with current and future conditions for that city, and that city is added to the search history

WHEN I view current weather conditions for that city

THEN I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's `alt` tag, the temperature, the humidity, and the wind speed

WHEN I view future weather conditions for that city

THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history

THEN I am again presented with current and future conditions for that city

### Getting Started

On the back end, the application should include a searchHistory.json file that will be used to store and retrieve cities using the fs module.

The following HTML route should be created:

* GET * should return the index.html file.

*The following API routes should be created: 

GET /api/weather/history should read the searchHistory.json file and return all saved cities as JSON.
POST /api/weather should receive a city name to save on the request body, add it to the searchHistory.json file, and then return associated weather data to the client. You'll need to find a way to give each city name a unique id when it's saved (look into npm packages that could do this for you).
Refer to the Full-Stack Blog on deploying to Render Links to an external site. and the Render documentation on setting environment variables Links to an external site..

### Hints

Using the 5-day weather forecast API, you'll notice that you'll need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?
How could we make the OpenWeather API calls server-side, parse the data, and then send the parsed data client-side?

### Bonus

This application offers the DELETE functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:
DELETE /api/weather/history/:id should receive a route parameter that contains the id of a city name to delete. To delete a city, you'll need to read all the cities from the searchHistory.json file, remove the city with the given id property, and then rewrite the cities to the searchHistory.json file.
Grading Requirements

### NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
A repository that has no code
A repository that includes a unique name but nothing else
A repository that includes only a README file but nothing else
A repository that only includes starter code
This Challenge is graded based on the following criteria:


### Technical Acceptance Criteria: 40%

Satisfies all of the preceding acceptance criteria plus the following:
Application uses the OpenWeather API to retrieve weather data.
Application back end must store cities that have a unique id in a JSON file.
Application must be deployed to Render.


### Deployment: 32%

Application deployed at live URL.
Application loads with no errors.
Application GitHub URL submitted.
GitHub repository that contains application code.


### Application Quality: 15%

Application user experience is intuitive and easy to navigate.
Application user interface style is clean and polished.
Application resembles the mock-up functionality provided in the Challenge instructions.


### Repository Quality: 13%

Repository has a unique name.
Repository follows best practices for file structure and naming conventions.
Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
Repository contains multiple descriptive commit messages.
Repository contains a quality README file with description, screenshot, and link to deployed application.


