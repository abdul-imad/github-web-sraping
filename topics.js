let request = require("request");
let cheerio = require("cheerio");
let repos = require("./repos");

request("https://github.com/topics", cb);

function cb(err, response, html){
    if(err){
        console.log(err);
    }
    let cheerioSelector = cheerio.load(html);
    let elem = cheerioSelector(".topic-box a");
    let allNames = cheerioSelector(".topic-box .no-underline .f3");
    for(let i = 0 ; i < 3 ; i++){
        let topicName = cheerioSelector(allNames[i]).text();
        let links = cheerioSelector(elem[i]).attr("href").trim();
        //console.log(topicName);
        let compURL = "https://github.com" + links;
        //console.log(compURL);
        repos.repositories(compURL);
    }
}