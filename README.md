# CPA02 - Taiwan Zip Code Searcher

## About
Taiwan Zip Code Searcher is a Node.js website previously deployed on Heroku but not anymore due to the end of free dynos at Heroku. The web app provides visitors to search zip codes of Taiwan based on keywords with data stored in a MongoDB database.

## Note
To run the project locally, please first donwload nodejs and npm or nodemon. Then, in **app.js**, change

``` bash
const uri = process.env.MONGODB_URI;
```

to

``` bash
const uri = '<your own MongoDB Atlas URL>';
```
