const fs = require("fs");

const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [usename, github] = profileDataArgs;

const pageHTML = generatePage(usename, github);

fs.writeFile("index.html", generatePage(usename, github), err => {
    if (err) throw err;

    console.log("portfolio complete! check out index.html to see the output!");
});