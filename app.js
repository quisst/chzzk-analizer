const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
let streamerName = require("./view/script");

app.use("/", express.static(__dirname + "/view"));

app.listen(8000, function(){
    console.log("App is running 8000 port");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/view/index.html");
});

async function getWebPage() {
    try {
        const response = await axios.get("https://chzzk.naver.com/search?query=" + streamerName);
        const $ = cheerio.load(response.data);
        console.log($);
    } catch (error) {
        console.log(error);
    }
}

getWebPage();


/*const url = axios.get("https://chzzk.naver.com/");
console.log(url)
console.log(url.data)
const webData = cheerio.load(url.data);
console.log(webData);*/