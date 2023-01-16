const fs = require("fs");
const path = require("path");
const { exec } = require("child_process")

const vars = require("../vars.js");

const bannersPath = path.resolve(__dirname, "../../src/banners");

const kebabCase = string => string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();

(async () => {
    let inquirer = (await import("inquirer"));
    inquirer = inquirer.default;

    inquirer.prompt(vars.questions)
        .then(answers => {
            if (!fs.existsSync(bannersPath)) {
                fs.mkdirSync(bannersPath);
            }

            fs.readdir(bannersPath, (error, files) => {
                if (error) {
                    throw error;
                }

                if (files.find(file => file === kebabCase(answers.name))) {
                    console.log(`Name must be unique.`);
                    return;
                }

                exec(
                    `plop banner -- --name "${answers.name}" --height ${answers.height} --width ${answers.width}`,
                    error => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            });
        });
})();