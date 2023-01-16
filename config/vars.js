module.exports = {
    questions: [
        {
            type: "input",
            name: "name",
            message: "What will be the name of your banner?",
        },
        {
            type: "input",
            name: "width",
            message: "What will be the width be?",
            default: 300,
        },
        {
            type: "input",
            name: "height",
            message: "What will the height be?",
            default: 300,
        }
    ],
};