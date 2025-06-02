// Imports a parser that reads React.js code and translates it for prettier to use
const { parsers: javascriptParsers } = require("prettier/parser-babel");

function classNameFixer(text) {
    // Identifies incorrect use of class including use of space between class and name
    const incorrectPattern = / (class|class\s*name)=/gi;
    return text.replace(incorrectPattern, " className=");
}

// Exports the function and adds it to the prettier parser.
module.exports = {
    parsers: {
        babel: {
            ...javascriptParsers.babel,
            preprocess: classNameFixer,
        },
}
};
