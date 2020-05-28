# Parrot

Parrot is a full-stack application built with Python Flask.

[Parrot is live here](https://parrot-warbler.herokuapp.com/)

# Table of Contents
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Features to add](#features-to-add)

## Setup

This is a monolithic application built using Python's Flask web server.

To start the application, type 
`pip install -r requirements.txt`

then, run the following command: 
`python flask run`

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
