"use strict";
const { EOL } = require('os');

module.exports = function() {
    let text = decodeURI(Array.prototype.join.call(arguments,' ')).replace(/^'(.+)'$/,'$1'); // We need to remove the '' on Windows

    try {
        text = JSON.stringify(JSON.parse(text), null,2);
        if (process.platform === "win32"){
            text = text.replace(/\n/g,EOL); // JSON.stringify() doesn't care for CRLFs apparently
        }
    }
    catch (e) {

    }

    text = text.replace(/\\"/g,'"').replace(/\\\\n/g,EOL).replace(/\\\\t/g,'\t').replace(/\\n/g,EOL).replace(/\\t/g,'\t');
    
    

    return text;
}
