module.exports = plop => {
    plop.setGenerator("banner", {
        description: "Create a banner",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your component name?",
            },
            {
                type: "input",
                name: "width",
                message: "What should the width be?",
            },
            {
                type: "input",
                name: "height",
                message: "What should the height be?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "src/banners/{{kebabCase name}}-{{width}}x{{height}}/index.ts",
                templateFile: "config/templates/banner.script.hbs",
            },
            {
                type: "add",
                path: "src/banners/{{kebabCase name}}-{{width}}x{{height}}/styles.scss",
                templateFile: "config/templates/banner.styles.hbs",
            },
            {
                type: "add",
                path: "src/banners/{{kebabCase name}}-{{width}}x{{height}}/markup.html",
                templateFile: "config/templates/banner.markup.hbs",
            },
        ],
    });
};