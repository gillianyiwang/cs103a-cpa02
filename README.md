# CPA02 - Taiwan Zip Code Searcher

## About
Taiwan Zip Code Searcher is a Node.js website deployed on Heroku that provides visitors to search zip codes of Taiwan based on keywords with data stored in a cloud-based MongoDB database.

Heroku Web Page: https://taiwan-zip-code-searcher.herokuapp.com

Video (Please sign in using a Brandeis google account to watch the video): https://drive.google.com/file/d/120erTAPWulj6PvsV_Nd6Be2JVg-wBqzE/view?usp=sharing



## Note
To run the project locally, please first donwload nodejs and npm or nodemon. Then, in **app.js**, change

``` bash
const uri = process.env.MONGODB_URI;
```

to

``` bash
const uri = '<your own MongoDB Atlas URL>';
```
