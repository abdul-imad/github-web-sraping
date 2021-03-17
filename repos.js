let request = require("request");
let cheerio = require("cheerio");
let issuesPage = require("./issues");
function repositories(url){
    request(url,cb);
}

function cb(err, response, html){
    if(err){
        console.log(err);
    }

    let cheerioSelector = cheerio.load(html);
    let allH1 = cheerioSelector("h1");
    let topicName = cheerioSelector(allH1[0]).text();
    //console.log(topicName);
    let allRepoLinks = cheerioSelector(".f3.color-text-secondary.text-normal.lh-condensed a");  //selects all anchor elements

    for(let i = 1 ; i <= 15; i += 2){   // every second anchor element is repo link. so i += 2
        let repoLink = cheerioSelector(allRepoLinks[i]).attr("href").trim();
        let issuesLink = "https://www.github.com" + repoLink + "/issues";
        issuesPage.issues(issuesLink);
    }
    
}







module.exports = {
    repositories : repositories
}