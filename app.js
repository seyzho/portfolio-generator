const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ]);
};

promptUser().then(answers => console.log(answers));

const pageHTML = generatePage(usename, github);

fs.writeFile("index.html", generatePage(usename, github), err => {
    if (err) throw err;

    console.log("portfolio complete! check out index.html to see the output!");
}); 

