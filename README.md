## Concept
![Mockup of Suni](https://user-images.githubusercontent.com/104513836/203733858-d0823380-991b-4fe7-aabd-db2ce1dec96e.jpg)

check the live version of our project: https://suniweather.wcs-student-projects.d-a-pfeiffer.info

The second project of our group is based on React.js and our goal is to make a responsive weather application, named Suni.

The user will be able to get, for the locations he chooses, key informations about the weather : forecast, temperatures, wind speed, humidity, feels like temperature, sunrise and sunset hours.

A feature allows the user to get a forecast up to 3 days every 6 hours.
We also integrated a subscription to a newsletter that would send up daily or weekly forecasts to the user.

You can find the wireframes on this link : https://www.figma.com/file/3twqmFxQq0SZeGTPdNYUuz/Untitled?node-id=0%3A1

We used the following dependencies:
       - axios,
       - dotenv,
       - react-select-async-paginate. 

Framework:
       - Tailwind CSS. 


This project was created by the following team:
  - Pauline Kraus: @ThisisPauline 
  - Pierre Basck: @dreanx 
  - Osvaldo Felices: @osvfelices 
  - Anna Vachluk: @anna-valchuk 
  - Russell James Corpuz: @RussellCorpuz

Don't hesitate to reach out! 

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
