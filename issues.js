let request = require("request");
let cheerio = require("cheerio");

function issues(url){
    request(url, cb);
}
function cb(err, response, html){
    if(err){
        console.log(err);
    }
    let arr = [];
    let cheerioSelector = cheerio.load(html);
    let allIssues = cheerioSelector(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open");
    for(let i = 0 ; i < allIssues.length ; i++){
        let issueName = cheerioSelector(allIssues[i]).text();
        let issueLink = cheerioSelector(allIssues[i]).attr("href");
        let issueObj = {
            link : "https://www.github.com" + issueLink,
            name : issueName,
        }
        arr.push(issueObj);
    }
    console.table(arr);

}

module.exports = {
    issues : issues
}