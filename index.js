"use strict";
module.exports = function() {
    let text = decodeURI(Array.prototype.join.call(arguments,''));

    try {
        text = JSON.stringify(JSON.parse(text), null,2);
    } catch (e) {

    }

    text = text.replace(/\\"/g,'"').replace(/\\\\n/g,'\n').replace(/\\\\t/g,'\t').replace(/\\n/g,'\n').replace(/\\t/g,'\t');

    return text;
}
