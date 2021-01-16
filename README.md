# Getting Started
## Tech

* [node.js](https://nodejs.org/en/about/)
* [mongoose](https://www.npmjs.com/package/mongoose) 
* [Express](https://expressjs.com/) 
* [eslint](https://www.npmjs.com/package/eslint) 
* [jest](https://www.npmjs.com/package/jest) 
* [nodemon](https://www.npmjs.com/package/nodemon)
* [heroku](https://www.npmjs.com/package/heroku)
* [dotenv](https://www.npmjs.com/package/dotenv)
            
 
 ## 1- Using Git Clone Repository
 ### Build Setup
 
  ```sh
> npm install 

```
 
 ```sh
> npm run dev  #at localhost:8000 

```

#### POST /api/record
Request Body(raw)

 ```sh
{
    "startDate": "2016-01-26",
    "endDate": "2015-02-02",
    "minCount": 2700,
    "maxCount": 3000
}

```

### Test

```sh
> npm test

```

## 2- Using Heroku

#### POST https://ancient-island-63657.herokuapp.com/api/record
Request Body(raw)

 ```sh
{
    "startDate": "2016-01-26",
    "endDate": "2015-02-02",
    "minCount": 2700,
    "maxCount": 3000
}

```
