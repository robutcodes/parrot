# React Jobly

Jobly is a full-stack application based on indeed.com 
The backend is built with node express and the frontend is built with React using a PostgreSQL database.

Jobly is live [here](https://parrot-warbler.herokuapp.com/)

# Table of Contents
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Features to add](#features-to-add)

## Setup

This application has a separate backend and frontend. Below are instructions on how to install and start each server.
### Backend
cd into /backend and type these following commands:

```
npm install
node server.js
```
The backend should now be starting on `http://localhost:3001/`

### Frontend
cd into /frontend from the root directory and type the following commands:

```
npm install
npm start
```
The frontend should now be starting on `http://localhost:3000/`

## Screenshots

![Alt text](/static/imagesscreenshot1.png?raw=true "Homepage")
![Alt text](/static/imagesscreenshot1.png?raw=true "Logged In Page")
![Alt text](/static/imagesscreenshot1.png?raw=true "Users page")


## Features

- Posting Messages (tweets)
- Liking Messages
- Following users
- User authentication / authorization

## Technologies

- jQuery
- Flask
- Bootstrap
- Jinja 
- PostgreSQL
- SQLAlchemy

## Testing 

Front end unit tests are written with Enzyme. Run the tests with the following commands: 

```
cd frontend
npm test
```

## Features to add

- Infinite scrolling
- Autocomplete search
- Add animated SVG's to home-card
- Add navlink for applied jobs
- Add ability to add Company
- Add ability to add Jobs
- Flush out front-end tests
